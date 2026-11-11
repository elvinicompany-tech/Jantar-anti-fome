import React, { useEffect, useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { VSL_VIMEO_ID } from '../data';

const VIMEO_ORIGIN = 'https://player.vimeo.com';

interface VslPlayerProps {
  /** Chamado continuamente com a fração assistida do vídeo (0 a 1). */
  onProgress?: (fraction: number) => void;
}

/**
 * VSL com autoplay e sem pausa.
 * - O vídeo começa sozinho e sem som: é a única forma que os navegadores permitem.
 * - Um aviso grande "Clique para ouvir" cobre o vídeo. Ao tocar, o som liga e o
 *   vídeo volta do começo.
 * - Se o navegador (ex.: Safari no iPhone) recusar ligar o som desse jeito, o aviso
 *   muda para "Toque no vídeo" e o próximo toque cai direto no player, o que
 *   sempre é aceito.
 * - Depois disso, uma camada transparente bloqueia cliques (pausa, barra, tela cheia),
 *   e se algo pausar o vídeo ele volta a tocar sozinho.
 */
export const VslPlayer: React.FC<VslPlayerProps> = ({ onProgress }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // muted: tocando sem som | passthrough: próximo toque vai direto ao player | sound: tocando com som | ended
  const [mode, setMode] = useState<'muted' | 'passthrough' | 'sound' | 'ended'>('muted');
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;
  const pendingCheck = useRef<number | null>(null);

  const send = (method: string, value?: unknown) => {
    const win = iframeRef.current?.contentWindow;
    if (win) win.postMessage(JSON.stringify(value === undefined ? { method } : { method, value }), VIMEO_ORIGIN);
  };

  useEffect(() => {
    // Segurança: se o player do Vimeo não carregar (bloqueio, rede), libera a página
    // em vez de deixar a cliente presa sem ver a oferta.
    let gotReady = false;
    const fallback = window.setTimeout(() => {
      if (!gotReady) onProgressRef.current?.(1);
    }, 20000);
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== VIMEO_ORIGIN || e.source !== iframeRef.current?.contentWindow) return;
      let data: { event?: string; method?: string; value?: unknown; data?: { percent?: number } } | null = null;
      try {
        data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      if (!data) return;

      if (data.event === 'ready') {
        gotReady = true;
        ['play', 'pause', 'ended', 'finish', 'timeupdate', 'playProgress'].forEach((name) => send('addEventListener', name));
        send('play');
        return;
      }
      // O Vimeo usa 'playProgress' (nome antigo) ou 'timeupdate' para o progresso.
      if ((data.event === 'timeupdate' || data.event === 'playProgress') && typeof data.data?.percent === 'number') {
        onProgressRef.current?.(data.data.percent);
        return;
      }
      if (data.event === 'pause') {
        // Sem pausa: retoma, exceto no fim ou quando aguardamos o toque direto no player.
        if (modeRef.current !== 'ended' && modeRef.current !== 'passthrough') send('play');
        return;
      }
      if (data.event === 'play' && modeRef.current === 'passthrough') {
        // O toque direto no player funcionou: agora toca com som.
        setMode('sound');
        return;
      }
      if (data.event === 'ended' || data.event === 'finish') {
        onProgressRef.current?.(1);
        setMode('ended');
        return;
      }
      // Resposta da verificação feita logo após ligar o som.
      if (data.method === 'getPaused' && pendingCheck.current !== null) {
        pendingCheck.current = null;
        if (data.value === true && modeRef.current === 'sound') {
          // O navegador recusou tocar com som a partir do clique na página.
          setMode('passthrough');
        }
      }
    };
    window.addEventListener('message', onMessage);
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener('message', onMessage);
    };
  }, []);

  const turnSoundOn = () => {
    setMode('sound');
    send('setCurrentTime', 0);
    send('setMuted', false);
    send('setVolume', 1);
    send('play');
    pendingCheck.current = window.setTimeout(() => send('getPaused'), 1200);
  };

  const replay = () => {
    setMode('sound');
    send('setCurrentTime', 0);
    send('play');
  };

  return (
    <div className="max-w-3xl mx-auto relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-8 border border-[#314B3F]/15 bg-black aspect-video">
      <iframe
        ref={iframeRef}
        src={`${VIMEO_ORIGIN}/video/${VSL_VIMEO_ID}?autoplay=1&muted=1&playsinline=1&title=0&byline=0&portrait=0&badge=0&dnt=1&keyboard=0&pip=0&autopause=0`}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="Explicação da Dra. Betisa — Jantar Anti-Fome"
      />

      {/* Tocando sem som: aviso para ligar o som */}
      {mode === 'muted' && (
        <button
          type="button"
          onClick={turnSoundOn}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/35 cursor-pointer group"
        >
          <span className="flex flex-col items-center gap-2 text-white bg-[#D98F7C] group-hover:bg-[#C57E6B] px-6 py-4 sm:px-8 sm:py-5 rounded-2xl shadow-2xl ring-4 ring-white/40 transition-all group-hover:scale-105">
            <span className="relative flex">
              <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
              <Volume2 className="relative w-8 h-8 sm:w-10 sm:h-10" />
            </span>
            <span className="text-sm sm:text-base font-bold uppercase tracking-wider">Seu vídeo já começou</span>
            <span className="text-xs sm:text-sm font-medium">Clique para ouvir</span>
          </span>
        </button>
      )}

      {/* O navegador pediu um toque direto no vídeo: o aviso não bloqueia o toque */}
      {mode === 'passthrough' && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <span className="flex items-center gap-2 text-white bg-[#D98F7C] px-5 py-3 rounded-full shadow-2xl ring-4 ring-white/30 text-sm font-bold uppercase tracking-wider">
            <Volume2 className="w-5 h-5" /> Toque no vídeo para ouvir
          </span>
        </div>
      )}

      {/* Tocando com som: bloqueia qualquer clique no player */}
      {mode === 'sound' && <div className="absolute inset-0 z-10" aria-hidden="true" />}

      {/* Fim do vídeo: opção de assistir de novo */}
      {mode === 'ended' && (
        <button
          type="button"
          onClick={replay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/55 cursor-pointer"
        >
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wider bg-[#314B3F]/90 px-4 py-2 rounded-full border border-white/20 uppercase shadow-md">
            ↺ Assistir novamente
          </span>
        </button>
      )}
    </div>
  );
};
