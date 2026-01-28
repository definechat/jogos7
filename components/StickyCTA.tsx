
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-[9000] animate-[slideUp_0.3s_ease-out] flex justify-center pointer-events-none">
      <a 
        href="#ofertas" 
        className="w-full max-w-[400px] bg-[#22c55e] text-white py-4 px-6 rounded-2xl font-extrabold text-center shadow-[0_10px_30px_rgba(34,197,94,0.4)] pointer-events-auto border-4 border-white animate-pulse-custom"
      >
        QUERO MEUS JOGOS AGORA! 🎮
      </a>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default StickyCTA;
