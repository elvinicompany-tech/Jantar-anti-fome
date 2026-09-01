import React from 'react';
import { CHECKOUT_URL } from '../data';
import { Zap, Lock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CourseDeviceMockup } from './CourseDeviceMockup';

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F4F1] border-b border-[#E2DFDE]" id="precos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-[#314B3F] text-[11px] sm:text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15">
            OFERTA ESPECIAL DE LANÇAMENTO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#314B3F] mt-3 font-serif font-bold leading-tight px-2 sm:px-0">
            Tudo o que você leva ao garantir sua vaga hoje
          </h2>
          <p className="text-[#1F2922]/85 mt-2 text-sm sm:text-lg px-2 sm:px-0">
            Acesso completo ao Método Jantar Anti-Fome + todos os bônus exclusivos.
          </p>
        </div>

        {/* Unified Pricing Offer Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E2DFDE]">
          {/* Top: Device Mockup */}
          <div className="bg-[#FAF8F6] p-4 sm:p-8 border-b border-[#E2DFDE] relative overflow-hidden text-center">
            <span className="inline-block text-[#314B3F] bg-[#314B3F]/10 font-bold text-[10px] sm:text-xs uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wider border border-[#314B3F]/15 mb-3 sm:mb-4">
              ACESSO IMEDIATO EM QUALQUER DISPOSITIVO
            </span>
            <CourseDeviceMockup />
          </div>

          {/* Bottom: Details & Pricing */}
          <div className="p-4 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left Column: List of Included Items */}
              <div className="lg:col-span-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#314B3F] mb-4 sm:mb-6 font-bold">
                  Tudo que você leva hoje:
                </h3>

                <ul className="space-y-2.5 sm:space-y-3 text-[#1F2922] font-semibold text-xs sm:text-sm">
                  <li className="flex items-center gap-2.5 sm:gap-3 bg-[#F2EEEE] p-3 sm:p-3.5 rounded-2xl border border-[#E2DFDE] text-[#1F2922]">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#5F816C] flex-shrink-0" />
                    <span className="font-bold text-xs sm:text-sm">Método Jantar Anti-Fome — <span className="line-through text-[#1F2922]/40 font-normal">R$ 497,00</span></span>
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 px-1.5 sm:px-2 py-0.5 sm:py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F816C] flex-shrink-0" />
                    <span><strong>Bônus 1:</strong> 21 Receitas Anti-Fome (R$ 67,00)</span>
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 px-1.5 sm:px-2 py-0.5 sm:py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F816C] flex-shrink-0" />
                    <span><strong>Bônus 2:</strong> 10 Receitas de Sobremesas (R$ 47,00)</span>
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 px-1.5 sm:px-2 py-0.5 sm:py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F816C] flex-shrink-0" />
                    <span><strong>Bônus 3:</strong> Jejum Intermitente (R$ 97,00)</span>
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 px-1.5 sm:px-2 py-0.5 sm:py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F816C] flex-shrink-0" />
                    <span><strong>Bônus 4:</strong> Masterclass (R$ 97,00)</span>
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 px-1.5 sm:px-2 py-0.5 sm:py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F816C] flex-shrink-0" />
                    <span><strong>Bônus 5:</strong> Planner "Jantar Anti-Fome" (R$ 27,00)</span>
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 px-1.5 sm:px-2 py-0.5 sm:py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F816C] flex-shrink-0" />
                    <span><strong>Bônus 6:</strong> Guia de Suplementos (R$ 97,00)</span>
                  </li>
                  <li className="flex items-center gap-2.5 sm:gap-3 px-1.5 sm:px-2 py-0.5 sm:py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5F816C] flex-shrink-0" />
                    <span><strong>Bônus 7:</strong> Ebook de Receitas de Chás (R$ 67,00)</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Investment Block & Pricing */}
              <div className="lg:col-span-6 lg:border-l lg:border-[#E2DFDE] lg:pl-8 flex flex-col justify-between pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E2DFDE]">
                <div>
                  <div className="text-xs sm:text-sm text-[#1F2922]/60 font-bold uppercase tracking-wider mb-1">
                    De <span className="line-through">R$ 996,00</span> e <span className="line-through">R$ 697,00</span>
                  </div>
                  <div className="text-xs font-bold text-[#5F816C] uppercase tracking-widest mb-2">
                    POR APENAS:
                  </div>

                  <div className="flex items-baseline gap-1.5 sm:gap-2 mb-1">
                    <span className="text-sm sm:text-base font-bold text-[#314B3F]">12x de</span>
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#314B3F] font-serif tracking-tight">R$ 29,60</span>
                  </div>

                  <p className="text-[#314B3F] font-bold text-xs sm:text-base mb-4 sm:mb-5">
                    Ou R$ 296,00 à vista
                  </p>

                  <div className="bg-[#F7F4F1] p-3.5 sm:p-5 rounded-2xl text-xs sm:text-sm mb-5 sm:mb-6 border border-[#E2DFDE] space-y-2">
                    <p className="text-[#1F2922]/90 leading-relaxed font-normal">
                      <strong>Acesso completo por 1 ano</strong> — método, cardápios, receitas e todos os bônus, pra você aplicar no seu ritmo e revisar sempre que precisar no computador, tablet ou celular.
                    </p>
                    <p className="text-[#5F816C] font-semibold leading-relaxed">
                      Menos de R$ 1,00 por dia para deixar de viver com fome, controlar a compulsão, parar de beliscar o dia inteiro e finalmente voltar a ver o peso baixar na balança.
                    </p>
                  </div>
                </div>

                <div>
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenCheckout();
                    }}
                    className="block w-full bg-[#5F816C] hover:bg-[#4E6B59] text-white text-center text-xs sm:text-base lg:text-lg font-bold py-3.5 sm:py-4 px-3 sm:px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer uppercase tracking-wider"
                  >
                    QUERO CONTROLAR MINHA FOME →
                  </a>

                  <ul className="flex justify-center items-center gap-4 sm:gap-6 mt-3 sm:mt-4 text-[11px] sm:text-xs text-[#1F2922]/70 font-medium">
                    <li className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#D98F7C]" />
                      Acesso imediato
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#5F816C]" />
                      Pagamento 100% Seguro
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

