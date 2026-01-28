
import React from 'react';

interface UpgradePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge: string;
  price: string;
  benefits: string[];
  primaryUrl: string;
  secondaryUrl: string;
  primaryText: string;
  secondaryText: string;
}

const UpgradePopup: React.FC<UpgradePopupProps> = ({
  isOpen, onClose, title, badge, price, benefits, primaryUrl, secondaryUrl, primaryText, secondaryText
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/85 z-[10000] flex items-center justify-center p-4 overflow-y-auto overscroll-contain"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#1a1a2e] border-2 border-[#d4a853] rounded-2xl p-6 max-w-[360px] w-full relative shadow-[0_0_40px_rgba(212,168,83,0.25)]">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
        
        <div className="text-center">
          <span className="inline-block bg-[#d4a853] text-[#1a1a2e] px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase mb-3">
            {badge}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="mb-1">
            <span className="text-4xl font-extrabold text-[#d4a853]">{price}</span>
          </div>
          <p className="text-[13px] text-white/70 mb-4 font-medium uppercase tracking-wide">Acesso VITALÍCIO</p>
          
          <div className="bg-white/5 rounded-xl p-4 mb-5 text-left space-y-2">
            <p className="text-[10px] font-bold uppercase text-[#d4a853] mb-2 tracking-widest">INCLUI:</p>
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#d4a853] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-[13px] text-white/90 leading-tight">{benefit}</span>
              </div>
            ))}
          </div>

          <a 
            href={primaryUrl} 
            target="_blank" 
            className="block w-full py-3.5 bg-[#d4a853] text-[#1a1a2e] font-extrabold rounded-xl uppercase mb-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            {primaryText}
          </a>
          <a 
            href={secondaryUrl} 
            target="_blank" 
            className="block w-full py-2.5 bg-transparent border border-gray-600 text-gray-400 font-medium rounded-xl text-xs hover:bg-white/5"
          >
            {secondaryText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpgradePopup;
