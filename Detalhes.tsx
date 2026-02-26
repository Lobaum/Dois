import { LinhadoTempo, ImagensTops } from './types';
import { CalendarHeart, MessageSquare, Heart, Gamepad2, Stars, Calendar, HeartPlus } from 'lucide-react';

export const Datas: LinhadoTempo[] = [
  {
    date: '10 Junho 2025',
    title: 'Quando eu te conheci',
    description: 'Foi nossa primeira interação, eu cai contra vc enquanto jogava com uns amigos, ai no final da partida te mandei solicitação de amizade e começamos a jogar juntos',
    icon: 'calendariocoracao'
  },
  {
    date: '14 Junho 2025',
    title: 'Segunda conversa',
    description: 'Depois de 4 dias jogamos juntos de novo, conversamos um pouco mais  (2hrs em call, hj em dia é pouco KKKKK)',
    icon: 'quadrado'
  },
  {
    date: '22 Junho 2025',
    title: 'Foi quando peguei imortal',
    description: 'Assim que eu peguei imortal eu tirei print e te mandei pq eu lembrei q vc tinha salvo meu nome como "pedro elo zap zap" por conta do ascendente',
    icon: 'estrela'
  },
  {
    date: '23 Junho 2025',
    title: 'Conhecendo o pessoal do discord',
    description: 'Quando vc me mandou o discord do salvando progresso e eu entrei no servidor, ai conheci o pessoal do discord e comecei a jogar com eles.',
    icon: 'contole'
  },
  {
    date: '12 Agosto 2025',
    title: 'Seu aniversário',
    description: 'Depois de 50 dias sem conversarmos, te mandei feliz aniverário, dizendo que eu tinha ficado muito feliz de ter conhecido vc kkkkkkk',
    icon: 'calendario'
  },
  {
    date: '08 Novembro 2025',
    title: 'Onde tudo se iniciou depois de um tempo sem se falarmos',
    description: 'A partir desse dia, começamos a conversar mais, a jogar mais juntos, e a se conhecer melhor, foi quando tudo começou de verdade, e eu comecei a me apaixonar por vc.',
    icon: 'Coracao2'
  },
  {
    date: '26 Dezembro 2025',
    title: 'Namoro',
    description: 'Embora já estivéssemos praticamente namorando, foi aqui o dia que declaramos para ser a data comemorativa do nosso namoro ❤️.',
    icon: 'Coracao'
  },
];

export const Imagens: ImagensTops[] = [
  { url: '/assets/image.jpg', caption: 'Você e a meme (sorriso lindo da gota)' },
  { url: '/assets/IMG-20260207-WA0045.jpg', caption: 'Essa gótica aqui, slk 🥵' },
  { url: '/assets/IMG-20260131-WA0104.jpg', caption: 'Minha pitchulinha 🥹🥹' },
  { url: '/assets/IMG-20260102-WA0002.jpg', caption: 'Minha foto favorita, eu sinto mt felicidade quando vejo ela' },
  { url: '/assets/IMG-20260101-WA0003.jpg', caption: 'Vc tava uma graçinha de gojo' },
  { url: '/assets/IMG-20260101-WA0031.jpg', caption: 'Gojo se embriagando' },
  { url: '/assets/IMG-20251225-WA0040.jpg', caption: 'Você de gorrinho ❤️' },
  { url: '/assets/IMG-20251214-WA0002.jpg', caption: 'Perfeita demais, meu Deus' }
];

export const Icones = {
  'calendariocoracao': <CalendarHeart className="w-6 h-6" />,
  'calendario': <Calendar className="w-6 h-6" />,
  'quadrado': <MessageSquare className="w-6 h-6" />,
  'Coracao': <Heart className="w-6 h-6" />,
  'estrela': <Stars className="w-6 h-6" />,
  'Coracao2': <HeartPlus className="w-6 h-6" />,
  'contole': <Gamepad2 className="w-6 h-6" />
};
