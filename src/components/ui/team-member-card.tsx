import React from 'react';
import { ArrowRight, Award, Users, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface TeamMemberCardProps {
  position?: 'left' | 'right';
  jobPosition?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  description?: string;
  className?: string;
  onCtaClick?: () => void;
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'ESPECIALISTA EM EMAGRECIMENTO FEMININO',
  firstName = 'Dra.',
  lastName = 'Betisa',
  imageUrl = 'https://lh3.googleusercontent.com/d/1VZwryANpUFTZ30-jmh8prmt2VX_qmr2h',
  description = 'Nutricionista especializada em emagrecimento feminino e Química de formação. Com 8 anos de experiência prática, uniu a ciência dos alimentos com a bioquímica dos hormônios para criar o Método Jantar Anti-Fome, que já transformou a vida de mais de 10 mil mulheres.',
  className,
  onCtaClick,
}: TeamMemberCardProps) {
  const isPositionRight = position === 'right';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative my-8 sm:my-16 flex flex-col justify-center max-w-6xl mx-auto px-4', className)}
    >
      {/* jobPosition label — editorial uppercase tracking */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 text-xs font-bold tracking-[0.3em] text-[#607F6D] uppercase',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Portrait image with reveal animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[380px] sm:h-[460px] md:h-[500px] w-full md:w-[380px] lg:w-[420px] shrink-0 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-4 border-white bg-[#314B3F]',
            isPositionRight && 'md:order-1'
          )}
        >
          {/* Subtle gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#1F2922]/50 via-transparent to-transparent" />
          <img
            src={imageUrl}
            alt={`${firstName} ${lastName}`}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-top duration-700 ease-[0.22,1,0.36,1] hover:scale-105"
          />
        </motion.div>

        {/* Info block — overlaps image via negative margin on larger screens */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative md:-left-10 z-20 flex w-full md:w-[calc(100%-340px)] lg:w-[calc(100%-380px)] flex-col gap-6 sm:gap-8 bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[2rem] border border-[#BDB8B8]/40 shadow-xl',
            isPositionRight && 'md:left-10 md:items-end'
          )}
        >
          {/* Display name — large editorial display typography */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-serif tracking-tight text-[#314B3F] font-bold">
              <span className="font-light italic text-[#607F6D] block text-2xl sm:text-3xl mb-1">{firstName}</span>
              {lastName}
            </h2>
          </div>

          {/* Bio copy & Key Highlights */}
          <div className="space-y-4">
            <p
              className={cn(
                'text-sm sm:text-base leading-[1.8] text-[#1F2922]/85 font-normal',
                isPositionRight && 'md:text-right'
              )}
            >
              {description}
            </p>

            {/* Metrics Pills */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-[#BDB8B8]/30">
              <div className="text-left bg-[#F5F3F6] p-2.5 sm:p-3 rounded-xl border border-[#BDB8B8]/20">
                <div className="flex items-center gap-1 text-[#607F6D] font-bold text-base sm:text-xl font-serif">
                  <Award className="w-4 h-4 hidden sm:block text-[#607F6D]" />
                  8 Anos
                </div>
                <p className="text-[10px] sm:text-xs text-[#1F2922]/70 font-semibold uppercase">Experiência</p>
              </div>

              <div className="text-left bg-[#F5F3F6] p-2.5 sm:p-3 rounded-xl border border-[#BDB8B8]/20">
                <div className="flex items-center gap-1 text-[#607F6D] font-bold text-base sm:text-xl font-serif">
                  <Users className="w-4 h-4 hidden sm:block text-[#607F6D]" />
                  +10 Mil
                </div>
                <p className="text-[10px] sm:text-xs text-[#1F2922]/70 font-semibold uppercase">Alunas</p>
              </div>

              <div className="text-left bg-[#F5F3F6] p-2.5 sm:p-3 rounded-xl border border-[#BDB8B8]/20">
                <div className="flex items-center gap-1 text-[#607F6D] font-bold text-base sm:text-xl font-serif">
                  <Heart className="w-4 h-4 hidden sm:block text-[#607F6D]" />
                  Nutri&Química
                </div>
                <p className="text-[10px] sm:text-xs text-[#1F2922]/70 font-semibold uppercase">Formação</p>
              </div>
            </div>
          </div>

          {/* Details row — circular CTA button */}
          <div className={cn('flex items-center gap-4 sm:gap-6 pt-2', isPositionRight && 'md:justify-end')}>
            {/* Circular CTA with hover animation */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCtaClick}
              className={cn(
                'group flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#607F6D] text-white border border-[#607F6D] transition-colors duration-300 hover:bg-[#314B3F] hover:border-[#314B3F] shadow-lg',
                isPositionRight && 'md:order-1'
              )}
              aria-label="Conhecer o método"
            >
              <ArrowRight
                size={22}
                className={cn(
                  'text-white transition-all duration-300 group-hover:translate-x-1',
                  isPositionRight && 'rotate-180 group-hover:-translate-x-1'
                )}
              />
            </motion.button>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#607F6D] block">
                Método Jantar Anti-Fome ®
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#314B3F]">
                Clique para conhecer o protocolo completo
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
