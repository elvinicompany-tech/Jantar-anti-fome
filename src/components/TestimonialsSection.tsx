import React from 'react';
import { ZoomIn, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Marquee } from './ui/marquee';

interface TestimonialsSectionProps {
  onOpenImageLightbox: (imageUrl: string) => void;
  onOpenCheckout: () => void;
}

const GALLERY_IMAGES = [
  {
    image: "https://lh3.googleusercontent.com/d/1kB0PlenLmF8X6tyIPWaHXWOjvkdKW1pX",
    name: "Mariana S.",
    role: "Relatou mais saciedade à noite"
  },
  {
    image: "https://lh3.googleusercontent.com/d/135vgmEPUdSX5pzEby2dpta4IkC9b73dC",
    name: "Claudia R.",
    role: "Sem beliscar depois do jantar"
  },
  {
    image: "https://lh3.googleusercontent.com/d/1kW28EFW2hXdc5lMvIAvepc1oD_Sg-BNx",
    name: "Patrícia M.",
    role: "Mais disposição e noites tranquilas"
  },
  {
    image: "https://lh3.googleusercontent.com/d/1MLE6BrVizlKYz7xUiByPMHxtw5ckssYs",
    name: "Fernanda T.",
    role: "Comendo melhor no jantar"
  },
  {
    image: "https://lh3.googleusercontent.com/d/1-QmPgMR4_Tr53p2G9P5shDUDem86Nrib",
    name: "Luciana B.",
    role: "Aprendeu a montar o prato certo"
  },
  {
    image: "https://lh3.googleusercontent.com/d/19aDVoEwWBtS2AyjU5pcHYL4UxCSa7_B",
    name: "Juliana A.",
    role: "Sono mais reparador"
  }
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenImageLightbox,
  onOpenCheckout
}) => {
  const videoTestimonials = TESTIMONIALS.filter(t => t.vimeoId);
  const verticalVideos = videoTestimonials.filter(t => t.aspectRatio !== 'horizontal');
  const horizontalVideos = videoTestimonials.filter(t => t.aspectRatio === 'horizontal');

  return (
    <section id="depoimentos" className="relative w-full overflow-hidden bg-[#F7F4F1] py-16 md:py-20 border-b border-[#E2DFDE]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Content */}
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center">
          <span className="text-[#314B3F] text-xs font-semibold tracking-widest uppercase bg-[#314B3F]/10 px-3.5 py-1.5 rounded-full border border-[#314B3F]/15 mb-3">
            DEPOIMENTOS REAIS
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#314B3F] tracking-tight leading-tight mb-3">
            Veja o que outras mulheres relataram
          </h2>
          <p className="text-base sm:text-lg text-[#1F2922]/85 font-normal leading-relaxed">
            Experiências reais de mulheres que começaram a mudar a relação com a alimentação e com as próprias noites.
          </p>
        </div>

        {/* Priority 1: Video Testimonials */}
        {videoTestimonials.length > 0 && (
          <div className="mb-12 space-y-6">
            {/* Horizontal Videos */}
            {horizontalVideos.length > 0 && (
              <div className="max-w-3xl mx-auto">
                {horizontalVideos.map((testimonial) => (
                  <div key={testimonial.id} className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-black border border-[#E2DFDE] aspect-video w-full">
                    <iframe
                      src={`https://player.vimeo.com/video/${testimonial.vimeoId}?title=0&byline=0&portrait=0&badge=0&dnt=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={`Depoimento em vídeo ${testimonial.name}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Vertical Videos */}
            {verticalVideos.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {verticalVideos.map((testimonial) => (
                  <div key={testimonial.id} className="relative rounded-2xl overflow-hidden shadow-lg bg-black border border-[#E2DFDE] aspect-[9/16] w-full max-w-[340px] mx-auto sm:max-w-none">
                    <iframe
                      src={`https://player.vimeo.com/video/${testimonial.vimeoId}?title=0&byline=0&portrait=0&badge=0&dnt=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={`Depoimento em vídeo ${testimonial.name}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Priority 2: Real Written/Screenshot Testimonials Marquee */}
        <div className="relative w-full space-y-4 mb-10">
          <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-12 sm:w-24 bg-gradient-to-r from-[#F7F4F1] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-12 sm:w-24 bg-gradient-to-l from-[#F7F4F1] to-transparent" />

          <Marquee className="[--gap:1.25rem] [--duration:40s]" pauseOnHover>
            {GALLERY_IMAGES.map((item, index) => (
              <div
                key={`r1-${index}`}
                onClick={() => onOpenImageLightbox(item.image)}
                className="group relative flex w-60 sm:w-68 shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl bg-white border border-[#E2DFDE] shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-100">
                  <img
                    alt={item.name}
                    src={item.image}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://lh3.googleusercontent.com/d/1kB0PlenLmF8X6tyIPWaHXWOjvkdKW1pX";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#314B3F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#314B3F] text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5 text-[#DCB2A6]" /> Ampliar print
                    </span>
                  </div>
                  <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-xs p-3 border-t border-[#E2DFDE]">
                    <h3 className="font-semibold text-sm text-[#314B3F]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#5F816C] font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* CTA */}
        <div className="text-center pt-2 px-2 sm:px-0">
          <a
            href="#precos"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('precos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenCheckout();
            }}
            className="inline-flex items-center justify-center w-full sm:w-auto bg-[#D98F7C] hover:bg-[#C57E6B] text-white text-xs sm:text-base font-bold px-6 sm:px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer uppercase tracking-wider text-center"
          >
            QUERO COMEÇAR O MÉTODO →
          </a>
        </div>

      </div>
    </section>
  );
};
