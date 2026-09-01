import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#314B3F] text-white border-t border-[#5F816C]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8 border-b border-white/10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo variant="light" showSubtext={true} />
            <p className="text-white/60 text-xs mt-3 font-medium">
              © {new Date().getFullYear()} Dra. Betisa Vitisin • Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/70 font-medium uppercase tracking-wider">
            <a href="#precos" className="hover:text-[#DCB2A6] transition-colors">
              Termos de Uso
            </a>
            <a href="#precos" className="hover:text-[#DCB2A6] transition-colors">
              Política de Privacidade
            </a>
            <a href="#precos" className="hover:text-[#DCB2A6] transition-colors">
              Atendimento & Suporte
            </a>
          </div>
        </div>

        {/* Responsible Health Disclaimer */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] text-white/50 leading-relaxed font-normal">
            Aviso Legal: As informações e conteúdos apresentados neste site possuem caráter educativo e informativo. Este programa não substitui o diagnóstico, tratamento ou acompanhamento médico e nutricional individualizado. Os resultados podem variar de pessoa para pessoa de acordo com a resposta biológica individual e o cumprimento das orientações.
          </p>
        </div>
      </div>
    </footer>
  );
};

