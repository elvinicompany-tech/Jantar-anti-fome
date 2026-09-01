import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface FooterCTAProps {
  onOpenCheckout: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#314B3F] text-white text-center relative overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 leading-tight font-bold text-white px-2 sm:px-0">
          Comece a transformar a sua fome hoje mesmo
        </h2>

        <div className="px-2 sm:px-0 mb-8">
          <a
            href="#precos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('precos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenCheckout();
            }}
            className="inline-flex items-center justify-center w-full sm:w-auto bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-xs sm:text-base md:text-lg font-bold px-6 sm:px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer uppercase tracking-wider text-center"
          >
            <span>QUERO GARANTIR MEU ACESSO AGORA</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80 font-medium">
          <li className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D98F7C]" />
            Garantia de 7 dias
          </li>
          <li className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#D98F7C]" />
            Acesso imediato
          </li>
          <li className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D98F7C]" />
            1 ano de acesso
          </li>
        </ul>
      </div>
    </section>
  );
};

