import { Box } from '@mui/joy';
import { useState } from 'react';
import taroDeckData, { TarotCard as TarotCardType } from '../../_data/tarot';
import { SendQuestionRequest } from '../../_service/api';
import TarotCard from '../TarotCard';

interface TaroDeckProps {
  onCardSelect: (cardId: SendQuestionRequest['card']) => void;
}

export interface TaroCardWithIsFlipped extends TarotCardType {
  isFlipped: boolean;
}

export default function TaroDeck({ onCardSelect }: TaroDeckProps) {
  const shuffle = (array: typeof taroDeckData) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [taroCardList, setTaroCardList] = useState<TaroCardWithIsFlipped[]>(() => {
    return shuffle(taroDeckData)
      .slice(0, 3)
      .map((cardData) => {
        return { ...cardData, isFlipped: false };
      });
  });

  const flipCard = (cardId: string) => {
    setTaroCardList((prevTaroCardList) => {
      return prevTaroCardList.map((card) => {
        return card.id === cardId ? { ...card, isFlipped: !card.isFlipped } : card;
      });
    });
  };

  return (
    <Box component="ul" display="flex" alignItems="center" justifyContent="center" height="100%" gap={2}>
      {taroCardList.map((card) => (
        <TarotCard
          key={card.id}
          card={card}
          onClick={async () => {
            onCardSelect(card.id as SendQuestionRequest['card']);
            flipCard(card.id);
          }}
        />
      ))}
    </Box>
  );
}
