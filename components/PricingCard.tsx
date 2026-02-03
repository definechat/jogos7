
import React from 'react';
import { PricingPlan } from '../types.ts';

interface PricingCardProps {
  plan: PricingPlan;
  onUpgradeClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onUpgradeClick }) => {
  const isClassic = plan.variant === 'classic';

  const handleAction = () => {
    // Rastreamento do Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: plan.title,
        value: parseFloat(plan.price.replace('R$ ', '').replace(',', '.')),
        currency: 'BRL'
      });
    }

    if (plan.buttonUrl === '#') {
      onUpgradeClick?.();
    } else {
      window.open(plan.buttonUrl, '_blank');
    }
  };

  return (
    <div 
      className={`bg-white rounded-2xl p-8 mb-6 border-4 transition-all ${
        isClassic 
          ? 'animate-neon-blue z-10 relative' 
          : 'border-gray-200'
      }`}
    >
      {plan.image && (
        <div className="mb-5 flex justify-center">
          <img src={plan.image} alt={plan.title} className="w-full max-w-[250px] h-auto rounded-xl shadow-lg" />
        </div>
      )}
      
      <div className="mb-4">
        <span 
          className={`inline-block px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider mb-4 ${
            isClassic ? 'bg-[#facc15] text-[#1e40af]' : 'text-white'
          }`} 
          style={!isClassic ? { backgroundColor: plan.accentColor } : {}}
        >
          {plan.badge}
        </span>
        <h3 className={`text-xl font-black mb-4 ${isClassic ? 'text-[#1e40af]' : 'text-[#1a1a1a]'}`}>
          {plan.title}
        </h3>
      </div>

      <div className="mb-5 space-y-3">
        {plan.benefits.map((benefit, i) => (
          <div key={i} className={`flex items-start gap-3 ${i < plan.benefits.length - 1 ? 'pb-2 border-b border-gray-100' : ''}`}>
            <div 
              className={`w-2 h-2 rounded-full mt-1.5 shrink-0`} 
              style={{ backgroundColor: isClassic ? '#1e40af' : plan.accentColor }}
            ></div>
            <span className={`text-sm font-medium ${isClassic ? 'text-gray-800' : 'text-gray-600'}`}>
              {benefit}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <p className="text-[12px] opacity-60 mb-1 uppercase font-bold">De {plan.originalPrice} Por Apenas:</p>
        <div className="flex items-center justify-center gap-2">
           <span className="text-lg line-through opacity-40">{plan.originalPrice}</span>
           <span 
             className="text-4xl font-extrabold" 
             style={{ color: isClassic ? '#1e40af' : plan.accentColor }}
           >
             {plan.price}
           </span>
        </div>
      </div>

      <button 
        onClick={handleAction}
        className={`w-full py-5 px-6 rounded-xl font-black text-center transition-all shadow-lg hover:brightness-110 active:scale-[0.98] uppercase tracking-tight text-lg ${
          isClassic 
            ? 'bg-[#1e40af] text-[#facc15] border-b-4 border-blue-900' 
            : 'text-white shadow-gray-400/20'
        }`}
        style={!isClassic ? { backgroundColor: plan.accentColor } : {}}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
