import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { IMAGES, VSL_VIMEO_ID } from '../data';

const VIMEO_ORIGIN = 'https://player.vimeo.com';

/**
 * VSL sem pausa.
 * - O player do Vimeo fica carregado por baixo da capa.
 * - O primeiro toque atravessa a capa e cai direto no player: assim o navegador
 *   (inclusive Safari no iPhone) aceita tocar com som.
 * - Quando o vídeo começa, uma camada transparente cobre o player e bloqueia
 *   novos cliques (pausa, barra de progresso, tela cheia). Os controles do Vimeo
 *   somem sozinhos porque o mouse nunca chega ao player.
 * - Se algo pausar o vídeo (ex.: sistema do celular), ele volta a tocar.
 */
export const VslPlayer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const endedRef = useRef(false);

  const send = (method: string, value?: unknown) => {
    const win = iframeRef.current?.contentWindow;
    if (win) win.postMessage(JSON.stringify(value === undefined ? { method } : { method, value }), VIMEO_ORIGIN);
  };

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== VIMEO_ORIGIN || e.source !== iframeRef.current?.contentWindow) return;
      let data: { event?: string } | null = null;
      try {
        data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      switch (data?.event) {
        case 'ready':
          ['play', 'pause', 'ended'].forEach((name) => send('addEventListener', name));
          break;
        case 'play':
          endedRef.current = false;
          setEnded(false);
          setStarted(true);
          break;
        case 'pause':
          // Sem pausa: se o vídeo parar antes do fim, retoma.
          if (!endedRef.current) send('play');
          break;
        case 'ended':
          endedRef.current = true;
          setEnded(true);
          break;
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const replay = () => {
    endedRef.current = false;
    setEnded(false);
    send('setCurrentTime', 0);
    send('play');
  };

  return (
    <div className="max-w-3xl mx-auto relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-8 border border-[#314B3F]/15 bg-black aspect-video group">
      <iframe
        ref={iframeRef}
        src={`${VIMEO_ORIGIN}/video/${VSL_VIMEO_ID}?title=0&byline=0&portrait=0&badge=0&dnt=1&keyboard=0&pip=0&autopause=0`}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay"
        title="Explicação da Dra. Betisa — Jantar Anti-Fome"
      />

      {/* Depois que começa: bloqueia qualquer clique no vídeo */}
      {started && !ended && <div className="absolute inset-0 z-10" aria-hidden="true" />}

      {/* Capa: visual por cima do player; o toque atravessa e inicia o vídeo */}
      {!started && (
        <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
          <img
            src={IMAGES.heroVideo}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#314B3F]/85 via-black/25 to-transparent flex flex-col items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#D98F7C] text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ring-4 ring-white/30">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current ml-1" />
            </div>
            <span className="mt-3.5 text-white text-xs sm:text-sm font-semibold tracking-wider bg-[#314B3F]/90 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 uppercase shadow-md">
              ▶ Clique para assistir à explicação da Dra. Betisa
            </span>
          </div>
        </div>
      )}

      {/* Fim do vídeo: opção de assistir de novo */}
      {ended && (
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
