import { Box, Sheet } from '@mui/joy';
import { ReactNode } from 'react';

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <Sheet
      component="section"
      sx={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box height={'100%'} display="flex" flexDirection="column" flex={1}>
        {children}
      </Box>
    </Sheet>
  );
}
