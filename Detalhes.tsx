
import React from 'react';
import { LinhadoTempo, ImagensTops } from './types';
import { Target, MessageSquare, Heart, Gamepad2, Stars } from 'lucide-react';

export const Datas: LinhadoTempo[] = [
  {
    date: '10 Junho 2024',
    title: 'Inimigos',
    description: 'Primeira vez',
    icon: 'alvo'
  },
];

export const Imagens: ImagensTops[] = [

];

export const Icones = {
  'alvo': <Target className="w-6 h-6" />,
  'quadrado': <MessageSquare className="w-6 h-6" />,
  'Coracao': <Heart className="w-6 h-6" />,
  'estrela': <Stars className="w-6 h-6" />,
  'contole': <Gamepad2 className="w-6 h-6" />
};
