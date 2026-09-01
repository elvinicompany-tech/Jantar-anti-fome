import React from 'react';
import { Laptop, Utensils, BookOpen, Calendar, Users, CheckCircle2 } from 'lucide-react';

export const PlatformDeliverablesSection: React.FC = () => {
  const deliverables = [
    {
      icon: Laptop,
      title: 'Acesso à Plataforma Online Exclusiva',
      desc: 'Assista às aulas curtas e objetivas no seu celular, tablet ou computador, no seu próprio ritmo.'
    },
    {
      icon: Utensils,
      title: 'Cardápios e Sugestões Práticas de Jantar',
      desc: 'Opções simples e equilibradas para você saber exatamente o que preparar sem complicação.'
    },
    {
      icon: BookOpen,
      title: 'Guia Prático de Combinações Rápidas',
      desc: 'Aprenda a combinar os alimentos que você já tem na sua geladeira de forma inteligente.'
    },
    {
      icon: Calendar,
      title: 'Estratégias para Finais de Semana e Eventos',
      desc: 'Como manter o equilíbrio e a saciedade em jantares fora de casa, festas e momentos sociais.'
    },
    {
      icon: Users,
      title: 'Suporte e Materiais Complementares',
      desc: 'Listas de compras organizadas, tabelas visuais e acompanhamento de dúvidas na plataforma.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F7F4F1] border-b border-[#E2DFDE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15">
            CONTEÚDO COMPLETO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#314B3F] mt-3 font-serif font-bold">
            O que você recebe ao entrar hoje
          </h2>
          <p className="text-[#1F2922]/85 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            Tudo o que você precisa para colocar o método em prática imediatamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white p-6 sm:p-7 rounded-2xl border border-[#E2DFDE] shadow-xs flex gap-4 hover:border-[#5F816C]/40 transition-all ${
                  idx === deliverables.length - 1 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#5F816C]/15 text-[#314B3F] flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-[#314B3F]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#314B3F] text-lg sm:text-xl mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1F2922]/85 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
