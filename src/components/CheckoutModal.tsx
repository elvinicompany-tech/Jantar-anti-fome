import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { CHECKOUT_URL } from '../data';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [installments, setInstallments] = useState(12);

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'BETISA10' || coupon.trim().toUpperCase() === 'ANTIFOME') {
      setCouponApplied(true);
    } else {
      alert('Cupom inválido. Use "BETISA10" para testar o cupom de 10% de desconto!');
    }
  };

  const originalPrice = 97;
  const finalPrice = couponApplied ? originalPrice * 0.9 : originalPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#BDB8B8]/50 flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="p-6 bg-[#314B3F] text-[#F5F3F6] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="inline-block bg-[#DCB2A6]/20 text-[#DCB2A6] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 border border-[#DCB2A6]/30">
            INSCRIÇÃO SEGURA
          </span>
          <h3 className="text-2xl font-serif font-bold">Jantar Anti-Fome</h3>
          <p className="text-xs text-[#F5F3F6]/80">Método de Controle de Fome Noturna — Dra. Betisa</p>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {/* Summary */}
          <div className="bg-[#F5F3F6] p-4 rounded-2xl border border-[#BDB8B8]/40 text-sm space-y-2">
            <div className="flex justify-between text-[#1F2922]">
              <span>Método Jantar Anti-Fome (3 Ajustes)</span>
              <span className="font-semibold">R$ 97,00</span>
            </div>
            <div className="flex justify-between text-[#1F2922]">
              <span>Cardápio 7 Dias + 21 Receitas Anti-Fome</span>
              <span className="text-[#607F6D] font-semibold">Incluso</span>
            </div>
            <div className="flex justify-between text-[#1F2922]">
              <span>6 Bônus Exclusivos (Sobremesas, Jejum, etc.)</span>
              <span className="text-[#607F6D] font-semibold">Grátis (R$ 262)</span>
            </div>

            {couponApplied && (
              <div className="flex justify-between text-[#607F6D] font-bold border-t border-[#BDB8B8]/30 pt-2">
                <span>Desconto especial (10%)</span>
                <span>- R$ 9,70</span>
              </div>
            )}

            <div className="flex justify-between text-base font-bold text-[#314B3F] border-t border-[#BDB8B8]/40 pt-2">
              <span>Total À Vista</span>
              <span className="text-[#607F6D]">R$ {finalPrice.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>

          {/* Coupon test */}
          <form onSubmit={handleApplyCoupon} className="flex gap-2">
            <input
              type="text"
              placeholder="Tem cupom? Ex: BETISA10"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 px-4 py-2 text-sm border border-[#BDB8B8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#607F6D]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#607F6D]/15 text-[#314B3F] font-semibold text-xs rounded-xl hover:bg-[#607F6D]/25 transition-colors cursor-pointer"
            >
              Aplicar
            </button>
          </form>

          {/* Installments Option */}
          <div>
            <label className="block text-xs font-bold text-[#314B3F] uppercase mb-2">
              Opções de Parcelamento
            </label>
            <select
              value={installments}
              onChange={(e) => setInstallments(Number(e.target.value))}
              className="w-full p-3 border border-[#BDB8B8] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#607F6D]"
            >
              <option value={1}>1x de R$ {finalPrice.toFixed(2)} à vista</option>
              <option value={2}>2x de R$ {(finalPrice / 2).toFixed(2)} sem juros</option>
              <option value={3}>3x de R$ {(finalPrice / 3).toFixed(2)} sem juros</option>
              <option value={12}>12x de R$ 9,70 no cartão</option>
            </select>
          </div>

          {/* Guarantee Pill */}
          <div className="flex items-center gap-3 bg-[#607F6D]/10 border border-[#607F6D]/30 p-3 rounded-xl text-[#314B3F] text-xs font-medium">
            <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#607F6D]" />
            <span>Garantia incondicional de 7 dias com reembolso facilitado em 1 clique.</span>
          </div>

          {/* Checkout CTA */}
          <div className="space-y-3">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#607F6D] hover:bg-[#314B3F] text-white font-bold text-center py-4 rounded-2xl shadow-lg transition-all text-base cursor-pointer uppercase tracking-wider"
            >
              IR PARA CHECKOUT OFICIAL HOTMART
            </a>

            <div className="flex justify-center items-center gap-4 text-xs text-[#1F2922]/70 pt-1">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#607F6D]" /> Checkout Hotmart
              </span>
              <span className="flex items-center gap-1">
                <CreditCard className="w-3.5 h-3.5 text-[#607F6D]" /> Cartão / PIX / Boleto
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
