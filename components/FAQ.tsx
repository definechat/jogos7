
import React, { useState } from 'react';
import { FAQItem } from '../types.ts';

const faqData: FAQItem[] = [
  {
    question: "Como vou receber o material?",
    answer: "O envio é automático e imediato. Assim que o pagamento confirma, você recebe um e-mail com o link do Drive para Baixar. ⚠️ Importante: Verifique sua caixa de Spam ou Lixo Eletrônico. Caso não encontre, não se preocupe: basta chamar nosso Suporte no WhatsApp que enviamos o acesso para você manualmente na hora."
  },
  {
    question: "Preciso de um celular 'Gamer' ou potente?",
    answer: "Não. Essa é a melhor parte. O Emulador que usamos para o Super Nintendo é um console leve. Nosso pacote foi otimizado para rodar liso em qualquer Android, desde os modelos mais simples (Samsung J5, Moto G, LG) até os mais modernos. Se seu celular liga, ele roda."
  },
  {
    question: "Ocupa muito espaço na memória?",
    answer: "Não se preocupe com memória cheia. Você não precisa baixar os 945 jogos de uma vez se não quiser. Nosso Drive é organizado: você pode baixar apenas o jogo que quer jogar agora, ou baixar tudo se preferir. Você tem total controle."
  },
  {
    question: "Funciona em iPhone (iOS)?",
    answer: "Sim! Nosso pack é totalmente compatível com iOS (iPhone/iPad) e Android. Você receberá as instruções detalhadas para configurar em ambos os sistemas de forma simples e rápida."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos PIX (liberação imediata do download)"
  },
  {
    question: "E se eu não conseguir instalar? Tem garantia?",
    answer: "Sim! Você tem 7 dias de garantia incondicional. Além disso, oferecemos suporte VIP no WhatsApp. Se você seguir o vídeo passo a passo e não funcionar (o que é impossível), ou se simplesmente não gostar, nós devolvemos 100% do seu dinheiro. O risco é todo nosso."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#f8f8f8] p-6 rounded-2xl">
      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">Perguntas Frequentes</h3>
      <div className="space-y-1">
        {faqData.map((item, i) => (
          <div key={i} className="border-b border-gray-200 last:border-0">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
            >
              <span className="text-base font-semibold text-[#1a1a1a]">{item.question}</span>
              <svg 
                className={`w-5 h-5 text-[#22c55e] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
              <p className="text-sm text-[#1a1a1a] opacity-80 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
