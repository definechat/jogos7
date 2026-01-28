
import React, { useState, useEffect } from 'react';

const names = ["Letícia","Maria","Ana","Juliana","Fernanda","Camila","Beatriz","Larissa","Amanda","Gabriela","Mariana","Carolina","Rafaela","Patrícia","Bruna","Lucas","Pedro","João","Gabriel","Rafael","Bruno","Carlos","Matheus","Felipe","Gustavo","Ricardo","André","Marcelo","Thiago","Leonardo"];

const FakeNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const showNotification = () => {
      setName(names[Math.floor(Math.random() * names.length)]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    const initialTimer = setTimeout(showNotification, 3000);
    const interval = setInterval(showNotification, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 bg-[#22c55e] text-white p-3 rounded-lg shadow-2xl z-[9999] flex items-center gap-3 max-w-[280px] animate-[slideInLeft_0.4s_ease-out]">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg shrink-0">✓</div>
      <div>
        <div className="font-semibold text-sm">{name} acabou de comprar</div>
        <div className="text-[10px] opacity-80">Super Pack Retro Games</div>
      </div>
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FakeNotification;
