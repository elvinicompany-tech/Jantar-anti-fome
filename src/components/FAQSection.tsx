import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'Como recebo o acesso ao método?',
    answer: 'Assim que seu pagamento for confirmado, você receberá um e-mail com seus dados de acesso imediatos para entrar na nossa plataforma de alunos.'
  },
  {
    id: '2',
    question: 'Funciona para quem tem rotina corrida e pouco tempo?',
    answer: 'Sim! As aulas são curtas e objetivas, e as estratégias foram desenhadas justamente para quem precisa de soluções práticas de jantar em até 15 ou 20 minutos.'
  },
  {
    id: '3',
    question: 'Preciso comprar alimentos caros ou ingredientes difíceis de achar?',
    answer: 'Não. O Método Jantar Anti-Fome utiliza ingredientes comuns que você já encontra no supermercado tradicional e já costuma ter na sua geladeira.'
  },
  {
    id: '4',
    question: 'Por quanto tempo terei acesso ao material?',
    answer: 'Você terá acesso completo durante 1 ano (12 meses), podendo assistir às aulas e consultar os guias quantas vezes desejar.'
  },
  {
    id: '5',
    question: 'E se eu tiver dúvidas durante o processo?',
    answer: 'Você pode enviar suas dúvidas diretamente na área de membros abaixo das aulas ou pela nossa equipe de suporte para receber orientação.'
  }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F4F1] border-b border-[#E2DFDE]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15">
            ESCLAREÇA SUAS DÚVIDAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#314B3F] font-bold mt-3 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-[#1F2922]/85 mt-2 text-base">
            Tudo o que você precisa saber antes de iniciar sua transformação.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E2DFDE] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left font-serif font-bold text-[#314B3F] hover:text-[#5F816C] transition-colors cursor-pointer gap-4"
                >
                  <span className="text-base sm:text-lg leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5F816C] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-[#1F2922]/85 text-sm sm:text-base leading-relaxed border-t border-[#E2DFDE] font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

