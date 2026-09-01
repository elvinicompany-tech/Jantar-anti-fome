import React from 'react';
import { Check, X } from 'lucide-react';

export const ForWhomSection: React.FC = () => {
  const forWhomYes = [
    'Sente que o jantar é o momento mais crítico do seu dia.',
    'Quer parar de beliscar doces e exagerar à noite por impulso.',
    'Busca uma rotina alimentar prática, saborosa e plenamente viável.',
    'Quer voltar a sentir saciedade de forma natural no fim do dia.'
  ];

  const forWhomNo = [
    'Procura milagres da noite para o dia sem mudar nada.',
    'Prefere continuar fazendo dietas extremamente restritivas e punitivas.',
    'Não está disposta a aplicar pequenas mudanças práticas na montagem do prato.'
  ];

  return (
    <section id="para-quem" className="py-16 sm:py-20 bg-[#F7F4F1] border-b border-[#E2DFDE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15">
            PERFIL IDEAL
          </span>
          <h2 className="text-3xl md:text-5xl text-[#314B3F] mt-3 font-serif font-bold leading-tight">
            Para quem é / Não é
          </h2>
          <p className="text-[#1F2922]/85 mt-2 max-w-xl mx-auto text-base sm:text-lg font-normal">
            Entenda se o Método Jantar Anti-Fome é indicado para o seu momento atual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Para quem É */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#5F816C]/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#5F816C]/15 text-[#314B3F] flex items-center justify-center font-bold">
                  <Check className="w-5 h-5 text-[#314B3F]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#314B3F]">
                  É para você que:
                </h3>
              </div>

              <ul className="space-y-4 text-[#1F2922]/85 text-sm sm:text-base font-normal">
                {forWhomYes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#314B3F] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E2DFDE] text-xs text-[#314B3F] font-semibold">
              ✓ Um método simples, prático e sem extremismos.
            </div>
          </div>

          {/* Para quem NÃO é */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E2DFDE] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#D98F7C]/15 text-[#D98F7C] flex items-center justify-center font-bold">
                  <X className="w-5 h-5 text-[#D98F7C]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#314B3F]">
                  Não é para você que:
                </h3>
              </div>

              <ul className="space-y-4 text-[#1F2922]/85 text-sm sm:text-base font-normal">
                {forWhomNo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-[#D98F7C] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E2DFDE] text-xs text-[#1F2922]/60 font-medium">
              Buscamos mulheres dispostas a transformar suas noites com consistência.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

