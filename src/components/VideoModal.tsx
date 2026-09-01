import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#314B3F] rounded-3xl overflow-hidden shadow-2xl border border-[#607F6D]/40 flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 bg-black/40 border-b border-[#607F6D]/30 text-white">
          <div className="flex items-center gap-2">
            <span className="bg-[#DCB2A6] text-[#314B3F] px-2.5 py-0.5 rounded text-xs font-bold uppercase">VSL REVEAL</span>
            <span className="text-sm font-medium text-[#F5F3F6] truncate">Jantar Anti-Fome — Dra. Betisa</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-[#F5F3F6] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Screen Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={IMAGES.heroVideo}
            alt="Video Aula Jantar Anti-Fome"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />

          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 bg-[#607F6D] hover:bg-[#DCB2A6] hover:text-[#314B3F] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform cursor-pointer"
              >
                <Play className="w-10 h-10 ml-1 fill-current" />
              </button>
            </div>
          )}

          {/* Subtitles Overlay */}
          <div className="absolute bottom-16 left-6 right-6 text-center">
            <p className="bg-black/75 text-[#F5F3F6] text-sm sm:text-base px-4 py-2 rounded-lg inline-block backdrop-blur-sm border border-white/10 font-medium">
              "O seu jantar de hoje decide como estará a sua fome e glicemia ao longo de todo o dia seguinte."
            </p>
          </div>

          {/* Video Control Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col gap-2">
            {/* Progress line */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setProgress((clickX / rect.width) * 100);
              }}
              className="w-full h-1.5 bg-gray-700 rounded-full cursor-pointer relative overflow-hidden"
            >
              <div className="h-full bg-[#607F6D] rounded-full" style={{ width: `${progress}%` }} />
            </div>

            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 hover:text-[#DCB2A6] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 hover:text-[#DCB2A6] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <span className="text-xs text-[#BDB8B8]">08:42 / 18:30</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs bg-[#607F6D] px-2 py-0.5 rounded font-bold uppercase tracking-wider text-white">AULA PRÁTICA</span>
                <button className="p-1 hover:text-[#DCB2A6] transition-colors cursor-pointer">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-6 bg-[#314B3F] border-t border-[#607F6D]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-[#F5F3F6]">Jantar Anti-Fome + Todos os Bônus</h4>
            <p className="text-xs text-[#BDB8B8]">Condição especial de R$ 97 à vista ou 12x de R$ 9,70</p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto bg-[#607F6D] hover:bg-[#DCB2A6] hover:text-[#314B3F] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider border border-[#BDB8B8]/30"
          >
            QUERO CONTROLAR MINHA FOME AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
