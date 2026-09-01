import React from 'react';
import { CheckCircle2, Clock, Check } from 'lucide-react';

interface RepositionSectionProps {
  onOpenCheckout: () => void;
}

export const RepositionSection: React.FC<RepositionSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-12 md:py-16 bg-[#F7F4F1] bg-quarter-circle-pattern border-t border-[#E2DFDE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Grid Layout: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-serif text-[#314B3F] leading-tight font-bold">
              Você passa o dia tentando se controlar e{' '}
              <span className="italic font-normal text-[#D98F7C]">
                perde a mão justamente à noite?
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-[#1F2922]/90 text-sm sm:text-base leading-relaxed font-normal">
              Você chega cansada, abre a geladeira sem saber o que comer, belisca enquanto decide e, mesmo depois do jantar, ainda sente vontade de doce ou de ‘só mais alguma coisa’.
            </p>

            <div className="bg-[#314B3F]/5 border-l-4 border-[#D98F7C] p-4 rounded-r-xl my-1">
              <p className="font-bold text-[#314B3F] text-base sm:text-lg font-serif">
                Então o problema pode não ser falta de disciplina.
              </p>
              <p className="text-[#1F2922]/90 text-sm sm:text-base leading-relaxed mt-1">
                Pode ser que você esteja chegando ao momento mais difícil do dia sem uma estratégia alimentar que realmente sustente você.
              </p>
            </div>

            <p className="text-[#314B3F] font-medium text-sm sm:text-base leading-relaxed">
              O <strong className="text-[#314B3F]">Jantar Anti-Fome</strong> ensina como organizar uma refeição simples e satisfatória pensando também nas horas que vêm depois dela.
            </p>

            {/* Key Pillars */}
            <div className="pt-1 space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#D98F7C]/15 text-[#D98F7C] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-semibold text-[#314B3F] text-xs sm:text-sm">Sem cardápio rígido e sem cozinhar duas refeições.</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#D98F7C]/15 text-[#D98F7C] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-semibold text-[#314B3F] text-xs sm:text-sm">Sem viver de salada com frango e continuar com fome.</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3 space-y-3">
              <a
                href="#precos"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('precos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onOpenCheckout();
                }}
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-xs sm:text-base font-bold px-5 sm:px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer uppercase tracking-wider text-center"
              >
                QUERO CONTROLAR MINHA FOME À NOITE →
              </a>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 text-xs text-[#314B3F] font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D98F7C]" />
                  Garantia de 7 dias
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D98F7C]" />
                  Acesso por 1 ano
                </span>
              </div>
            </div>

          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden shadow-xl border-4 border-white bg-white w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[360px]">
              <img
                src="https://lh3.googleusercontent.com/d/1VZwryANpUFTZ30-jmh8prmt2VX_qmr2h"
                alt="Dra. Betisa Vitisin - Nutricionista e Coach"
                referrerPolicy="no-referrer"
                className="w-full h-auto block rounded-[1.5rem] sm:rounded-[1.9rem] hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

