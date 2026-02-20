import React from 'react';

const Baleia: React.FC<{ delay: number; top: string; duration: number; size: string }> = ({ delay, top, duration, size }) => (
  <div
    className="absolute pointer-events-none opacity-50 select-none z-10 transition-all"
    style={{
      top,
      left: '-150px',
      fontSize: size,
      animation: `swim ${duration}s linear infinite`,
      animationDelay: `${delay}s`
    }}
  >
    🐳
    <style>{`
      @keyframes swim {
        from { transform: translateX(-10vw) translateY(0) rotate(0deg); }
        25% { transform: translateX(20vw) translateY(-20px) rotate(8deg); }
        50% { transform: translateX(50vw) translateY(0) rotate(0deg); }
        75% { transform: translateX(80vw) translateY(20px) rotate(-8deg); }
        to { transform: translateX(115vw) translateY(0) rotate(0deg); }
      }
    `}</style>
  </div>
);


const Sapo: React.FC<{ delay: number; top: string; duration: number; size: string }> = ({ delay, top, duration, size }) => (
  <div className="absolute pointer-events-none opacity-50 select-none z-10 transition-all"
    style={{
      top,
      left: '-150px',
      fontSize: size,
      animation: `swim ${duration}s linear infinite`,
      animationDelay: `${delay}s`
    }}
  >
    🐸
    <style>{`
      @keyframes swim {
        from { transform: translateX(-10vw) translateY(0) rotate(0deg); }
        25% { transform: translateX(20vw) translateY(-20px) rotate(8deg); }
        50% { transform: translateX(50vw) translateY(0) rotate(0deg); }
        75% { transform: translateX(80vw) translateY(20px) rotate(-8deg); }
        to { transform: translateX(115vw) translateY(0) rotate(0deg); }
      }
    `}</style>
  </div>
);

const Ondas: React.FC<{ opacity: number; color: string; duration: string; bottom: string; height: string }> = ({ opacity, color, duration, bottom, height }) => (
  <div
    className="absolute left-0 w-[400%] pointer-events-none overflow-hidden"
    style={{ bottom, opacity, height }}
  >
    <div className="wave-wrapper flex h-full">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full fill-current" style={{ color, animation: `wave-scroll ${duration} linear infinite` }}>
        <path d="M0,60 C150,110 300,10 450,60 C600,110 750,10 900,60 C1050,110 1200,10 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full fill-current" style={{ color, animation: `wave-scroll ${duration} linear infinite` }}>
        <path d="M0,60 C150,110 300,10 450,60 C600,110 750,10 900,60 C1050,110 1200,10 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
    <style>{`
      @keyframes wave-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
      }
      .wave-wrapper {
        width: 200%;
        display: flex;
      }
    `}</style>
  </div>
);

export const CoisasFundo: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-sky-200" >

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0124] to-black opacity-60" /> */}

      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

      {/* <Ondas bottom="-10%" height="300px" opacity={0.12} color="#89cff0" duration="15s" />
      <Ondas bottom="10%" height="250px" opacity={0.08} color="#00ff15ff" duration="22s" />
      <Ondas bottom="40%" height="200px" opacity={0.05} color="#db2777" duration="30s" />
      <Ondas bottom="70%" height="150px" opacity={0.03} color="#89cff0" duration="40s" /> */}

      <Baleia top="15%" delay={0} duration={28} size="3.5rem" />
      <Baleia top="75%" delay={10} duration={25} size="4.2rem" />
      <Sapo top="57%" delay={20} duration={25} size="4.2rem" />
      <Sapo top="20%" delay={7} duration={25} size="3.0rem" />

      <div className="absolute top-0 left-0 w-full h-full border-[1px] border-indigo-500/5 m-10 rounded-[3.5rem] pointer-events-none" />
      <div className="absolute top-1/3 left-8 w-px h-64 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent" />
      <div className="absolute bottom-1/3 right-8 w-px h-64 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-transparent" />

      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[1px] h-[1px] bg-white rounded-full opacity-30 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            transform: `scale(${Math.random() * 1.5})`
          }}
        />
      ))}
    </div>
  );
};
