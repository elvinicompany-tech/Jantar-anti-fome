import React from 'react';
import { cn } from "../../lib/utils";
import { motion } from 'framer-motion';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  description?: React.ReactNode;
  callToAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage: string;
  contactInfo?: {
    website: string;
    phone: string;
    address: string;
  };
  statsInfo?: Array<{
    icon: React.ReactNode;
    title: string;
    label: string;
  }>;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, description, callToAction, backgroundImage, contactInfo, statsInfo, ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-[#F7F4F1] border border-[#E2DFDE] rounded-3xl text-foreground md:flex-row shadow-sm",
          className
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-5 sm:p-8 md:w-1/2 md:p-10 lg:w-3/5 lg:p-12">
            {/* Top Section: Logo & Main Content */}
            <div>
                <motion.header className="mb-4 sm:mb-6 flex items-center gap-3" variants={itemVariants}>
                    {logo ? (
                        <div className="flex items-center">
                            <img src={logo.url} alt={logo.alt} className="mr-3 h-10 w-10 rounded-full object-cover border border-[#E2DFDE]" referrerPolicy="no-referrer" />
                            <div>
                                {logo.text && <p className="text-sm font-bold text-[#314B3F]">{logo.text}</p>}
                                {slogan && <p className="text-xs tracking-wider uppercase font-semibold text-[#5F816C]">{slogan}</p>}
                            </div>
                        </div>
                    ) : slogan ? (
                        <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase bg-white text-[#314B3F] px-3.5 py-1.5 rounded-full border border-[#E2DFDE]">
                          {slogan}
                        </span>
                    ) : null}
                </motion.header>

                <motion.main variants={containerVariants}>
                    <motion.h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight font-serif text-[#314B3F]" variants={itemVariants}>
                        {title}
                    </motion.h2>
                    <motion.div className="my-3 sm:my-4 h-1 w-16 sm:w-20 bg-[#D98F7C] rounded-full" variants={itemVariants}></motion.div>
                    <motion.p className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5F816C]" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    {description && (
                      <motion.div className="mb-5 sm:mb-6 max-w-xl text-xs sm:text-base leading-relaxed text-[#1F2922]/85 font-normal space-y-2.5 sm:space-y-3" variants={itemVariants}>
                          {description}
                      </motion.div>
                    )}
                    {callToAction && (
                      <motion.div variants={itemVariants}>
                        {callToAction.onClick ? (
                          <button
                            onClick={callToAction.onClick}
                            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3.5 rounded-full bg-[#314B3F] hover:bg-[#253a30] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md transition-all duration-300 hover:scale-102 cursor-pointer text-center"
                          >
                            {callToAction.text}
                          </button>
                        ) : (
                          <a
                            href={callToAction.href}
                            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#314B3F] hover:text-[#5F816C] transition-colors"
                          >
                            {callToAction.text}
                          </a>
                        )}
                      </motion.div>
                    )}
                </motion.main>
            </div>

            {/* Bottom Section: Stats / Footer Info */}
            {(statsInfo || contactInfo) && (
              <motion.footer className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E2DFDE] w-full" variants={itemVariants}>
                {statsInfo && statsInfo.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2.5 sm:gap-3 sm:grid-cols-3">
                    {statsInfo.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/80 p-2.5 sm:p-3 rounded-2xl border border-[#E2DFDE] shadow-xs">
                        <div className="text-[#5F816C] p-2 bg-[#F7F4F1] rounded-xl border border-[#E2DFDE] flex-shrink-0">
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-serif font-bold text-[#314B3F]">{stat.title}</div>
                          <div className="text-[10px] font-bold tracking-wider uppercase text-[#1F2922]/60">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : contactInfo ? (
                  <div className="grid grid-cols-1 gap-4 text-xs text-muted-foreground sm:grid-cols-3">
                      <div className="flex items-center">
                          <InfoIcon type="website" />
                          <span>{contactInfo.website}</span>
                      </div>
                      <div className="flex items-center">
                          <InfoIcon type="phone" />
                          <span>{contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center">
                          <InfoIcon type="address" />
                          <span>{contactInfo.address}</span>
                      </div>
                  </div>
                ) : null}
              </motion.footer>
            )}
        </div>

        {/* Right Side: Image with Responsive Height */}
        <motion.div 
          className="w-full min-h-[280px] sm:min-h-[350px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5 relative"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center 20%'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
