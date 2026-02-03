
import React, { useState, useEffect } from 'react';
import UrgencyBar from './components/UrgencyBar.tsx';
import CountdownTimer from './components/CountdownTimer.tsx';
import Carousel from './components/Carousel.tsx';
import VideoPlayer from './components/VideoPlayer.tsx';
import PricingCard from './components/PricingCard.tsx';
import FAQ from './components/FAQ.tsx';
import FakeNotification from './components/FakeNotification.tsx';
import UpgradePopup from './components/UpgradePopup.tsx';
import ReviewGrid from './components/ReviewGrid.tsx';
import { PricingPlan } from './types.ts';

const App: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      window.location.href = 'https://pay.wiapy.com/R27ONnaVxW';
    };
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      badge: 'Básico',
      title: 'Pack Super Mario',
      price: 'R$ 10,00',
      originalPrice: 'R$ 38,00',
      benefits: [
        'Apenas Super Mario World',
        '🎲 + 10 Jogos Selecionados',
        'Suporte por E-mail'
      ],
      buttonText: 'Adquirir Oferta Básica',
      buttonUrl: '#',
      accentColor: '#94a3b8',
      variant: 'minimal'
    },
    {
      id: 'standard',
      badge: 'Mais Vendido',
      title: 'Pack Super Nintendo - 945 Jogos',
      price: 'R$ 29,90',
      originalPrice: 'R$ 38,00',
      benefits: [
        'Super Mario World + All Stars',
        'Donkey Kong Country (1, 2 e 3)',
        'Mortal Kombat 3 Ultimate',
        'Street Fighter II',
        'The Legend of Zelda',
        'Top Gear 1 e 2',
        '📞 Suporte VIP no WhatsApp',
        'Total: 945 Jogos'
      ],
      buttonText: '👉 Adquirir 945 Jogos',
      buttonUrl: '#',
      accentColor: '#22c55e',
      variant: 'minimal'
    },
    {
      id: 'premium',
      badge: '💎 RECOMENDADO - VIP',
      title: 'PACK MULTI-VÍDEO-GAMES',
      price: 'R$ 47,90',
      originalPrice: 'R$ 198,00',
      benefits: [
        'PS2 - 50 Clássicos (GTA, God of War) + pack extra',
        'PS1 - Clássicos Inesquecíveis + pack extra',
        '945 Jogos Super Nintendo',
        'Mega Drive (Sonic, Alex Kidd) + pack extra',
        'Nintendo 64 (007, Mario 64) + pack extra',
        'Game Boy Color & Advance + pack extra',
        '📞 Suporte VIP Permanente',
        'Acesso Vitalício',
        '🎁 Bônus: Guia de Controles'
      ],
      buttonText: '👉 Adquirir Pack Completo',
      buttonUrl: 'https://pay.wiapy.com/R27ONnaVxW',
      accentColor: '#1e40af',
      variant: 'classic',
      image: 'https://i.imgur.com/rMpvc9l.jpeg'
    }
  ];

  return (
    <div className="w-full max-w-[480px] mx-auto bg-white min-h-screen shadow-2xl relative overflow-x-hidden pb-24">
      <UrgencyBar />
      <CountdownTimer />
      
      <section className="px-5 pt-12 pb-10 bg-white">
        <h2 className="text-[#1a1a2e] text-[26px] font-extrabold text-center leading-[1.1] mb-2 uppercase">
          O MAIOR PACK DE JOGOS DO BRASIL 🇧🇷
        </h2>
        <h2 className="text-[#2201c6] text-[34px] font-black text-center leading-[1.1] mb-4 drop-shadow-sm">
          +900 JOGOS CLÁSSICOS
        </h2>
        <p className="text-gray-700 text-lg font-medium text-center leading-relaxed mb-8">
          Tenha o <span className="font-bold">Playstation 2, Playstation 1, Nintendo 64, Super Nintendo, Mega Drive e Game Boy</span> no seu celular (Android ou iOS).
        </p>
        
        <div className="bg-green-50 rounded-3xl p-6 text-center shadow-sm border-2 border-green-200 mb-10 transform -rotate-1">
           <p className="text-green-800 text-lg font-bold space-y-2">
             <span className="block">🚀 Envio Imediato no Email</span>
             <span className="block">✅ Sem Mensalidades</span>
             <span className="block">🎮 Suporte para Controle BT</span>
             <span className="block">📱 Acesso a área de membros</span>
             <span className="block">⭐ Suporte 24H</span>
             <span className="block">✅ Instalação fácil</span>
             <span className="block">⚡ Funciona sem internet</span>
             <span className="block">🚀 Envio imediato</span>
           </p>
        </div>

        <img 
          src="https://i.ibb.co/KzFBdY6B/unnamed-13.webp" 
          alt="Banner de Jogos" 
          className="w-full rounded-2xl mb-12 shadow-2xl border-4 border-white" 
        />
        
        <div className="text-center mb-10">
          <p className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Consoles Inclusos
          </p>
          <img src="https://i.ibb.co/WpDrm2L4/TOTAL.jpg" alt="Consoles Retro" className="w-full rounded-2xl shadow-lg" />
        </div>
        
        <h3 className="text-black text-xl font-black text-center mb-6 uppercase tracking-tight">
          VEJA OS CLÁSSICOS DE PS2
        </h3>
        <Carousel />
        
        <div className="my-16 text-center">
          <h2 className="text-[28px] font-black text-gray-900 leading-tight mb-4">
            RECORDE A SUA INFÂNCIA <br/> NO CELULAR
          </h2>
          <img src="https://i.imgur.com/bpeU7NG.jpeg" alt="Gameplay Mobile" className="w-full rounded-2xl shadow-md mb-8" />
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <p className="text-gray-600 font-bold mb-6 text-sm uppercase tracking-widest">Depoimentos dos Nossos Alunos</p>
            <VideoPlayer 
              videoId="Ta7ZqtwHuu8" 
              label="Marcelo: 'Meus filhos amaram o Pack'" 
              playerId="ytplayer"
              soundBtnId="soundBtn"
            />
            <VideoPlayer 
              videoId="tOfgjOZOZiE" 
              label="Carlos Kaká: 'Revivi momentos mágicos'" 
            />
          </div>

          <div className="bg-black rounded-3xl p-8 text-white text-center shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h2 className="text-2xl font-black mb-6 relative z-10">JOGUE ONDE QUISER <br/> SEM INTERNET!</h2>
            <img src="https://i.ibb.co/Fkp8ftLD/unnamed-6.webp" alt="Offline Mode" className="w-full rounded-xl mb-6 shadow-lg border-2 border-white/10" />
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Ideal para viagens, aviões ou lugares sem sinal. Baixe os jogos e jogue para sempre sem gastar dados.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 bg-gray-50 border-t border-gray-100">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-[#3700ff] text-xs font-black text-center mb-4 tracking-[0.2em] uppercase">Mais de 900 Títulos</h2>
          <h2 className="text-gray-900 text-[26px] font-black text-center mb-10 leading-tight">OS JOGOS DE PS2 MAIS PROCURADOS</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {["Prince of Persia Trilogy", "Spider-Man 2", "Metal Gear Solid 2 & 3", "Midnight Club 3: Dub Edition", "Dragon Ball Z: Budokai 3", "Tekken 5", "NFS: Most Wanted", "NFS: Underground 2", "Crash Nitro Kart", "Bully", "Ben 10: Alien Force", "Def Jam: Fight for NY", "Naruto: Ultimate Ninja 3"].map((game, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-sm shadow-blue-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-900 font-bold text-sm uppercase">{game}</span>
              </div>
            ))}
            <p className="text-center text-gray-400 font-bold text-xs mt-4 uppercase">...e centenas de outros!</p>
          </div>
        </div>

        <div className="text-center">
          <img src="https://i.imgur.com/hT04TK7.jpeg" alt="Retro Gaming Mobile" className="w-full rounded-3xl shadow-xl" />
        </div>
      </section>

      <section className="px-5 py-12">
        <h2 className="text-center text-2xl font-black mb-8">O Que Dizem Nossos Clientes</h2>
        <ReviewGrid />
      </section>

      <section id="ofertas" className="px-5 py-16 bg-[#0a0a0a]">
        <div className="text-center mb-12">
          <p className="text-green-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Escolha sua Experiência</p>
          <h2 className="text-white text-3xl font-black mb-2">PROMOÇÃO EXCLUSIVA</h2>
          <p className="text-gray-500 font-medium">Liberação imediata após o pagamento.</p>
        </div>
        
        {plans.map((plan) => (
          <PricingCard 
            key={plan.id} 
            plan={plan} 
            onUpgradeClick={() => setActivePopup(plan.id)}
          />
        ))}

        <div className="bg-[#1a1a1a] border border-green-500/30 p-6 rounded-2xl flex items-center gap-5 mt-10">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-12 h-12" />
          <div>
            <p className="text-white font-bold text-sm">Acesso enviado via WhatsApp</p>
            <p className="text-gray-400 text-xs">Receba o link e o tutorial direto no celular.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 bg-white">
        <FAQ />
        
        <div className="mt-20 flex flex-col items-center gap-10">
          <div className="text-center max-w-[300px]">
            <img src="https://i.ibb.co/fJcT600/10703030.png" alt="Segurança" className="w-32 mx-auto mb-6 opacity-80" />
            <h3 className="text-xl font-black mb-2">Compra 100% Segura</h3>
            <p className="text-gray-500 text-sm">Seus dados estão protegidos por criptografia de ponta.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl text-center w-full">
            <h3 className="text-2xl font-black mb-4">7 DIAS DE GARANTIA</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Confiamos tanto no nosso material que se você não gostar, devolvemos seu dinheiro na hora. Sem perguntas, sem burocracia.
            </p>
            <img src="https://i.ibb.co/JNDVpJb/unnamed-1.webp" alt="Selo de Garantia" className="w-32 mx-auto" />
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-12 text-center px-6">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed mb-4">
          Este site não é afiliado ao Google, Meta ou Nintendo. <br/>
          Copyright © 2025 Jogos Retro Mobile. Todos os direitos reservados.
        </p>
        <p className="text-[10px] text-gray-300">
          Suporte: JogosNitendoAndroid2025@gmail.com
        </p>
      </footer>

      <UpgradePopup 
        isOpen={activePopup === 'basic'}
        onClose={() => setActivePopup(null)}
        badge="OFERTA RELÂMPAGO"
        title="Upgrade: Pack 945 Jogos SNES"
        price="R$ 19,90"
        image="https://i.ibb.co/WpDrm2L4/TOTAL.jpg"
        benefits={[
          "945 Jogos: Diversão garantida por meses!",
          "Salva o progresso e tem Rebobinar",
          "Suporte VIP prioritário no Whats",
          "Tutorial em vídeo - Instalou, Jogou!",
          "Acesso Vitalício direto no seu Google Drive"
        ]}
        primaryUrl="https://pay.wiapy.com/M6jtVThEY"
        secondaryUrl="https://pay.wiapy.com/eekA_AHWpV"
        primaryText="SIM! LIBERAR 945 JOGOS POR R$ 19,90"
        secondaryText="Não, quero continuar com a oferta anterior de 10"
      />

      <UpgradePopup 
        isOpen={activePopup === 'standard'}
        onClose={() => setActivePopup(null)}
        badge="OFERTA RELÂMPAGO"
        title="Upgrade: Pack Multi-Vídeo-Games"
        price="R$ 37,90"
        image="https://i.imgur.com/lcPUIjh.png"
        benefits={[
          "PS2, PS1 e N64: Os maiores clássicos 3D",
          "Gráficos HD e suporte a Controle Bluetooth",
          "Biblioteca Completa com +2000 títulos",
          "Jogue God of War, GTA e Mario 64 no Celular",
          "100% Seguro, Vitalício e Offline"
        ]}
        primaryUrl="https://pay.wiapy.com/GaTzXJTNW"
        secondaryUrl="https://pay.wiapy.com/Bcs9vP6KOo"
        primaryText="SIM! QUERO TUDO LIBERADO POR R$ 37,90"
        secondaryText="Não, quero continuar com a oferta anterior de 29,90"
      />

      <FakeNotification />
    </div>
  );
};

export default App;
