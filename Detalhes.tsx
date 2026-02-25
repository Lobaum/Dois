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
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1447986828513640583/image.png?ex=699b2d52&is=6999dbd2&hm=3ce642db4b5b97bb6d6a9d132db7256bb37917bc0cbd19ac6bf600630ed792e4&=&format=webp&quality=lossless', caption: 'Você e a meme (sorriso lindo da gota)' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904029204189205/IMG-20260207-WA0045.jpg?ex=699b8aea&is=699a396a&hm=a073d7f35d49fe4202d413bf22f9252b8e845cf92546ec39668208edef2a6e49&=&format=webp&width=507&height=902', caption: 'Essa gótica aqui, slk 🥵' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904029900570635/IMG-20260131-WA0104.jpg?ex=699b8aeb&is=699a396b&hm=08db3702629bfe8706a47f908052e5c1395863d589a40f6b14238b47190fe136&=&format=webp&width=507&height=902', caption: 'Minha pitchulinha 🥹🥹' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904030261018804/IMG-20260102-WA0002.jpg?ex=699b8aeb&is=699a396b&hm=1b505f71e69a3e0d60662a8b5a592dda214b8257ebbd1e15b125389c7f4ac87f&=&format=webp&width=676&height=902', caption: 'Minha foto favorita, eu sinto mt felicidade quando vejo ela' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904187740360821/IMG-20260101-WA0003.jpg?ex=699b8b10&is=699a3990&hm=e45d60fb3efbdcaec6ceda9db0e778558a158d26de546a1c68aaac734948d543&=&format=webp&width=507&height=902', caption: 'Vc tava uma graçinha de gojo' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904030655545516/IMG-20260101-WA0031.jpg?ex=699b8aeb&is=699a396b&hm=124f416dc105c0531ac1db9d9de6f6406eb9e3392c54d018d573ff631ca14718&=&format=webp&width=507&height=901', caption: 'Gojo se embriagando' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904188185088262/IMG-20251225-WA0040.jpg?ex=699b8b10&is=699a3990&hm=9ba03ef9b8be0c4f4436bbd6c0c9e0cd9b9fa1173e93eca0b16351ce16eb7f6b&=&format=webp&width=676&height=902', caption: 'Você de gorrinho ❤️' },
  { url: 'https://media.discordapp.net/attachments/907119033608990720/1474904188868628742/IMG-20251214-WA0002.jpg?ex=699b8b11&is=699a3991&hm=193bcdfd993846c8db88f0d97803ed4091f73c1c7b02cadc228863b6a6106e7c&=&format=webp', caption: 'Perfeita demais, meu Deus' }

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
