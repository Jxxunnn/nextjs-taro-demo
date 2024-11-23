import { keyframes } from '@emotion/react';
import { Box } from '@mui/joy';

const typingAnimation = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export default function TypingIndicator() {
  return (
    <Box display="flex" gap={1}>
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#B0B0B0',
          animation: `${typingAnimation} 1.2s infinite ease-in-out`,
          animationDelay: '0s',
        }}
      />
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#A1A1A1',
          animation: `${typingAnimation} 1.2s infinite ease-in-out`,
          animationDelay: '0.2s',
        }}
      />
      {/* 세 번째 점 */}
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#D3D3D3',
          animation: `${typingAnimation} 1.2s infinite ease-in-out`,
          animationDelay: '0.4s',
        }}
      />
    </Box>
  );
}
