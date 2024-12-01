import { Box, Typography } from '@mui/joy';
import BubbleTipSvg from './BubbleTipSvg';
import TypingIndicator from './TypingIndicator';

interface ChatBubbleProps {
  isSender?: boolean;
  isTyping?: boolean;
  message: string;
}

export default function ChatBubble({ isSender, isTyping, message }: ChatBubbleProps) {
  return (
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
        <Typography level="body-md" textColor={isSender ? '#121212' : '#ffffff'}>
          {message}
        </Typography>
      )}
    </Box>
  );
}
