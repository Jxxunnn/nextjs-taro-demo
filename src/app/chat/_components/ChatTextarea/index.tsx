import SendIcon from '@mui/icons-material/Send';
import { Box, Button, IconButton, Textarea } from '@mui/joy';
import { useState } from 'react';

export default function ChatTextarea() {
  const [message, setMessage] = useState('');

  return (
    <Textarea
      placeholder="Type in here…"
      required
      minRows={2}
      maxRows={4}
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      sx={{
        '--Textarea-focusedInset': 'var(--any, )',
        '--Textarea-focusedThickness': '0.25rem',
        '--Textarea-focusedHighlight': 'rgba(13,110,253,.25)',
        '&::before': {
          transition: 'box-shadow .15s ease-in-out',
        },
        '&:focus-within': {
          borderColor: '#86b7fe',
        },
      }}
      startDecorator={
        <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
          <IconButton variant="outlined" color="neutral">
            👍
          </IconButton>
          <IconButton variant="outlined" color="neutral">
            🏖
          </IconButton>
          <IconButton variant="outlined" color="neutral">
            😍
          </IconButton>
          <Button variant="outlined" color="neutral" sx={{ ml: 'auto' }}>
            Give us feedback 🙏
          </Button>
        </Box>
      }
      endDecorator={
        <IconButton
          size="md"
          sx={{
            ml: 'auto',
            backgroundColor: 'var(--joy-palette-primary-plainColor)',
            '&:hover': {
              opacity: 0.8,
              backgroundColor: 'var(--joy-palette-primary-plainColor)',
            },
          }}
        >
          <SendIcon htmlColor="#ffffff" />
        </IconButton>
      }
    />
  );
}
