import React from 'react';
import { Play, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroSectionProps {
  onPlayVideo: () => void;
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayVideo, onOpenCheckout }) => {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden bg-quarter-circle-pattern border-b border-[#E2DFDE]">
      {/* Soft ambient gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#5F816C]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* TAG */}
        <div className="inline-block mb-4">
          <span className="bg-[#314B3F]/10 text-[#314B3F] text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#314B3F]/15">
            MÉTODO JANTAR ANTI-FOME
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#314B3F] leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 max-w-4xl mx-auto">
          Controle a <span className="italic font-normal text-[#D98F7C]">fome noturna</span> começando pelo seu jantar.
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-base sm:text-lg md:text-xl text-[#1F2922]/85 mb-6 sm:mb-8 max-w-2xl mx-auto font-normal leading-relaxed px-2 sm:px-0">
          Descubra como montar um jantar simples e estratégico para aumentar a saciedade e reduzir a vontade de continuar comendo à noite — sem dietas extremas e sem depender apenas de força de vontade.
        </p>

        {/* Video Placeholder Container (VSL) */}
        <div
          onClick={onPlayVideo}
          className="max-w-3xl mx-auto relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-8 border border-[#314B3F]/15 group cursor-pointer bg-white"
        >
          <img
            src={IMAGES.heroVideo}
            alt="Vídeo de Apresentação Jantar Anti-Fome Dra. Betisa"
            referrerPolicy="no-referrer"
            className="w-full aspect-video object-cover group-hover:scale-102 transition-transform duration-500 opacity-95"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#314B3F]/85 via-black/25 to-transparent flex flex-col items-center justify-center group-hover:bg-black/20 transition-all">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#D98F7C] hover:bg-[#C57E6B] text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ring-4 ring-white/30">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current ml-1" />
            </div>
            
            <span className="mt-3.5 text-white text-xs sm:text-sm font-semibold tracking-wider bg-[#314B3F]/90 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 uppercase shadow-md">
              ▶ Clique para assistir à explicação da Dra. Betisa
            </span>
          </div>
        </div>

        {/* Main Terracota CTA Below Video */}
        <div className="space-y-4 px-2 sm:px-0">
          <a
            href="#precos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('precos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenCheckout();
            }}
            className="inline-flex items-center justify-center w-full sm:w-auto bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-sm sm:text-lg md:text-xl font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer uppercase tracking-wider text-center"
          >
            QUERO CONHECER O MÉTODO →
          </a>

          {/* Microcopy */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#1F2922]/80 font-medium pt-1">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D98F7C]" />
              Acesso imediato
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D98F7C]" />
              7 dias de garantia
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D98F7C]" />
              Acesso por 1 ano
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
