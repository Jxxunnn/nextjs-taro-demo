import CardBackgroundImage from '@/app/chat/_data/tarot/images/card-background.webp';
import { Box, Card, CardCover, CardProps } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import Image from 'next/image';
import { useState } from 'react';
import { TaroCardWithIsFlipped } from '../TaroDeck';

interface TarotCardProps extends CardProps {
  card: TaroCardWithIsFlipped;
}

export default function TarotCard({ card, sx, ...restProps }: TarotCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardFlipStyle: SxProps = {
    perspective: '1000px',
  };
  const cardInnerFlipStyle: SxProps = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
  };
  const cardCoverFlipStyle: SxProps = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
  };
  const cardFrontFlipStyle: SxProps = {
    transform: 'rotateY(180deg)',
  };

  return (
    <Card
      sx={{
        opacity: imageLoaded ? 1 : 0,
        borderWidth: 0,
        backgroundColor: 'transparent',
        width: { xs: '100px', sm: '200px' },
        height: { xs: '150px', sm: '300px' },
        padding: 0,
        transitionProperty: 'opacity',
        transitionDuration: '1s',
        transitionTimingFunction: 'ease-in-out',
        ...cardFlipStyle,
        ...sx,
      }}
      {...restProps}
    >
      <Box sx={{ ...cardInnerFlipStyle, transform: card.isFlipped ? 'rotateY(180deg)' : undefined }}>
        <CardCover
          component="button"
          sx={{
            cursor: 'pointer',
            borderWidth: 0,

            ...cardCoverFlipStyle,
            ...cardFrontFlipStyle,
          }}
        >
          <Image src={card.imgSrc} alt={card.alt} draggable={false} />
        </CardCover>

        <CardCover
          component="button"
          sx={{
            cursor: 'pointer',
            borderWidth: 0,
            ...cardCoverFlipStyle,
          }}
        >
          <Image
            src={CardBackgroundImage}
            alt="타로카드의 뒷면 이미지, 카드 뽑기를 위한 준비 상태입니다."
            draggable={false}
            onLoad={() => setImageLoaded(true)}
          />
        </CardCover>
      </Box>
    </Card>
  );
}
