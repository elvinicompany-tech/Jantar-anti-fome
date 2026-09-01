import React, { useState, useEffect, useRef } from 'react';
import { COURSE_MODULES } from '../data';
import { ArrowRight, ChevronRight, Utensils, Zap, RefreshCw, Moon, Clock, Sparkles } from 'lucide-react';

interface CourseModulesProps {
  onOpenCheckout?: () => void;
}

export const CourseModules: React.FC<CourseModulesProps> = ({ onOpenCheckout }) => {
  const [activePhaseId, setActivePhaseId] = useState<string>('1');
  const [visibleCardIds, setVisibleCardIds] = useState<Set<string>>(new Set(['1']));
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const activeObserverCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-phase-id');
          if (id) {
            setActivePhaseId(id);
          }
        }
      });
    };

    const activeObserverOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-35% 0px -40% 0px',
      threshold: 0.1,
    };

    const activeObserver = new IntersectionObserver(activeObserverCallback, activeObserverOptions);

    const revealObserverCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-phase-id');
          if (id) {
            setVisibleCardIds((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        }
      });
    };

    const revealObserverOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.15,
    };

    const revealObserver = new IntersectionObserver(revealObserverCallback, revealObserverOptions);

    Object.values(cardRefs.current).forEach((el: HTMLDivElement | null) => {
      if (el) {
        activeObserver.observe(el);
        revealObserver.observe(el);
      }
    });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const scrollToPhase = (id: string) => {
    setActivePhaseId(id);
    const targetEl = cardRefs.current[id];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getPhaseHighlights = (index: number) => {
    switch (index) {
      case 0:
        return [
          'Montagem expressa e simples',
          'Lógica do prato antissabor residual',
          'Livre de receitas complicadas'
        ];
      case 1:
        return [
          'Identificação da janela de saciedade',
          'Ajuste da rotina pré-jantar',
          'Redução da ansiedade ao fim do dia'
        ];
      case 2:
        return [
          'Sugestões práticas de cardápio',
          'Combinação ideal: proteína, fibra e gordura boa',
          'Estímulo natural da saciedade prolongada'
        ];
      case 3:
        return [
          'Preparação para um sono tranquilo',
          'Escolhas alimentares leves no jantar',
          'Acordar com mais disposição'
        ];
      case 4:
        return [
          'Estratégias para fins de semana e eventos',
          'Manutenção sem culpa nem dietas drásticas',
          'Consistência no dia a dia'
        ];
      default:
        return [];
    }
  };

  return (
    <section id="fases" className="relative bg-[#314B3F] text-[#F7F4F1] py-16 lg:py-24 overflow-x-clip border-b border-[#E2DFDE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <span className="text-[#DCB2A6] text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            PASSO A PASSO DO PROTOCOLO
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white mt-3 font-serif font-bold leading-tight px-2 sm:px-0">
            As 5 Fases do Método Jantar Anti-Fome
          </h2>
          <p className="text-white/85 mt-2.5 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed font-normal px-2 sm:px-0">
            O caminho estruturado para organizar seu jantar e ter mais saciedade todas as noites.
          </p>
        </div>

        {/* Mobile Sticky Horizontal Phase Bar */}
        <div className="lg:hidden sticky top-16 z-30 -mx-4 px-4 py-3 bg-[#1F2922]/95 backdrop-blur-md border-y border-white/10 mb-8 flex items-center gap-2 overflow-x-auto no-scrollbar shadow-lg">
          {COURSE_MODULES.map((mod) => {
            const isActive = activePhaseId === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => scrollToPhase(mod.id)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border cursor-pointer ${
                  isActive
                    ? 'bg-[#D98F7C] text-white border-white shadow-md'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                }`}
              >
                <span>Fase {mod.id}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#DCB2A6] animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start relative">
          
          {/* Left Column: Sticky Sidebar Panel */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 z-20">
            <div className="bg-[#1F2922]/90 backdrop-blur-xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="mb-6">
                <span className="text-[#DCB2A6] text-xs font-bold uppercase tracking-widest block mb-1">
                  ESTRUTURA DO MÉTODO
                </span>
                <h3 className="text-2xl font-serif font-semibold text-white leading-snug">
                  As 5 Etapas Práticas
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  Clique ou navegue para ver os detalhes de cada fase:
                </p>
              </div>

              {/* Navigation Phase Buttons */}
              <div className="space-y-2.5">
                {COURSE_MODULES.map((mod, idx) => {
                  const isActive = activePhaseId === mod.id;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => scrollToPhase(mod.id)}
                      className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer relative overflow-hidden group ${
                        isActive
                          ? 'bg-[#D98F7C] border-white/80 text-white shadow-lg translate-x-1'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DCB2A6]" />
                      )}

                      <div className="flex items-center gap-3 pl-1">
                        <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#DCB2A6]' : 'text-white/50'}`}>
                          0{idx + 1}
                        </span>
                        <div>
                          <p className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-[#DCB2A6]' : 'text-white/60'}`}>
                            {mod.number}
                          </p>
                          <p className="text-sm font-medium font-serif leading-tight text-white">
                            {mod.title}
                          </p>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#DCB2A6]' : 'text-white/30'}`} />
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 mt-6 border-t border-white/15">
                <a
                  href="#precos"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('precos');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else onOpenCheckout && onOpenCheckout();
                  }}
                  className="w-full inline-flex items-center justify-center bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-xs font-bold py-3.5 px-4 rounded-full shadow-lg transition-all duration-300 uppercase tracking-wider group cursor-pointer"
                >
                  QUERO APLICAR AS 5 FASES
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-12">
            {COURSE_MODULES.map((mod, idx) => {
              const isActive = activePhaseId === mod.id;
              const isVisible = visibleCardIds.has(mod.id);
              const highlights = getPhaseHighlights(idx);

              return (
                <div
                  key={mod.id}
                  id={`fase-${mod.id}`}
                  data-phase-id={mod.id}
                  ref={(el) => (cardRefs.current[mod.id] = el)}
                  className={`scroll-mt-28 transition-all duration-500 rounded-3xl p-6 sm:p-8 relative overflow-hidden border ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${
                    isActive
                      ? 'bg-[#1F2922] border-[#DCB2A6]/60 shadow-2xl'
                      : 'bg-[#1F2922]/80 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/15">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#DCB2A6]">
                      {mod.number}
                    </span>
                    <span className="text-xs font-mono uppercase text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      Etapa 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                    {mod.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal mb-6">
                    {mod.subtitle}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {highlights.map((point, hIdx) => (
                        <div key={hIdx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-[10px] font-mono text-[#DCB2A6] block mb-1">
                            0{hIdx + 1}
                          </span>
                          <p className="text-xs text-white/90 leading-snug font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Section CTA */}
        <div className="text-center mt-10 lg:mt-12 px-2 sm:px-0">
          <a
            href="#precos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('precos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenCheckout && onOpenCheckout();
            }}
            className="inline-flex items-center justify-center w-full sm:w-auto bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-xs sm:text-base md:text-lg font-bold px-6 py-4 sm:px-10 sm:py-5 rounded-full shadow-xl transition-all cursor-pointer group uppercase tracking-wider text-center"
          >
            <span>QUERO O JANTAR ANTI-FOME</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};


