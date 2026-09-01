import React, { useState } from 'react';
import { DOMINO_STEPS } from '../data';
import { Activity, Moon, ZapOff, Footprints, TrendingDown, Gauge, AlertCircle, Info } from 'lucide-react';

export const DominoEffect: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string | null>('7');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-4 h-4 text-brand-purple" />;
      case 'Moon': return <Moon className="w-4 h-4 text-brand-purple" />;
      case 'ZapOff': return <ZapOff className="w-4 h-4 text-brand-purple" />;
      case 'Footprints': return <Footprints className="w-4 h-4 text-brand-purple" />;
      case 'TrendingDown': return <TrendingDown className="w-4 h-4 text-brand-purple" />;
      case 'Gauge': return <Gauge className="w-4 h-4 text-brand-purple" />;
      default: return <AlertCircle className="w-4 h-4 text-white" />;
    }
  };

  const activeStep = DOMINO_STEPS.find((s) => s.id === activeStepId) || DOMINO_STEPS[DOMINO_STEPS.length - 1];

  return (
    <section className="py-24 bg-slate-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-brand-purple text-xs font-bold tracking-widest uppercase bg-purple-100/80 px-3.5 py-1 rounded-full">
          METABOLISMO EM CADEIA
        </span>

        <h2 className="text-3xl md:text-5xl text-gray-900 mt-4 mb-12 font-serif">
          O efeito dominó <br />
          <span className="text-brand-purple italic font-serif">da menopausa</span>
        </h2>

        {/* Vertical Chain */}
        <div className="space-y-3 flex flex-col items-center">
          {DOMINO_STEPS.map((step) => {
            const isSelected = activeStepId === step.id;

            if (step.isResult) {
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`bg-brand-purple text-white rounded-full py-4 px-10 shadow-lg w-full max-w-sm text-lg font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 cursor-pointer ring-4 ${
                    isSelected ? 'ring-brand-purple/40 scale-105' : 'ring-transparent'
                  }`}
                >
                  <AlertCircle className="w-5 h-5 text-yellow-300" />
                  <span>{step.title}</span>
                </button>
              );
            }

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`border rounded-full py-3.5 px-10 shadow-sm w-full max-w-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-purple-100 border-brand-purple text-brand-purple font-bold shadow'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200'
                }`}
              >
                {getIcon(step.icon)}
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Explanation Detail Card */}
        {activeStep && (
          <div className="mt-8 bg-white p-6 rounded-2xl border border-purple-100 shadow-md max-w-md mx-auto text-left animate-fadeIn">
            <div className="flex items-center gap-2 text-brand-purple font-bold text-sm mb-2">
              <Info className="w-4 h-4" />
              <span>Entenda este pilar: {activeStep.title}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              {activeStep.description}
            </p>
          </div>
        )}

        <p className="mt-12 text-gray-700 text-lg font-medium max-w-xl mx-auto leading-relaxed">
          Uma peça derruba a outra. O ReMAM interrompe esse efeito dominó na origem.
        </p>
      </div>
    </section>
  );
};
