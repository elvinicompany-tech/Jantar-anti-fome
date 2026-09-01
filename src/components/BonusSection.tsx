import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { BONUSES } from '../data';

interface BonusSectionProps {
  onOpenCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E2DFDE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15">
            PRESENTES ESPECIAIS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#314B3F] mt-3 font-serif font-bold">
            Bônus exclusivos para esta turma
          </h2>
          <p className="text-[#1F2922]/85 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            Materiais complementares desenvolvidos para acelerar e facilitar a sua jornada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BONUSES.map((bonus, index) => {
            const isLast = index === BONUSES.length - 1;
            return (
              <div
                key={bonus.id}
                className={`bg-[#F7F4F1] p-6 sm:p-7 rounded-2xl border border-[#E2DFDE] flex flex-col justify-between hover:border-[#5F816C]/40 transition-all shadow-2xs ${
                  isLast ? 'md:col-span-2 lg:col-span-3 w-full max-w-2xl mx-auto' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#314B3F] uppercase bg-white px-3 py-1 rounded-md border border-[#E2DFDE] flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-[#5F816C]" /> Bônus 0{bonus.num}
                    </span>
                    <span className="text-xs font-bold text-[#5F816C] bg-[#5F816C]/10 px-2.5 py-1 rounded-full uppercase">
                      GRÁTIS
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-[#314B3F] text-lg mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1F2922]/85 leading-relaxed font-normal">
                    {bonus.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2DFDE] flex justify-between items-center text-xs">
                  <span className="text-[#1F2922]/60">Valor individual: <span className="line-through">{bonus.value}</span></span>
                  <span className="font-bold text-[#314B3F] uppercase">Incluso hoje</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center px-2 sm:px-0">
          <a
            href="#precos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('precos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenCheckout();
            }}
            className="inline-flex items-center justify-center w-full sm:w-auto bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-xs sm:text-base font-bold px-5 sm:px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer uppercase tracking-wider group text-center"
          >
            <span>QUERO GARANTIR O MÉTODO COM TODOS OS BÔNUS</span>
            <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
