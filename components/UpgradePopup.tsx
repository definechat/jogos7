
import React, { useState, useEffect } from 'react';

interface UpgradePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge: string;
  price: string;
  benefits: string[];
  image?: string;
  primaryUrl: string;
  secondaryUrl: string;
  primaryText: string;
  secondaryText: string;
  // Tracking Props
  upsellTrackingId: string;
  upsellButtonId: string;
  confirmTrackingId: string;
  confirmPriceValue: number;
}

const UpgradePopup: React.FC<UpgradePopupProps> = ({
  isOpen, onClose, title, badge, price, benefits, image, primaryUrl, secondaryUrl, primaryText, secondaryText,
  upsellTrackingId, upsellButtonId, confirmTrackingId, confirmPriceValue
}) => {
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(180);
      return;
    }

    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'ViewContent', {
        content_name: title,
        content_category: 'Upgrade Popup'
      });
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, title]);

  const handleUpsellClick = () => {
    if (typeof (window as any).fbq === 'function') {
      const priceValue = parseFloat(price.replace('R$ ', '').replace(',', '.'));
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: upsellTrackingId,
        value: priceValue,
        currency: 'BRL',
        content_type: 'product'
      });
    }
  };

  const handleConfirmOriginalClick = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: confirmTrackingId,
        value: confirmPriceValue,
        currency: 'BRL',
        content_type: 'product'
      });
    }
  };

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center p-4 overflow-y-auto overscroll-contain"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#0f0f1b] border-2 border-[#d4a853] rounded-3xl p-6 max-w-[400px] w-full relative shadow-[0_0_50px_rgba(212,168,83,0.3)] animate-[zoomIn_0.3s_ease-out]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl leading-none z-20">&times;</button>
        
        <div className="text-center relative z-10">
          <div className="bg-red-600 text-white py-1 px-4 rounded-full inline-block text-[10px] font-black uppercase tracking-[0.2em] mb-4 animate-pulse">
            🔥 {badge}
          </div>
          
          <h3 className="text-2xl font-black text-white mb-2 leading-tight uppercase tracking-tight">
            {title}
          </h3>

          <div className="bg-white/10 rounded-2xl p-3 mb-4 inline-flex items-center gap-3 border border-white/5">
            <span className="text-white/60 text-[11px] font-bold uppercase">Expira em:</span>
            <span className="text-red-500 font-mono text-xl font-black">{formatTime(timeLeft)}</span>
          </div>

          {image && (
            <div className="mb-5">
              <img src={image} alt="Destaque" className="w-full h-auto rounded-2xl shadow-2xl border border-white/10" />
            </div>
          )}
          
          <div className="mb-6">
            <p className="text-white/50 text-xs uppercase font-bold tracking-widest mb-1">Oferta Exclusiva Agora Por:</p>
            <span className="text-5xl font-black text-[#d4a853] drop-shadow-[0_2px_10px_rgba(212,168,83,0.4)]">{price}</span>
          </div>
          
          <div className="bg-gradient-to-b from-white/10 to-transparent rounded-2xl p-5 mb-6 text-left border border-white/5">
            <p className="text-[10px] font-black uppercase text-[#d4a853] mb-4 tracking-[0.3em]">O QUE VOCÊ VAI RECEBER:</p>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d4a853] flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-[#d4a853]/20">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f0f1b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm text-white font-bold leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <a 
            href={primaryUrl} 
            target="_blank" 
            onClick={handleUpsellClick}
            id={upsellButtonId} // ID solicitado (btn_19, btn_37)
            className="block w-full py-5 bg-[#d4a853] text-[#0f0f1b] font-black rounded-2xl uppercase mb-4 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-[0_10px_25px_rgba(212,168,83,0.3)] text-base text-center"
          >
            {primaryText}
          </a>
          
          <a 
            href={secondaryUrl} 
            target="_blank" 
            onClick={handleConfirmOriginalClick}
            className="block w-full py-2 text-white/30 font-bold uppercase text-[10px] tracking-widest hover:text-white/60 transition-colors text-center"
          >
            {secondaryText}
          </a>
        </div>
      </div>
      <style>{`
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default UpgradePopup;
