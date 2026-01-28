
import React, { useEffect, useState } from 'react';

const UrgencyBar: React.FC = () => {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const now = new Date();
    setDateStr(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);
  }, []);

  return (
    <div className="bg-[#bd0000] text-white py-2.5 px-5 text-center font-semibold text-sm flex justify-center items-center gap-2">
      <span>
        <span className="text-yellow-400 font-bold">⚡</span> Desconto só <span className="text-yellow-400 font-extrabold uppercase">HOJE</span> nessa página <span className="text-yellow-400 font-extrabold">{dateStr}</span>
      </span>
    </div>
  );
};

export default UrgencyBar;
