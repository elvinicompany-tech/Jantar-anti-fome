import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'header';
  className?: string;
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', showSubtext = true }) => {
  if (variant === 'header') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className="font-serif text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#314B3F] leading-none">
          Betisa Vitisin
        </span>
        {showSubtext && (
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#A67E72] font-semibold mt-0.5 sm:mt-1">
            NUTRICIONISTA & COACH
          </span>
        )}
      </div>
    );
  }

  if (variant === 'light') {
    return (
      <div className={`flex flex-col text-left ${className}`}>
        <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F3F6] leading-none">
          Betisa Vitisin
        </span>
        {showSubtext && (
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#DCB2A6] font-semibold mt-1">
            NUTRICIONISTA & COACH
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#314B3F] leading-none">
        Betisa Vitisin
      </span>
      {showSubtext && (
        <>
          <div className="flex items-center gap-2 my-2 w-32 sm:w-40">
            <div className="h-[1px] flex-1 bg-[#C19A8B]/50" />
            <div className="w-1 h-1 rounded-full bg-[#C19A8B]" />
            <div className="h-[1px] flex-1 bg-[#C19A8B]/50" />
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#A67E72] font-semibold">
            NUTRICIONISTA & COACH
          </span>
        </>
      )}
    </div>
  );
};
