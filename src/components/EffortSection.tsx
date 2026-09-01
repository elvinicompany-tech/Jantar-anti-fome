import React from 'react';
import { IMAGES } from '../data';

export const EffortSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-purple text-xs font-bold tracking-widest uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            ESFORÇO
          </span>

          <h2 className="text-4xl md:text-5xl text-gray-900 mt-4 leading-tight mb-8 font-serif">
            Não é falta de <span className="text-brand-purple italic">esforço.</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-normal">
            <p>
              Durante a menopausa, <strong>alterações hormonais podem favorecer o aumento da gordura abdominal,</strong> perda de massa muscular, piora do sono e redução do gasto energético.
            </p>
            <p className="text-brand-purple font-medium text-xl border-l-4 border-brand-purple pl-4 py-1">
              O problema não é que você está fazendo pouco. O problema é que seu corpo agora responde de forma diferente.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={IMAGES.effortImage}
              alt="Mulher medindo cintura com fita métrica"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-purple rounded-[2.5rem] z-0 hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};
