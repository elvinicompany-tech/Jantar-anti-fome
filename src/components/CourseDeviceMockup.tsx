import React from 'react';
import { Play, MoreHorizontal, Home, LayoutGrid, Users, Box, UtensilsCrossed, Calendar, Info } from 'lucide-react';
import { MacbookPro } from './ui/macbook-pro';

interface CourseDeviceMockupProps {
  className?: string;
}

export const CourseDeviceMockup: React.FC<CourseDeviceMockupProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-5xl mx-auto py-6 px-2 sm:px-4 select-none ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#607F6D]/20 blur-3xl rounded-full pointer-events-none" />

      {/* Main Multi-Device Showcase */}
      <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[480px] md:min-h-[540px]">
        
        {/* 1. CENTER MACBOOK PRO MOCKUP */}
        <div className="relative w-full sm:w-[90%] md:w-[84%] lg:w-[80%] z-10 drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
          {/* Real Macbook SVG Component */}
          <div className="relative w-full">
            <MacbookPro className="w-full h-auto drop-shadow-2xl" />
            
            {/* Screen Content Embedded inside Macbook Screen Area */}
            <div className="absolute top-[5.3%] left-[11.4%] w-[77.2%] h-[81%] overflow-hidden rounded-[3px] bg-[#0d1411] text-white flex border border-white/10 shadow-inner">
              
              {/* Left Vertical App Nav */}
              <div className="hidden sm:flex flex-col items-center justify-between py-3 px-2 bg-[#141e1a] border-r border-white/10 text-white/50 w-9 sm:w-11">
                <div className="space-y-3">
                  <div className="p-1 text-white/80 hover:text-white cursor-pointer"><Home className="w-3.5 h-3.5" /></div>
                  <div className="p-1 text-[#DCB2A6] cursor-pointer bg-[#607F6D]/30 rounded-lg"><LayoutGrid className="w-3.5 h-3.5" /></div>
                  <div className="p-1 text-white/50 hover:text-white cursor-pointer"><Users className="w-3.5 h-3.5" /></div>
                  <div className="p-1 text-white/50 hover:text-white cursor-pointer"><Box className="w-3.5 h-3.5" /></div>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#314B3F] border border-[#DCB2A6]/40 flex items-center justify-center text-[9px] text-[#DCB2A6] font-bold">
                  DB
                </div>
              </div>

              {/* Main Course Player Content */}
              <div className="flex-1 p-2.5 sm:p-4 md:p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#13221b] via-[#0f1a15] to-[#0a110e]">
                {/* Sage/Rose radial spotlight behind doctor photo */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-[#607F6D]/30 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-12 gap-2 h-full relative z-10 items-center">
                  
                  {/* Left Column: Course Title & Call to Action */}
                  <div className="col-span-7 sm:col-span-6 flex flex-col justify-center space-y-1.5 sm:space-y-2 pr-1 text-left">
                    <div className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-semibold text-[#DCB2A6] uppercase tracking-wider bg-[#314B3F]/80 border border-[#607F6D]/40 px-2 py-0.5 rounded-full w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DCB2A6] animate-pulse" />
                      Método Jantar Anti-Fome ®
                    </div>

                    <h3 className="text-xs sm:text-base md:text-lg font-bold font-serif leading-tight text-white tracking-tight">
                      Método Jantar <br />
                      <span className="text-[#DCB2A6] font-sans font-normal text-[10px] sm:text-xs md:text-sm block mt-0.5">
                        Anti-Fome da Dra. Betisa
                      </span>
                    </h3>

                    <div className="text-[9px] sm:text-[11px] text-white/80">
                      <p className="font-semibold text-white/90">Dra. Betisa Vitisin</p>
                      <p className="text-[#DCB2A6]/80 text-[8px] sm:text-[9.5px]">Nutricionista & Química</p>
                    </div>

                    {/* Play Button & Progress */}
                    <div className="pt-0.5 flex items-center gap-1.5">
                      <button className="bg-[#607F6D] hover:bg-[#314B3F] text-white text-[8px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded flex items-center gap-1 shadow transition-all border border-[#DCB2A6]/30">
                        <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current" />
                        Assistir Aula
                      </button>
                      <button className="p-1 rounded bg-white/10 text-white/80">
                        <MoreHorizontal className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="pt-0.5 max-w-[140px] sm:max-w-xs">
                      <div className="flex justify-between text-[7px] sm:text-[9px] text-white/60 mb-0.5">
                        <span>Progresso do módulo</span>
                        <span className="text-[#DCB2A6] font-semibold">100% Liberado</span>
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#607F6D] to-[#DCB2A6] h-full w-[100%]" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Course Lessons List Sidebar */}
                  <div className="col-span-5 sm:col-span-6 flex flex-col justify-center space-y-1 sm:space-y-1.5 pl-2 border-l border-white/10 text-left">
                    <p className="text-[9px] md:text-[11px] font-bold text-white/90 mb-0.5">Conteúdo do Curso</p>
                    
                    {/* Lesson 01 */}
                    <div className="p-1 rounded bg-white/5 border border-white/10 flex items-center gap-1.5 hover:bg-white/10 transition-colors">
                      <div className="w-4 h-4 rounded bg-[#314B3F] text-[#DCB2A6] text-[8px] font-bold flex items-center justify-center flex-shrink-0">
                        01
                      </div>
                      <p className="text-[8px] leading-tight text-white/80 line-clamp-1">
                        Ativação da Saciedade Noturna
                      </p>
                    </div>

                    {/* Lesson 02 */}
                    <div className="p-1 rounded bg-white/5 border border-white/10 flex items-center gap-1.5 hover:bg-white/10 transition-colors">
                      <div className="w-4 h-4 rounded bg-[#314B3F] text-[#DCB2A6] text-[8px] font-bold flex items-center justify-center flex-shrink-0">
                        02
                      </div>
                      <p className="text-[8px] leading-tight text-white/80 line-clamp-1">
                        Combinação Bioquímica no Jantar
                      </p>
                    </div>

                    {/* Lesson 03 */}
                    <div className="p-1 rounded bg-white/5 border border-white/10 flex items-center gap-1.5 hover:bg-white/10 transition-colors">
                      <div className="w-4 h-4 rounded bg-[#314B3F] text-[#DCB2A6] text-[8px] font-bold flex items-center justify-center flex-shrink-0">
                        03
                      </div>
                      <p className="text-[8px] leading-tight text-white/80 line-clamp-1">
                        Acorde sem Inchaço nem Fome
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 2. FLOATING TABLET (PORTRAIT) OVERLAY LEFT */}
        <div className="absolute left-0 bottom-2 sm:bottom-4 w-[32%] sm:w-[26%] md:w-[24%] z-20 -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="bg-[#121815] p-2 sm:p-2.5 rounded-[18px] sm:rounded-[24px] border border-white/20">
            <div className="bg-white text-[#1F2922] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 aspect-[3/4] flex flex-col justify-between shadow-inner relative overflow-hidden">
              {/* Header */}
              <div className="text-right">
                <p className="text-[8px] sm:text-[9px] font-bold text-[#314B3F]">Dra. Betisa</p>
                <p className="text-[7px] sm:text-[8px] text-[#607F6D]">@drabetisa</p>
              </div>

              {/* Main Content Card */}
              <div className="my-auto space-y-1 text-left">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#607F6D]/15 text-[#314B3F] flex items-center justify-center mb-0.5">
                  <UtensilsCrossed className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <h4 className="text-[9px] sm:text-xs font-serif font-bold text-[#314B3F] leading-tight">
                  Guia Nutricional <span className="text-[#607F6D]">Jantar Anti-Fome</span>
                </h4>
                <p className="text-[7px] sm:text-[8.5px] text-[#1F2922]/70 leading-tight">
                  Cardápios Práticos Noturnos
                </p>

                <div className="mt-1.5 p-1 rounded bg-[#F5F3F6] border border-[#607F6D]/20 flex items-start gap-1">
                  <Info className="w-2.5 h-2.5 text-[#607F6D] flex-shrink-0 mt-0.5" />
                  <p className="text-[6px] sm:text-[7.5px] text-[#314B3F] leading-tight">
                    Tabela de combinações hormonais.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-1 border-t border-gray-100 flex items-center justify-between text-[6px] sm:text-[8px] font-bold text-[#314B3F]">
                <span>MÉTODO ANTI-FOME ®</span>
                <span className="text-[5px] sm:text-[6.5px] text-gray-400 font-normal">DRA. BETISA</span>
              </div>
            </div>
          </div>
        </div>


        {/* 3. FLOATING PHONE (FRONT LEFT) OVERLAY */}
        <div className="absolute left-[18%] sm:left-[16%] -bottom-2 w-[16%] sm:w-[13%] md:w-[12%] z-30 rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-110 shadow-[0_22px_45px_rgba(0,0,0,0.45)]">
          <div className="bg-[#121815] p-1.5 sm:p-2 rounded-[16px] sm:rounded-[20px] border border-white/30">
            {/* Phone Notch */}
            <div className="w-6 h-1 bg-black rounded-full mx-auto mb-0.5" />
            <div className="bg-white text-[#1F2922] rounded-lg sm:rounded-xl p-1.5 sm:p-2 aspect-[9/18] flex flex-col justify-between text-left overflow-hidden">
              <div>
                <p className="text-[5px] sm:text-[6px] font-bold text-[#314B3F]">Dra. Betisa</p>
                <p className="text-[4px] sm:text-[5px] text-[#607F6D]">@drabetisa</p>
              </div>

              <div className="my-1 space-y-0.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#607F6D]/15 text-[#314B3F] flex items-center justify-center">
                  <UtensilsCrossed className="w-1.5 h-1.5" />
                </div>
                <p className="text-[6px] sm:text-[7px] font-serif font-bold text-[#314B3F] leading-tight">
                  App <span className="text-[#607F6D]">Anti-Fome</span>
                </p>
                <p className="text-[4px] sm:text-[5.5px] text-gray-500 leading-none">
                  Checklist Diário
                </p>
              </div>

              <div className="text-[4px] sm:text-[5px] text-[#607F6D] font-bold border-t border-gray-100 pt-0.5">
                MÉTODO ANTI-FOME
              </div>
            </div>
          </div>
        </div>


        {/* 4. FLOATING TABLET (LANDSCAPE) OVERLAY RIGHT */}
        <div className="absolute right-0 -bottom-1 sm:bottom-2 w-[38%] sm:w-[32%] md:w-[30%] z-20 rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="bg-[#121815] p-2 sm:p-2.5 rounded-[18px] sm:rounded-[24px] border border-white/20">
            <div className="bg-white text-[#1F2922] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 aspect-[16/10] flex flex-col justify-between shadow-inner text-left relative overflow-hidden">
              {/* Header */}
              <div className="text-right">
                <p className="text-[8px] sm:text-[9px] font-bold text-[#314B3F]">Dra. Betisa</p>
                <p className="text-[7px] sm:text-[8px] text-[#607F6D]">@drabetisa</p>
              </div>

              {/* Body */}
              <div className="my-auto space-y-0.5">
                <div className="w-5 h-5 rounded-full bg-[#607F6D]/15 text-[#314B3F] flex items-center justify-center mb-0.5">
                  <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
                <p className="text-[9px] sm:text-[11px] font-serif font-bold text-[#314B3F]">
                  Planner 30 Dias
                </p>
                <h4 className="text-[9px] sm:text-[11px] font-serif font-bold text-[#314B3F] leading-tight">
                  Controle da Fome Noturna
                </h4>
                <p className="text-[6.5px] sm:text-[8px] text-[#1F2922]/70">
                  Método Jantar Anti-Fome
                </p>
              </div>

              {/* Footer */}
              <div className="space-y-0.5 border-t border-gray-100 pt-0.5">
                <div className="flex items-center justify-between text-[6px] sm:text-[7.5px] font-bold text-[#314B3F]">
                  <span>JANTAR ANTI-FOME ®</span>
                  <span className="text-[5px] sm:text-[6.5px] text-gray-400 font-normal">DRA. BETISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


