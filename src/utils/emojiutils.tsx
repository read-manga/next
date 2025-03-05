import { Smile, Leaf, Cherry, Gamepad2, Bike, Phone, Heart, Flag } from 'lucide-react';
import { EmojiCategory } from './emojis';

export const getCategoryIcon = (category: EmojiCategory) => {
  switch (category) {
    case 'PESSOAS':
      return <Smile size={20} className="mr-2" />;
    case 'NATUREZA':
      return <Leaf size={20} className="mr-2" />;
    case 'ALIMENTOS':
      return <Cherry size={20} className="mr-2" />;
    case 'ATIVIDADES':
      return <Gamepad2 size={20} className="mr-2" />;
    case 'VIAGEM':
      return <Bike size={20} className="mr-2" />;
    case 'OBJETOS':
      return <Phone size={20} className="mr-2" />;
    case 'SIMBOLOS':
      return <Heart size={20} className="mr-2" />;
    case 'BANDEIRAS':
      return <Flag size={20} className="mr-2" />;
    default:
      return null;
  }
};
