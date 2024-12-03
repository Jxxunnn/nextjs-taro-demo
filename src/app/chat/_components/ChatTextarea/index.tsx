import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, Textarea, TextareaProps } from '@mui/joy';
import { ChangeEventHandler, RefObject, useState } from 'react';
import FeedbackButton from './FeedbackButton';
import ShareKakaoTalkButton from './ShareKakaoTalkButton';
import ShareThreadsButton from './ShareThreadsButton';
import ShareXButton from './ShareXButton';

interface ChatTextareaProps extends TextareaProps {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit: () => void;
  textareaRef: RefObject<HTMLTextAreaElement>;
  disabled: boolean;
  onFeedbackClick: () => void;
}

export default function ChatTextarea({
  value,
  onChange,
  onSubmit,
  textareaRef,
  disabled,
  onFeedbackClick,
}: ChatTextareaProps) {
  const [isComposing, setIsComposing] = useState(false);

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  return (
    <Textarea
      disabled={disabled}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && event.shiftKey) return;

        if (event.key === 'Enter' && !isComposing) {
          event.preventDefault();
          onSubmit();
        }
      }}
      placeholder="Type in here…"
      minRows={2}
      maxRows={4}
      value={value}
      onChange={onChange}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      startDecorator={
        <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
          <ShareXButton />
          <ShareThreadsButton />
          <ShareKakaoTalkButton />
          <FeedbackButton onFeedbackClick={onFeedbackClick} sx={{ ml: 'auto' }} />
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
      slotProps={{
        textarea: {
          ref: textareaRef,
        },
      }}
    />
  );
}
