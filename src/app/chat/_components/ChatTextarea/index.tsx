import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, Textarea } from '@mui/joy';
import { ChangeEventHandler } from 'react';
import FeedbackButton from './FeedbackButton';
import ShareKakaoTalkButton from './ShareKakaoTalkButton';
import ShareThreadsButton from './ShareThreadsButton';
import ShareXButton from './ShareXButton';

interface ChatTextareaProps {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit: () => void;
}

export default function ChatTextarea({ value, onChange, onSubmit }: ChatTextareaProps) {
  return (
    <Textarea
      autoFocus
      onKeyDown={(event) => {
        if (event.key === 'Enter' && event.shiftKey) return;

        if (event.key === 'Enter') {
          event.preventDefault();
          onSubmit();
        }
      }}
      placeholder="Type in here…"
      minRows={2}
      maxRows={4}
      value={value}
      onChange={onChange}
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
          <ShareXButton />
          <ShareThreadsButton />
          <ShareKakaoTalkButton />
          <FeedbackButton sx={{ ml: 'auto' }} />
        </Box>
      }
      endDecorator={
        <IconButton
          type="submit"
          disabled={!value}
          size="md"
          sx={{
            ml: 'auto',
            backgroundColor: 'var(--joy-palette-primary-plainColor)',
            opacity: value ? 1 : 0.5,
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
