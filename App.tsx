
import React, { useState, useEffect, useRef } from 'react';
import { Datas, Imagens, Icones } from './Detalhes';
import { CoisasFundo } from './components/Fundo';
import { Espaço } from './components/Fundoinicial';
import { Heart, ChevronDown, Gamepad2, Sparkles, Send } from 'lucide-react';
import { MorphingText } from './components/Morfar';
import { Confetti, type ConfettiRef } from "./components/Confetes";
import { Particles } from "./components/ParticulasEstelar";

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const scrollRef = useRef<HTMLDivElement>(null);
  const confettiRef = useRef<ConfettiRef>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [showContent]);

  if (!showContent) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white p-6 relative overflow-hidden">
        <Espaço />
        <Particles className="absolute inset-0 z-0" quantity={100} size={0.4} color="#ffffffff" />
        <div className="z-10 text-center space-y-10 max-w-3xl px-4">
          <div className="text-green-300">
            <MorphingText
              texts={["Teste", "Top", "Wow", "Dog"]}
            />
          </div>

          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 max-w-xl mx-auto">

          </p>
          <Confetti
            ref={confettiRef}
            className="absolute top-0 left-0 z-0 size-full"
            onMouseEnter={() => {
              confettiRef.current?.fire({})
            }}
          />
          <button
            onClick={() => setShowContent(true)}
            className="group relative px-12 py-6 bg-transparent border border-green-500/30 rounded-full text-emerald-500 font-space font-medium tracking-[0.2em] uppercase transition-all hover:bg-emerald-500/10 hover:border-emerald-400 hover:shadow-[0_0_50px_rgba(79,70,229,0.2)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">
              Clica aqui
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-sky-900/20 to-transparent transition-transform duration-700" />
          </button>
        </div>
      </div>
    );
  }
};

export default App;
