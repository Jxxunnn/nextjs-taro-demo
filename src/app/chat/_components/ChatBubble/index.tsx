import { Box, Modal, Typography } from '@mui/joy';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import BubbleTipSvg from './BubbleTipSvg';
import TypingIndicator from './TypingIndicator';

interface ChatBubbleProps {
  isSender?: boolean;
  isTyping?: boolean;
  message: string;
  imgSrc?: StaticImageData;
}

export default function ChatBubble({ isSender, isTyping, message, imgSrc }: ChatBubbleProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Box
        position="relative"
        right={isSender ? '9px' : undefined}
        paddingY="6px"
        paddingX="8px"
        bgcolor={isSender ? 'var(--joy-palette-primary-300)' : '#333333'}
        borderRadius="6px"
        sx={{
          borderTopRightRadius: isSender ? 0 : undefined,
          borderTopLeftRadius: isSender ? undefined : 0,
        }}
        display={isTyping ? 'flex' : undefined}
        alignItems={isTyping ? 'center' : undefined}
      >
        <BubbleTipSvg
          position={isSender ? 'right' : 'left'}
          fill={isSender ? 'var(--joy-palette-primary-300)' : '#333333'}
          style={{
            position: 'absolute',
            top: '-0.5px',
            left: isSender ? undefined : '-7px',
            right: isSender ? '-7px' : undefined,
          }}
        />
        {isTyping && (
          <Box display="flex" justifyContent="center" alignItems="center">
            <TypingIndicator />
          </Box>
        )}
        {!isTyping && (
          <Typography
            level="body-md"
            textColor={isSender ? '#121212' : '#ffffff'}
            sx={{
              whiteSpace: 'pre-line',
            }}
          >
            {message}
          </Typography>
        )}
        {imgSrc && (
          <>
            <Box
              sx={{
                width: { xs: '100px', sm: '200px' },
                height: { xs: '150px', sm: '300px' },
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
              }}
              onClick={() => setShowModal(true)}
            >
              <Image src={imgSrc} alt="" fill unoptimized />
            </Box>
            <Modal
              open={showModal}
              onClose={() => setShowModal(false)}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 'md',
                  boxShadow: 'lg',
                  overflow: 'hidden',
                  width: { xs: '200px', sm: '450px' },
                  height: { xs: '300px', sm: '600px' },
                }}
              >
                <Image src={imgSrc.src} alt="" fill unoptimized />
              </Box>
            </Modal>
          </>
        )}
      </Box>
    </>
  );
}
