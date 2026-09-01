import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

interface MetabolicQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const MetabolicQuizModal: React.FC<MetabolicQuizModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  if (!isOpen) return null;

  const questions = [
    {
      title: 'Em qual momento você sente mais fome ou ansiedade?',
      options: ['No final da tarde / início da noite', 'De madrugada ou ao acordar', 'O dia todo beliscando']
    },
    {
      title: 'Como é o seu jantar atualmente?',
      options: [
        'Janto "certinho", mas depois ataco doces ou pacotes',
        'Substituo o jantar por pão, tapioca ou lanche rápido',
        'Cozinho pratos normais mas sinto fome logo em seguida'
      ]
    },
    {
      title: 'Já tentou dietas ou remédios sem resultados duradouros?',
      options: [
        'Sim, perco peso e recupero tudo em seguida',
        'Sinto que meu metabolismo travou e não responde',
        'Quero um método simples e prático focado na saciedade real'
      ]
    }
  ];

  const handleSelect = (option: string) => {
    const updated = { ...answers, [step]: option };
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Result screen
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#BDB8B8]/50 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#314B3F] text-[#F5F3F6] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#DCB2A6]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#DCB2A6]">
              DIAGNÓSTICO RÁPIDO
            </span>
          </div>
          <h3 className="text-xl font-serif font-bold">Avaliação de Fome Noturna</h3>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {step < questions.length ? (
            <div>
              {/* Progress bar */}
              <div className="w-full bg-[#F5F3F6] h-1.5 rounded-full mb-6 overflow-hidden border border-[#BDB8B8]/30">
                <div
                  className="bg-[#607F6D] h-full transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              <span className="text-xs text-[#607F6D] font-bold tracking-wider uppercase block mb-1">
                PERGUNTA 0{step + 1} DE 0{questions.length}
              </span>
              <h4 className="text-lg font-bold text-[#314B3F] mb-4 font-serif">
                {questions[step].title}
              </h4>

              <div className="space-y-3">
                {questions[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(opt)}
                    className="w-full text-left p-4 rounded-2xl border border-[#BDB8B8]/50 hover:border-[#607F6D] hover:bg-[#F5F3F6] text-sm font-medium text-[#1F2922] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-[#607F6D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-[#607F6D]/15 text-[#607F6D] rounded-full flex items-center justify-center mx-auto border border-[#607F6D]/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-serif font-bold text-[#314B3F]">
                Resultado do seu Perfil
              </h4>

              <div className="bg-[#F5F3F6] p-4 rounded-2xl text-left border border-[#BDB8B8]/40 text-sm text-[#1F2922] space-y-2">
                <p className="font-semibold text-[#314B3F]">
                  Diagnóstico: Programação Noturna Inadequada do Jantar
                </p>
                <p className="text-xs leading-relaxed text-[#1F2922]/80">
                  A sua fome noturna não é falta de disciplina, mas sim a instrução hormonal incorreta que seu jantar passa para seu corpo antes do sono. O Método Jantar Anti-Fome resolve isso em 7 dias.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenCheckout();
                  }}
                  className="w-full bg-[#607F6D] hover:bg-[#314B3F] text-white font-bold py-4 rounded-2xl shadow-lg transition-all text-base cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  DESTRAVAR SACIEDADE AGORA →
                </button>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-[#1F2922]/70 hover:text-[#607F6D] flex items-center justify-center gap-1 mx-auto transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Refazer teste
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
