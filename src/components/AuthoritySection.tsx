import React from 'react';
import { Award, Users, Heart, ArrowRight } from 'lucide-react';
import { HeroSection } from './ui/hero-section-2';

interface AuthoritySectionProps {
  onOpenCheckout?: () => void;
}

export const AuthoritySection: React.FC<AuthoritySectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E2DFDE]" id="sobre-betisa">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <HeroSection
          slogan="SUA MENTORA NESSA JORNADA"
          title="Dra. Betisa Vitisin"
          subtitle="Especialista em Emagrecimento Feminino e Saúde da Mulher"
          description={
            <>
              <p>
                Como nutricionista e pesquisadora dedicada à saúde feminina, desenvolvi o Método Jantar Anti-Fome após observar que o maior obstáculo de minhas pacientes não era a falta de força de vontade, mas a ansiedade e a fome acumulada ao final do dia.
              </p>
              <p>
                Meu compromisso é ensinar você a nutrir seu corpo de forma inteligente à noite, respeitando sua rotina, reduzindo a ansiedade noturna e permitindo que você recupere sua saciedade de maneira leve, segura e duradoura.
              </p>
            </>
          }
          callToAction={
            onOpenCheckout
              ? {
                  text: "Quero aprender com a Dra. Betisa",
                  onClick: onOpenCheckout,
                }
              : undefined
          }
          backgroundImage="https://lh3.googleusercontent.com/d/19lTZoE9PpxImcIJ64mT4ivmyOaSgTkpP"
          statsInfo={[
            {
              icon: <Award className="w-5 h-5" />,
              title: "8 Anos",
              label: "EXPERIÊNCIA",
            },
            {
              icon: <Users className="w-5 h-5" />,
              title: "+10 Mil",
              label: "ALUNAS",
            },
            {
              icon: <Heart className="w-5 h-5" />,
              title: "Nutri & Química",
              label: "FORMAÇÃO",
            },
          ]}
        />
      </div>
    </section>
  );
};


