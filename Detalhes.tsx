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
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1447986828513640583/image.png?ex=69a11c12&is=699fca92&hm=1a3817fa1ffea5590a6d46c19650565800f57c2645bd76bc5eab08076549d757&=&format=webp&quality=lossless', caption: 'Você e a meme (sorriso lindo da gota)' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904029204189205/IMG-20260207-WA0045.jpg?ex=69a0d0ea&is=699f7f6a&hm=df6aa9bd96349ac69bb2ef59f9519082159f2db508643c7350f4e85d9ff36993&=&format=webp&width=507&height=902', caption: 'Essa gótica aqui, slk 🥵' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904029900570635/IMG-20260131-WA0104.jpg?ex=69a0d0eb&is=699f7f6b&hm=777b36a7dc6bd8d63c64c5f2e751cb4d3ed7e1eed4d10bf78a9c1775a00698d5&=&format=webp&width=507&height=902', caption: 'Minha pitchulinha 🥹🥹' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904030261018804/IMG-20260102-WA0002.jpg?ex=69a0d0eb&is=699f7f6b&hm=adaedd95ce6dcff10dcc09533947982e6b1ecfa20bf6be438928c5ac09e5ff7d&=&format=webp&width=676&height=902', caption: 'Minha foto favorita, eu sinto mt felicidade quando vejo ela' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904187740360821/IMG-20260101-WA0003.jpg?ex=69a0d110&is=699f7f90&hm=36c2dfb04831884229e9d792ff5d772475f6555b6794762e6fd2d32495f85505&=&format=webp&width=507&height=902', caption: 'Vc tava uma graçinha de gojo' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904030655545516/IMG-20260101-WA0031.jpg?ex=69a0d0eb&is=699f7f6b&hm=0fe702a9a80461d5f187bab36b544a50f63a327a6cdeec376e838d64e9f924fc&=&format=webp&width=507&height=901', caption: 'Gojo se embriagando' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904188185088262/IMG-20251225-WA0040.jpg?ex=69a0d110&is=699f7f90&hm=cd0b813b27eed583e1fefe406e1ead670b714921f27f08adfb81ef4144458822&=&format=webp&width=676&height=902', caption: 'Você de gorrinho ❤️' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904188868628742/IMG-20251214-WA0002.jpg?ex=69a0d111&is=699f7f91&hm=908066522747e630db35e36304d330f150729801b13df6a008e1b2cab0299c1a&=&format=webp', caption: 'Perfeita demais, meu Deus' }
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
