import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const CAROUSEL_IMAGES = [
  { id: 1, url: "https://lh3.googleusercontent.com/d/1kB0PlenLmF8X6tyIPWaHXWOjvkdKW1pX" },
  { id: 2, url: "https://lh3.googleusercontent.com/d/135vgmEPUdSX5pzEby2dpta4IkC9b73dC" },
  { id: 3, url: "https://lh3.googleusercontent.com/d/1kW28EFW2hXdc5lMvIAvepc1oD_Sg-BNx" },
  { id: 4, url: "https://lh3.googleusercontent.com/d/1MLE6BrVizlKYz7xUiByPMHxtw5ckssYs" },
  { id: 5, url: "https://lh3.googleusercontent.com/d/1-QmPgMR4_Tr53p2G9P5shDUDem86Nrib" },
  { id: 6, url: "https://lh3.googleusercontent.com/d/19aDVoEwWBtS2AyjU5pcKHYL4UxCSa7_B" },
  { id: 7, url: "https://lh3.googleusercontent.com/d/1iEN3l6_l4Li7RTSwR8XVSaKgENJUPIHm" },
  { id: 8, url: "https://lh3.googleusercontent.com/d/1ZYVm68gKD0f53Lj0TWDZOT3mj5ap-Df6" }
];

interface Carousel3DProps {
  onOpenImageLightbox?: (url: string) => void;
}

export const Carousel3D: React.FC<Carousel3DProps> = ({ onOpenImageLightbox }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  return (
    <div 
      className="relative w-full py-4 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Stage Container */}
      <div className="relative h-[320px] sm:h-[450px] md:h-[490px] w-full flex items-center justify-center overflow-visible">
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ 
            perspective: "1200px", 
            transformStyle: "preserve-3d" 
          }}
        >
          {CAROUSEL_IMAGES.map((item, idx) => {
            let diff = idx - activeIndex;
            const half = CAROUSEL_IMAGES.length / 2;
            if (diff > half) diff -= CAROUSEL_IMAGES.length;
            if (diff < -half) diff += CAROUSEL_IMAGES.length;

            const tx = diff * (isMobile ? 110 : 250);
            const tz = -Math.abs(diff) * (isMobile ? 70 : 150);
            const ry = -diff * (isMobile ? 14 : 20);
            const isCenter = idx === activeIndex;

            return (
              <motion.div
                key={item.id}
                onClick={() => {
                  if (isCenter && onOpenImageLightbox) {
                    onOpenImageLightbox(item.url);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  opacity: isCenter ? 1 : Math.max(0.2, 0.55 - Math.abs(diff) * 0.12),
                  scale: isCenter ? 1.05 : Math.max(0.68, 1 - Math.abs(diff) * 0.12),
                  x: tx,
                  z: tz,
                  rotateY: ry,
                  y: hoveredIndex === idx ? -10 : 0,
                  filter: isCenter 
                    ? "blur(0px) brightness(1.05)" 
                    : `blur(${Math.min(4, Math.abs(diff) * 1.5)}px) brightness(${0.75 - Math.abs(diff) * 0.1})`,
                }}
                transition={{
                  x: { type: "spring", stiffness: 180, damping: 24 },
                  z: { type: "spring", stiffness: 180, damping: 24 },
                  rotateY: { type: "spring", stiffness: 180, damping: 24 },
                  scale: { duration: 0.35 },
                  opacity: { duration: 0.35 }
                }}
                className={`absolute w-[190px] sm:w-[260px] md:w-[310px] h-[280px] sm:h-[390px] md:h-[430px] rounded-[24px] overflow-hidden cursor-pointer transition-shadow duration-300 ${
                  isCenter 
                    ? "shadow-[0_20px_45px_rgba(49,75,63,0.3)] border-2 border-[#607F6D] z-30" 
                    : "shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-[#BDB8B8]/40 z-10"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="relative w-full h-full bg-white p-2 rounded-[24px] overflow-hidden flex items-center justify-center group">
                  <img
                    src={item.url}
                    alt={`Relato ${item.id}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-[18px] bg-[#FAF8FA]"
                  />
                  
                  {isCenter && (
                    <div className="absolute inset-0 bg-[#314B3F]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[24px] pointer-events-none">
                      <span className="bg-white/95 text-[#314B3F] font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
                        <ZoomIn className="w-4 h-4 text-[#607F6D]" /> Clique para ampliar
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls & Indicators */}
      <div className="flex items-center justify-center gap-4 mt-6 z-20 relative">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Anterior"
          className="p-2.5 rounded-full bg-white border border-[#BDB8B8]/50 text-[#314B3F] hover:bg-[#607F6D] hover:text-white transition-all shadow-xs cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === activeIndex 
                  ? "w-7 bg-[#607F6D]" 
                  : "w-2 bg-[#BDB8B8]/60 hover:bg-[#607F6D]/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Próximo"
          className="p-2.5 rounded-full bg-white border border-[#BDB8B8]/50 text-[#314B3F] hover:bg-[#607F6D] hover:text-white transition-all shadow-xs cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
