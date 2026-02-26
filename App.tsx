
import React, { useState, useEffect, useRef } from 'react';
import { Datas, Imagens, Icones } from './Detalhes';
import { CoisasFundo } from './components/Fundo';
import { Espaço } from './components/Fundoinicial';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import { MorphingText } from './components/Morfar';
import { Confetti, type ConfettiRef } from "./components/Confetes";
import { Particles } from "./components/ParticulasEstelar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Iphone } from './components/AAACERULAEUTEQUEBRO';
import { TextAnimate } from './components/animacaotexto';
import { BlurFade } from "./components/animacaofoto";

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
        <Particles className="absolute inset-0 z-0" quantity={200} size={0.4} color="#ffffffff" />
        <div className="z-10 text-center space-y-10 max-w-3xl px-4">
          <div className="text-green-300">
            <MorphingText
              texts={["Feliz", "Dois", "Meses", "Meu", "Amor", "Eu", "Te", "Amo"]}
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
              Navegar no Espaço-tempo
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-sky-900/20 to-transparent transition-transform duration-700" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen scroll-smooth" ref={scrollRef}>
      <CoisasFundo />

      <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-24 relative bg-gradient-to-b from-sky-200 to-blue-300">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-sky-500 text-6xl md:text-7xl font-space font-bold leading-tight">
              <TextAnimate animation="blurInUp" by="character" delay={0.5}>
                Você e Eu ❤️
              </TextAnimate>
            </h2>
            <p className="text-sky-500 text-xl leading-relaxed max-w-md">
              <TextAnimate animation="slideLeft" by="character" delay={0.5}>
                Obrigado por entrar na minha vida, momo.
              </TextAnimate>
              <BlurFade delay={0.5} inView>
                <DotLottieReact
                  src="https://lottie.host/f673907f-d4b0-48d6-ac01-ba76edc0c90e/eApfGOwEbh.lottie"
                  loop
                  autoplay
                />
              </BlurFade>
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-tr from-blue-900 to-blue-300 rounded-[3rem] blur-3xl group-hover:opacity-100 opacity-60 transition-opacity" />
            <BlurFade delay={0.25} inView>
              <Iphone src="https://media.discordapp.net/attachments/907119033608990720/1474566015257153667/A7485370-8C5E-4474-8306-F70C98AB962E.png?ex=69a0e79e&is=699f961e&hm=28943b622ba4d5e150b9a904c378ee6ccb7ce8cad5a062cf6678352036d89f22&=&format=webp&quality=lossless" />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* fotos */}

      <section id="galeriadamelhor" className="py-32 px-6 bg-gradient-to-b from-blue-300 to-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-6xl font-space font-bold bg-clip-text text-blue-400">
              <TextAnimate animation="blurInUp" by="character" delay={0.5}>
                Fotos Da Mulher Mais Linda Do Mundo
              </TextAnimate>
            </h2>
            <p className="text-slate-500 text-lg tracking-wide">
              <TextAnimate animation="blurInUp" by="character" delay={0.5}>
                Nunca se esqueça do quão lindo seu sorriso é.
              </TextAnimate>
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {Imagens.map((img, idx) => (
              <BlurFade key={img.url} delay={0.5 + idx * 0.05} inView>
                <div key={idx} className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-2xl shadow-blue-900 border border-sky-200/50">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-sky-200 font-medium text-xl translate-y-6 group-hover:translate-y-0 transition-transform duration-700">{img.caption}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={1} inView>
            <DotLottieReact
              src="https://lottie.host/d3b9efd4-788d-4972-ab54-03095a03e6ab/UHtkBjbPYd.lottie"
              loop
              autoplay
              className="w-full max-w-[1000px] h-auto"
            />
          </BlurFade>
        </div>
      </section>

      {/* Sla */}

      <section id="historia" className="py-40 px-6 relative overflow-hidden bg-green-100">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-5xl font-space font-bold text-emerald-500">Texto para o amor da minha vida 😋</h3>
              <p className="text-emerald-500 text-xl leading-relaxed">
                Eu quero poder dizer o quanto eu te amo e o quanto sou grato por ter você na minha vida.
                Apesar de estarmos longe e existir limitações físicas, sinto que o sentimento de amor e carinho só cresce a cada momento que passa.
                Você é uma pessoa muito importante para mim e eu me acho tão sortudo por ter alguém tão incrível como você comigo, me ensinando sobre coisas que jamais imaginei, me fazendo rir, me apoiando nos momentos difíceis e me amando do jeito que sou.
                Todos os dias vejo o quanto você é esforçada, inteligente, talentosa e linda, e isso me enche de orgulho e admiração por ti.
                Cada momento com você é uma nova emoção, uma descoberta, um aprendizado.
                Você me faz querer ser uma pessoa melhor, mais gentil, mais paciente, mais amorosa.
                Eu te amo por tudo o que você é e por tudo o que nós somos juntos.
                Obrigado por ser minha parceira de vida, minha melhor amiga, meu chicletinho, a sage da minha jett, minha momolada, o amor da minha vida.
                Eu te amo tanto que nem sei se é possível dizer por palavras. EU TE AMO MUITO ❤️
              </p>
              <img src="https://media.discordapp.net/attachments/907119033608990720/1474904029480882358/IMG-20260205-WA0059.jpg?ex=699b8aeb&is=699a396b&hm=06ee763255ef2a470eba607a6809316cb7450f3f5a63186d1f6f83ef27ef19ac&=&format=webp" className='rounded-2xl break-inside-avoid' />
            </div>
            <div className="bg-indigo-900/10 p-12 rounded-[2.5rem] border border-white/10 relative shadow-2xl backdrop-blur-2xl">
              <Sparkles className="absolute -top-6 -right-6 w-16 h-16 text-yellow-500 animate-pulse" />
              <div className="space-y-8">
                <img src="https://media.discordapp.net/attachments/907119033608990720/1474977187022246089/SaveClip.App_625761193_1632559197916322_8953959686102164833_n.jpg?ex=699bcf0d&is=699a7d8d&hm=35ab6069eb84c7fc696a0e5cbb9aa7a49364c71a425f5c8e9d2842fc40a98a15&=&format=webp&width=567&height=1006"
                  className='rounded-2xl break-inside-avoid'
                />
                <DotLottieReact
                  src="https://lottie.host/102f328e-2084-4656-8556-18d958a17ab9/IDPPXZfLUx.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha */}

      <section id="linha" className="py-40 px-6 bg-black-300 relative">
        <Particles className="absolute inset-0 z-0" quantity={200} size={0.4} color="#ffffffff" />
        <div className="max-w-5xl mx-auto relative">
          <Particles className="absolute inset-0 z-0" quantity={200} size={0.4} color="#ffffffff" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-200/40 via-yellow-100/40 to-transparent hidden md:block" />
          <div className="space-y-32">
            <Particles className="absolute inset-0 z-0" quantity={200} size={0.4} color="#ffffffff" />
            {Datas.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:text-right space-y-4 w-full">
                  <span className={`text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded bg-amber-950/40 border border-white/10 ${idx % 2 === 0 ? 'md:float-right' : 'md:float-left'}`}>
                    {item.date}
                  </span>
                  <div className="clear-both" />
                  <h4 className="text-3xl font-bold text-yellow-200">{item.title}</h4>
                  <p className="text-yellow-50 text-lg">{item.description}</p>
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full bg-amber-950 border border-yellow-100/50 flex items-center justify-center shadow-[0_0_35px_rgba(79,70,229,0.2)] text-yellow-300 transition-transform duration-500 hover:scale-110">
                  {Icones[item.icon as keyof typeof Icones]}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
            <h1 className="text-4xl md:text-4xl font-bold text-yellow-400">
              <TextAnimate animation="blurInUp" by="character" delay={0.5}>
                E que venham muitos mais momentos incríveis para nós, meu amor!
              </TextAnimate>
            </h1>
          </div>
        </div>
      </section>

      {/* final */}

      <section id="final" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-yellow-100">
        <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent pointer-events-none" />
        <div className="text-center space-y-16 max-w-4xl z-10">
          <div className="inline-block relative">
            <Heart className="w-32 h-32 text-pink-600 fill-current animate-pulse drop-shadow-[0_0_45px_rgba(192,38,211,0.4)]" />
            <div className="absolute inset-0 scale-150 blur-3xl bg-fuchsia-500/10 rounded-full animate-ping" />
          </div>
          <h2 className="text-5xl md:text-7xl font-space font-bold leading-tight text-red-300 drop-shadow-2xl px-4">
            <TextAnimate animation="blurInUp" by="character" duration={5}>
              Eu te amo, Momo
            </TextAnimate>
          </h2>
          <h3 className="font-space font-bold leading-tight text-red-300 drop-shadow-2xl px-4">
            <TextAnimate animation="slideLeft" by="character" delay={5}>
              Obrigado por tudo, meu amor. Você é a melhor coisa que já me aconteceu e eu sou eternamente grato por isso.
            </TextAnimate>
          </h3>
        </div>
      </section>
    </div>
  );
};

export default App;
