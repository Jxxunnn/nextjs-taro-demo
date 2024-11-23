import { Box, Typography } from '@mui/joy';
import BubbleTipSvg from './BubbleTipSvg';

interface ChatBubbleProps {
  isSender?: boolean;
  message: string;
}

export default function ChatBubble({ isSender, message }: ChatBubbleProps) {
  return (
    <Box
      position="relative"
      right={isSender ? '9px' : undefined}
      paddingY="6px"
      paddingX="8px"
      bgcolor={isSender ? '#007AFF' : '#F2F2F7'}
      borderRadius="6px"
      sx={{
        borderTopRightRadius: isSender ? 0 : undefined,
        borderTopLeftRadius: isSender ? undefined : 0,
      }}
    >
      <BubbleTipSvg
        position={isSender ? 'right' : 'left'}
        fill={isSender ? '#007AFF' : '#F2F2F7'}
        style={{
          position: 'absolute',
          top: '-0.5px',
          left: isSender ? undefined : '-7px',
          right: isSender ? '-7px' : undefined,
        }}
      />
      <Typography level="body-md" textColor={isSender ? '#ffffff' : '#2C2C2E'}>
        {message}
      </Typography>
    </Box>
  );
}
