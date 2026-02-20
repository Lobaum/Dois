import React from 'react';

const Sapo: React.FC<{ delay: number; top: string; duration: number; size: string }> = ({ delay, top, duration, size }) => (
  <div className="absolute pointer-events-none opacity-50 select-none z-10 transition-all"
    style={{
      top,
      left: '-150px',
      fontSize: size,
      animation: `voar ${duration}s linear infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <img src="./assets/sapo2.png" alt="Sapo" className="w-40"/>
    <style>{`
      @keyframes voar {
        from { transform: translateX(-10vw) translateY(0) rotate(0deg); }
        25% { transform: translateX(20vw) translateY(-20px) rotate(10deg); }
        50% { transform: translateX(50vw) translateY(0) rotate(0deg); }
        75% { transform: translateX(80vw) translateY(20px) rotate(-10deg); }
        to { transform: translateX(115vw) translateY(0) rotate(0deg); }
      }
    `}</style>
  </div>
);


export const Espaço: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" >
      <Sapo top="10%" delay={0} duration={25} size="2.0rem" />

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
