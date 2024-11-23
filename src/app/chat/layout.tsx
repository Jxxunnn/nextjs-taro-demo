import theme from '@/lib/mui/theme';
import { Box } from '@mui/joy';
import { ReactNode } from 'react';

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <Box component="section" minHeight="100dvh" display="flex" flexDirection="column">
      <Box flex={1} width="100%" maxWidth={theme.breakpoints.values.md} marginX="auto">
        {children}
      </Box>
    </Box>
  );
}
