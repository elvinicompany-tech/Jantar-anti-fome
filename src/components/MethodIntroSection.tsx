import React from 'react';
import { Check, X, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

interface MethodIntroSectionProps {
  onOpenCheckout: () => void;
}

export const MethodIntroSection: React.FC<MethodIntroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="metodo" className="py-16 md:py-20 bg-white border-b border-[#E2DFDE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15">
            APRESENTAÇÃO DO MÉTODO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#314B3F] mt-3 font-serif font-bold leading-tight">
            O Método Jantar Anti-Fome
          </h2>
          <p className="text-[#1F2922]/85 mt-3 max-w-2xl mx-auto text-base sm:text-lg font-normal leading-relaxed">
            Um passo a passo para você organizar o seu jantar, ter mais saciedade e parar de sofrer com a fome noturna.
          </p>
        </div>

        {/* What it is NOT vs What it IS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* What it is NOT */}
          <div className="bg-[#FAF8F6] p-6 sm:p-8 rounded-2xl border border-[#E2DFDE]">
            <div className="flex items-center gap-2.5 mb-6 text-[#9E4A3B]">
              <X className="w-6 h-6 p-1 bg-[#9E4A3B]/10 rounded-full" />
              <h3 className="font-serif font-bold text-xl text-[#314B3F]">
                O que o Método NÃO É
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#1F2922]/80">
                <X className="w-5 h-5 text-[#9E4A3B] flex-shrink-0 mt-0.5" />
                <span><strong>Não é mais uma dieta restritiva</strong> que te proíbe de jantar com a sua família.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#1F2922]/80">
                <X className="w-5 h-5 text-[#9E4A3B] flex-shrink-0 mt-0.5" />
                <span><strong>Não exige contar calorias</strong> nem gramas de comida num aplicativo exaustivo.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#1F2922]/80">
                <X className="w-5 h-5 text-[#9E4A3B] flex-shrink-0 mt-0.5" />
                <span><strong>Não é sobre passar fome</strong> ou substituir refeições de verdade por chás e shakes.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#1F2922]/80">
                <X className="w-5 h-5 text-[#9E4A3B] flex-shrink-0 mt-0.5" />
                <span><strong>Não requer receitas caras</strong> ou ingredientes difíceis de encontrar no mercado.</span>
              </li>
            </ul>
          </div>

          {/* What it IS */}
          <div className="bg-[#F2F6F3] p-6 sm:p-8 rounded-2xl border border-[#5F816C]/30 shadow-xs">
            <div className="flex items-center gap-2.5 mb-6 text-[#314B3F]">
              <Check className="w-6 h-6 p-1 bg-[#314B3F]/15 rounded-full text-[#314B3F]" />
              <h3 className="font-serif font-bold text-xl text-[#314B3F]">
                O que o Método REALMENTE É
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#1F2922]/90">
                <Check className="w-5 h-5 text-[#314B3F] flex-shrink-0 mt-0.5" />
                <span><strong>Um guia prático e estruturado</strong> pensado especificamente para a rotina do seu jantar.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#1F2922]/90">
                <Check className="w-5 h-5 text-[#314B3F] flex-shrink-0 mt-0.5" />
                <span><strong>Combinações certas no prato</strong> para enviar sinais reais de saciedade ao seu cérebro.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#1F2922]/90">
                <Check className="w-5 h-5 text-[#314B3F] flex-shrink-0 mt-0.5" />
                <span><strong>Estratégias simples de aplicação</strong> que funcionam mesmo em dias corridos e cansativos.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[#1F2922]/90">
                <Check className="w-5 h-5 text-[#314B3F] flex-shrink-0 mt-0.5" />
                <span><strong>Liberdade e autonomia</strong> para você saber o que comer sem culpa nem ansiedade.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#precos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('precos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenCheckout();
            }}
            className="inline-flex items-center justify-center bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-sm sm:text-base font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer uppercase tracking-wider group"
          >
            QUERO O PASSO A PASSO DO MÉTODO
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
