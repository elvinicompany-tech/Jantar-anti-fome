import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, onOpenQuiz }) => {
  return (
    <header className="sticky top-0 z-50 w-full pt-3 pb-3 px-3 sm:px-6 md:px-8 backdrop-blur-xs">
      {/* Floating Capsule Header Bar */}
      <div className="max-w-7xl mx-auto bg-white/95 border border-[#DCB2A6]/60 rounded-full shadow-lg shadow-[#314B3F]/5 px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all backdrop-blur-md">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Logo variant="header" />
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#precos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('precos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenCheckout();
            }}
            className="bg-[#D98F7C] hover:bg-[#C57E6B] text-white pl-3.5 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider flex items-center gap-1.5 sm:gap-3 group"
          >
            <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm whitespace-nowrap">QUERO COMEÇAR</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#D98F7C] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 group-hover:rotate-45 shadow-2xs">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D98F7C] stroke-[2.5]" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
