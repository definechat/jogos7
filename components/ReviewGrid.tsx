
import React from 'react';

const reviews = [
  { name: "Carlos Oliveira", text: "Rodou liso no meu J7 antigo. O Super Mario World traz muitas lembranças!", rating: 5 },
  { name: "Mariana Souza", text: "Meus filhos adoraram o Donkey Kong. Instalação super simples pelo vídeo.", rating: 5 },
  { name: "Felipe Lima", text: "O suporte no WhatsApp foi nota 10, me ajudaram a configurar o controle Bluetooth.", rating: 5 },
  { name: "Roberto Alves", text: "Melhor investimento que fiz. Tenho um fliperama no meu bolso agora.", rating: 5 }
];

const ReviewGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 my-10">
      {reviews.map((rev, i) => (
        <div key={i} className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex flex-col gap-2">
          <div className="flex gap-1 text-yellow-400">
            {[...Array(rev.rating)].map((_, j) => (
              <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <p className="text-gray-800 text-sm italic">"{rev.text}"</p>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">— {rev.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewGrid;
