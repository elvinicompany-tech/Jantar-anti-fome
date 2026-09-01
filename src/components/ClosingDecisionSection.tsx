import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ClosingDecisionSectionProps {
  onOpenCheckout: () => void;
}

export const ClosingDecisionSection: React.FC<ClosingDecisionSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#314B3F] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Reflection Header */}
        <div className="text-center mb-8">
          <span className="text-[#DCB2A6] text-xs font-semibold tracking-widest uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
            SUA DECISÃO HOJE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mt-3 font-bold leading-tight text-white">
            Antes de decidir, responda com sinceridade...
          </h2>
        </div>

        {/* Reflection Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-10 text-base sm:text-lg text-white/90 font-normal leading-relaxed text-center shadow-xl">
          <p className="font-serif text-lg sm:text-xl font-medium text-white mb-4">
            "Quanto custa continuar acordando cansada, jantando sem sentir saciedade de verdade e sentindo que precisa recomeçar a dieta a cada nova segunda-feira?"
          </p>
          <p className="text-sm sm:text-base text-white/80 pt-3 border-t border-white/10">
            O problema nunca foi a sua falta de disciplina ou força de vontade. Era apenas a falta do ajuste certo na refeição mais estratégica do seu dia.
          </p>
        </div>

        {/* Two Paths Comparison */}
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#DCB2A6] mb-6">
          A partir de agora, você tem dois caminhos:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Path 1 */}
          <div className="bg-white/5 p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#DCB2A6] font-bold uppercase text-xs tracking-wider">
                <XCircle className="w-5 h-5 text-[#DCB2A6]" />
                Caminho 1 — Continuar como está
              </div>
              <p className="text-sm text-white/75 leading-relaxed font-normal">
                Fechar esta página, manter o mesmo formato de jantar e continuar enfrentando a fome noturna, a ansiedade por doces e a frustração de não ver resultados.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/10 text-xs text-[#DCB2A6]/80 font-medium">
              Manter o mesmo ciclo de tentativas e frustrações.
            </div>
          </div>

          {/* Path 2 */}
          <div className="bg-[#5F816C]/30 p-6 sm:p-7 rounded-2xl border border-[#5F816C] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-white font-bold uppercase text-xs tracking-wider">
                <CheckCircle2 className="w-5 h-5 text-[#5F816C]" />
                Caminho 2 — Testar por 7 dias sem risco
              </div>
              <p className="text-sm text-white/90 leading-relaxed font-normal">
                Garantir seu acesso hoje, aprender as combinações práticas para o seu jantar e experimentar a sensação de dormir saciada e em paz com a sua alimentação.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#5F816C]/40 text-xs text-white font-semibold">
              Garantia incondicional de 7 dias inclusa.
            </div>
          </div>
        </div>

        {/* Terracota CTA Button */}
        <div className="text-center">
          <a
            href="#precos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('precos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenCheckout();
            }}
            className="inline-flex items-center justify-center bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-base sm:text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer uppercase tracking-wider group"
          >
            SIM, QUERO TRANSFORMAR MEU JANTAR
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

