import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(message || 'Olá, gostaria de tirar dúvidas sobre o Método Jantar Anti-Fome da Dra. Betisa.');
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover chat */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#BDB8B8]/50 overflow-hidden animate-fadeIn">
          <div className="bg-[#314B3F] text-[#F5F3F6] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#607F6D] flex items-center justify-center font-bold text-xs text-white">
                DB
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Suporte Jantar Anti-Fome</h4>
                <p className="text-[10px] text-[#DCB2A6]">Atendimento Dra. Betisa</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-[#F5F3F6] text-xs text-[#1F2922] space-y-3">
            <div className="bg-white p-3 rounded-xl border border-[#BDB8B8]/40 shadow-2xs">
              Olá! Tem alguma dúvida sobre o método, os 3 ajustes no jantar, o cardápio ou a garantia? Fale direto conosco!
            </div>
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#BDB8B8]/30 flex gap-2">
            <input
              type="text"
              placeholder="Digite sua dúvida..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 text-xs border border-[#BDB8B8] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#607F6D]"
            />
            <button
              type="submit"
              className="bg-[#607F6D] hover:bg-[#314B3F] text-white p-2 rounded-lg transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#607F6D] hover:bg-[#314B3F] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer ring-4 ring-[#607F6D]/20 border border-white/20"
        title="Dúvidas no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current text-[#DCB2A6]" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider pr-1">
          Dúvidas? Fale conosco
        </span>
      </button>
    </div>
  );
};
