import React, { useState } from 'react';
import { Sparkles, Cookie, HeartHandshake, ShieldCheck, ChevronDown, ChevronUp, Microscope } from 'lucide-react';
import { WHY_IMPORTANT_POINTS } from '../data';

interface BenefitsGridProps {
  onOpenCheckout?: () => void;
}

export const BenefitsGrid: React.FC<BenefitsGridProps> = ({ onOpenCheckout }) => {
  const [showScience, setShowScience] = useState(false);

  const benefitsCards = [
    {
      icon: Sparkles,
      title: 'Saciedade profunda e duradoura',
      desc: 'Aprenda a combinação de nutrientes que sacia de verdade, para você terminar o jantar satisfeita e sem vontade de rondar a cozinha.'
    },
    {
      icon: Cookie,
      title: 'Fim dos beliscos noturnos',
      desc: 'Desligue os gatilhos da fome após as 20h para seu corpo parar de acumular calorias na madrugada e relaxar em paz.'
    },
    {
      icon: HeartHandshake,
      title: 'Corpo mais leve e desinchado ao acordar',
      desc: 'Ao jantar de forma estratégica, seu corpo desinflama durante o sono para você acordar sentindo a barriga mais leve e as roupas mais confortáveis.'
    },
    {
      icon: ShieldCheck,
      title: 'Paz com a balança e com o espelho',
      desc: 'Recupere o controle natural sobre a comida, fazendo as pazes com o seu reflexo matinal sem precisar de dietas restritivas.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F7F4F1] border-b border-[#E2DFDE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15">
            O QUE VOCÊ CONSEGUE NA PRÁTICA
          </span>
          <h2 className="text-3xl md:text-5xl text-[#314B3F] mt-3 font-serif font-bold">
            Principais benefícios do método
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefitsCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E2DFDE] hover:border-[#5F816C]/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#5F816C]/15 text-[#314B3F] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 text-[#314B3F]" />
                  </div>
                  <h3 className="font-serif font-bold text-[#314B3F] text-xl mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#1F2922]/85 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collapsible Science Section */}
        <div className="text-center">
          <button
            onClick={() => setShowScience(!showScience)}
            className="inline-flex items-center gap-2 text-[#314B3F] hover:text-[#5F816C] font-semibold text-sm sm:text-base bg-white border border-[#E2DFDE] px-6 py-3 rounded-full shadow-2xs hover:shadow-md transition-all cursor-pointer"
          >
            <Microscope className="w-4 h-4 text-[#5F816C]" />
            <span>A ciência por trás do método</span>
            {showScience ? <ChevronUp className="w-4 h-4 text-[#D98F7C]" /> : <ChevronDown className="w-4 h-4 text-[#D98F7C]" />}
          </button>

          {showScience && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-fadeIn">
              {WHY_IMPORTANT_POINTS.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E2DFDE] shadow-xs"
                >
                  <h4 className="font-serif font-bold text-[#314B3F] text-lg mb-2">
                    {pt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F2922]/85 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
