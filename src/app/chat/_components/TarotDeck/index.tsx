import { Box, Stack, Typography } from '@mui/joy';
import { useEffect, useState } from 'react';

interface TarotCardProps {
  title: string;
  delay: number;
}

const tarotCardStyles = {
  width: 120,
  height: 200,
  borderRadius: 2,
  border: '3px solid #6C4F1D',
  backgroundColor: '#F4E1D2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  position: 'relative',

  animation: 'appearCard 0.8s forwards',
};

const TarotCard = ({ title, delay }: TarotCardProps) => {
  return (
    <Box
      sx={{
        ...tarotCardStyles,
        animationDelay: `${delay}s`,
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#6C4F1D',
          position: 'absolute',
          top: 10,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

const TarotDeck = () => {
  const tarotCards = [
    { title: 'The Fool' },
    { title: 'The Magician' },
    { title: 'The High Priestess' },
    { title: 'The Empress' },
    { title: 'The Emperor' },
    { title: 'The Hierophant' },
    { title: 'The Lovers' },
    { title: 'The Chariot' },
    { title: 'Strength' },
    { title: 'The Hermit' },
    { title: 'Wheel of Fortune' },
    { title: 'Justice' },
    { title: 'The Hanged Man' },
    { title: 'Death' },
    { title: 'Temperance' },
    { title: 'The Devil' },
    { title: 'The Tower' },
    { title: 'The Star' },
    { title: 'The Moon' },
    { title: 'The Sun' },
    { title: 'Judgment' },
    { title: 'The World' },
  ];

  const [shuffledCards, setShuffledCards] = useState<typeof tarotCards>([]);

  useEffect(() => {
    const shuffleDeck = () => {
      const shuffled = [...tarotCards];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledCards(shuffled);
    };

    shuffleDeck();
  }, []);

  return (
    <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} flexWrap="wrap">
      {shuffledCards.length === 0 ? (
        <Typography>Loading cards...</Typography>
      ) : (
        shuffledCards.map((card, index) => <TarotCard key={card.title} title={card.title} delay={index * 0.2} />)
      )}
    </Stack>
  );
};

export default TarotDeck;
