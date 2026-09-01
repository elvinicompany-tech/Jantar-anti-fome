import React from 'react';
import { Sparkles, Moon, Brain, Utensils } from 'lucide-react';

interface WhyImportantSectionProps {
  onOpenCheckout: () => void;
}

export const WhyImportantSection: React.FC<WhyImportantSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="mecanismo" className="py-16 md:py-20 bg-white border-b border-[#E2DFDE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15">
            O MECANISMO SIMPLES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#314B3F] mt-3 font-serif font-bold leading-tight">
            Por que o jantar pode mudar o restante da sua noite?
          </h2>
          <p className="text-[#1F2922]/85 mt-3 max-w-2xl mx-auto text-base sm:text-lg font-normal leading-relaxed">
            O que você coloca no prato influencia não apenas aquele momento, mas também sua saciedade e suas escolhas nas horas seguintes.
          </p>
        </div>

        {/* Mechanism Transformation -> Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#F7F4F1] p-6 sm:p-7 rounded-2xl border border-[#E2DFDE] shadow-2xs hover:border-[#5F816C]/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#5F816C]/15 text-[#314B3F] flex items-center justify-center mb-4">
              <Utensils className="w-5 h-5 text-[#314B3F]" />
            </div>
            <h3 className="font-serif font-bold text-[#314B3F] text-xl mb-2">
              1. A Combinação Certa no Prato
            </h3>
            <p className="text-sm text-[#1F2922]/85 leading-relaxed">
              Quando você combina os nutrientes na proporção ideal no jantar, você envia um sinal claro de saciedade para o seu corpo, evitando beliscos involuntários.
            </p>
          </div>

          <div className="bg-[#F7F4F1] p-6 sm:p-7 rounded-2xl border border-[#E2DFDE] shadow-2xs hover:border-[#5F816C]/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#5F816C]/15 text-[#314B3F] flex items-center justify-center mb-4">
              <Brain className="w-5 h-5 text-[#314B3F]" />
            </div>
            <h3 className="font-serif font-bold text-[#314B3F] text-xl mb-2">
              2. Controle dos Desejos Noturnos
            </h3>
            <p className="text-sm text-[#1F2922]/85 leading-relaxed">
              Em vez de lutar contra a vontade de comer doce à noite com pura força de vontade, a refeição bem estruturada reduz o desejo impulsivo na raiz.
            </p>
          </div>

          <div className="bg-[#F7F4F1] p-6 sm:p-7 rounded-2xl border border-[#E2DFDE] shadow-2xs hover:border-[#5F816C]/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#5F816C]/15 text-[#314B3F] flex items-center justify-center mb-4">
              <Moon className="w-5 h-5 text-[#314B3F]" />
            </div>
            <h3 className="font-serif font-bold text-[#314B3F] text-xl mb-2">
              3. Noites Tranquilas e Sem Culpa
            </h3>
            <p className="text-sm text-[#1F2922]/85 leading-relaxed">
              Você termina o dia satisfeita, dorme melhor e acorda no dia seguinte com mais disposição, sem a sensação de ter exagerado.
            </p>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="bg-[#314B3F] text-white p-6 sm:p-8 rounded-2xl text-center max-w-3xl mx-auto shadow-lg mb-8">
          <div className="inline-flex items-center gap-2 text-[#DCB2A6] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" /> Transformação Prática
          </div>
          <p className="text-base sm:text-lg font-serif italic text-white/95 leading-relaxed">
            "A verdadeira mudança não vem de fechar a boca à força à noite, mas de saber dar ao seu corpo a saciedade correta no momento exato."
          </p>
        </div>
      </div>
    </section>
  );
};
