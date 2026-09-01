import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ImageLightboxModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[90vh] bg-transparent rounded-2xl overflow-hidden flex flex-col items-center justify-center cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <img
          src={imageUrl}
          alt="Visualização ampliada"
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-white/20"
        />

        <div className="mt-4 flex items-center gap-3">
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Abrir imagem original
          </a>
        </div>
      </div>
    </div>
  );
};
