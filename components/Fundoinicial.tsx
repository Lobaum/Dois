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
    <img src="/images/sapo2.png" alt="Sapo" className="w-40 relative z-10" style={{ animation: "flutuar 4s ease-in-out infinite, girar 8s linear infinite",}}/>
    <style>
      {`
        @keyframes voar {
          0% { transform: translateX(-20vw); }
          100% { transform: translateX(120vw); }
        }

        @keyframes flutuar {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes girar {
          0% { rotate: 0deg; }
          100% { rotate: 360deg; }
        }
      `}
    </style>
  </div>
);


export const Espaço: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" >
      <Sapo top="10%" delay={0} duration={25} size="2.0rem" />
      
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
