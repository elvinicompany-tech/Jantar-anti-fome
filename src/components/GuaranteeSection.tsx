import React from 'react';
import { ShieldCheck, Lock, CreditCard, Clock } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E2DFDE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F4F1] rounded-3xl p-8 sm:p-10 border border-[#E2DFDE] flex flex-col md:flex-row items-center gap-8 shadow-xs">
          <div className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md bg-[#5F816C]/10 relative">
            <img
              src="https://lh3.googleusercontent.com/d/1UIG6MMF1TuMffDfW8rgXfTnuH0LYJqj7"
              alt="Garantia 7 dias Dra. Betisa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-white border border-[#E2DFDE] px-3.5 py-1.5 rounded-full">
              GARANTIA INCONDICIONAL
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#314B3F] mt-3 mb-2 font-bold">
              7 dias para testar sem risco
            </h2>

            <p className="text-[#1F2922]/85 text-sm sm:text-base mb-4 leading-relaxed font-normal">
              Acesse a plataforma, veja as sugestões e cardápios, aplique no seu jantar e sinta os primeiros resultados na sua saciedade.
            </p>

            <div className="p-4 bg-white rounded-2xl border-l-4 border-[#5F816C] shadow-2xs mb-5">
              <p className="text-xs sm:text-sm text-[#1F2922]/90 leading-relaxed font-medium">
                Se dentro de 7 dias você entender que o método não é para você, basta solicitar o reembolso na plataforma. O processo é simples, transparente e sem complicações.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#1F2922]/70 pt-3 border-t border-[#E2DFDE]">
              <span className="flex items-center gap-1.5 text-[#314B3F]">
                <Lock className="w-4 h-4 text-[#5F816C]" />
                Compra 100% segura
              </span>
              <span className="flex items-center gap-1.5 text-[#314B3F]">
                <CreditCard className="w-4 h-4 text-[#5F816C]" />
                Cartão · Pix · Boleto
              </span>
              <span className="flex items-center gap-1.5 text-[#314B3F]">
                <Clock className="w-4 h-4 text-[#5F816C]" />
                1 ano de acesso
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

