
import React from 'react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  onUpgradeClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onUpgradeClick }) => {
  const isClassic = plan.variant === 'classic';

  return (
    <div className={`bg-white text-[#1a1a1a] rounded-2xl p-8 mb-6 border-2 transition-all shadow-md ${isClassic ? 'border-[#22c55e] animate-[pulse_2s_infinite]' : 'border-gray-200'}`}>
      {plan.image && (
        <div className="mb-5 flex justify-center">
          <img src={plan.image} alt={plan.title} className="w-full max-w-[250px] h-auto rounded-xl" />
        </div>
      )}
      
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 text-white`} style={{ backgroundColor: plan.accentColor }}>
          {plan.badge}
        </span>
        <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
      </div>

      <div className="mb-5 space-y-3">
        {plan.benefits.map((benefit, i) => (
          <div key={i} className={`flex items-start gap-3 ${i < plan.benefits.length - 1 ? 'pb-2 border-b border-gray-100' : ''}`}>
            <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0`} style={{ backgroundColor: plan.accentColor }}></div>
            <span className="text-sm">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="text-center mb-4">
        <p className="text-[12px] opacity-60 mb-1 uppercase">De {plan.originalPrice} Por Apenas:</p>
        <div className="flex items-center justify-center gap-2">
           <span className="text-lg line-through opacity-40">{plan.originalPrice}</span>
           <span className="text-4xl font-extrabold" style={{ color: plan.accentColor }}>{plan.price}</span>
        </div>
      </div>

      <button 
        onClick={() => plan.buttonUrl === '#' ? onUpgradeClick?.() : window.open(plan.buttonUrl, '_blank')}
        className={`w-full py-4 px-6 rounded-xl font-bold text-center text-white transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] ${isClassic ? 'bg-[#22c55e] shadow-[#22c55e]/30' : 'bg-gray-500 shadow-gray-400/20'}`}
        style={!isClassic ? { backgroundColor: plan.accentColor } : {}}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
