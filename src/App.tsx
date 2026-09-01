import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RepositionSection } from './components/RepositionSection';
import { WhyImportantSection } from './components/WhyImportantSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MethodIntroSection } from './components/MethodIntroSection';
import { CourseModules } from './components/CourseModules';
import { PlatformDeliverablesSection } from './components/PlatformDeliverablesSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { ForWhomSection } from './components/ForWhomSection';
import { AuthoritySection } from './components/AuthoritySection';
import { FAQSection } from './components/FAQSection';
import { ClosingDecisionSection } from './components/ClosingDecisionSection';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

// Modals
import { VideoModal } from './components/VideoModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { CheckoutModal } from './components/CheckoutModal';
import { MetabolicQuizModal } from './components/MetabolicQuizModal';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState<string | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F4F1] font-sans text-[#1F2922] antialiased selection:bg-[#5F816C]/20 selection:text-[#314B3F]">
      {/* Header */}
      <Header
        onOpenCheckout={() => setIsCheckoutModalOpen(true)}
        onOpenQuiz={() => setIsQuizModalOpen(true)}
      />

      {/* Main Page Flow - Sections 01 to 16 */}
      <main>
        {/* 01 — HEADLINE + SUB + VSL + CTA */}
        <HeroSection
          onPlayVideo={() => setIsVideoModalOpen(true)}
          onOpenCheckout={() => setIsCheckoutModalOpen(true)}
        />

        {/* 02 — REPOSICIONAMENTO */}
        <RepositionSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 03 — MECANISMO: POR QUE O JANTAR É A REFEIÇÃO MAIS IMPORTANTE */}
        <WhyImportantSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 04 — BENEFÍCIOS DO MÉTODO JANTAR ANTI-FOME */}
        <BenefitsGrid onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 05 — PROVA SOCIAL / DEPOIMENTOS */}
        <TestimonialsSection
          onOpenImageLightbox={(url) => setLightboxImageUrl(url)}
          onOpenCheckout={() => setIsCheckoutModalOpen(true)}
        />

        {/* 06 — APRESENTAÇÃO DO MÉTODO */}
        <MethodIntroSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 07 — AS 5 FASES DO MÉTODO JANTAR ANTI-FOME */}
        <CourseModules onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 08 — PLATAFORMA / O QUE VOCÊ RECEBE */}
        <PlatformDeliverablesSection />

        {/* 09 — BÔNUS */}
        <BonusSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 10 — OFERTA + PREÇO */}
        <PricingSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 11 — GARANTIA */}
        <GuaranteeSection />

        {/* 12 — PARA QUEM É / NÃO É */}
        <ForWhomSection />

        {/* 13 — SOBRE A DRA. BETISA VITISIN */}
        <AuthoritySection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 14 — PERGUNTAS FREQUENTES (FAQ) */}
        <FAQSection />

        {/* 15 — FECHAMENTO / DOIS CAMINHOS */}
        <ClosingDecisionSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 16 — RODAPÉ / FOOTER CTA & FOOTER */}
        <FooterCTA onOpenCheckout={() => setIsCheckoutModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenCheckout={() => setIsCheckoutModalOpen(true)}
      />

      <ImageLightboxModal
        imageUrl={lightboxImageUrl}
        onClose={() => setLightboxImageUrl(null)}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
      />

      <MetabolicQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onOpenCheckout={() => setIsCheckoutModalOpen(true)}
      />

      {/* Floating WhatsApp Support */}
      <WhatsAppFloatingButton />
    </div>
  );
}

