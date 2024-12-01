'use client';

import theme from '@/lib/mui/theme';
import { Box, CircularProgress, Modal, Stack, Typography } from '@mui/joy';

import { keyframes } from '@mui/system';
import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from 'react';
import ChatList, { ChatMessage } from './_components/ChatList';
import ChatTextarea from './_components/ChatTextarea';
import TaroDeck from './_components/TaroDeck';
import { useSendQuestionMutation } from './_service/query';

const shimmer = keyframes`
  0% { color: #ff80ab;  }
  50% { color: #b388ff;  }
  100% { color: #ff80ab; }
`;

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [chatList, setChatList] = useState<ChatMessage[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [drawingCard, setDrawingCard] = useState(false);
  const { mutate, isLoading } = useSendQuestionMutation();

  useEffect(function sendDelayedWelcomeMessage() {
    const timer = setTimeout(() => {
      setChatList([
        {
          id: 0,
          message: '반갑다냥! 고양이 타로술사 타로냥이다냥. 궁금한 게 있다면 뭐든 물어봐냥!✨',
          isSender: false,
        },
      ]);
      textareaRef.current?.focus();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const addChatMessage = (message: string, isSender: boolean) => {
    setChatList((prevChatList) => [
      ...prevChatList,
      {
        id: prevChatList.length,
        message,
        isSender,
      },
    ]);
  };

  const submit = async () => {
    if (!message || chatList.length === 0) return;

    setChatList((prevChatList) => [
      ...prevChatList,
      {
        id: prevChatList.length,
        message,
        isSender: true,
      },
    ]);

    setMessage('');

    await delay(2000);
    setDrawingCard(true);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    submit();
  };

  const handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Stack flex={1} paddingBottom="32px" height={'100%'}>
        <Box flex={1} paddingTop="32px" width="100%" overflow="auto">
          <Box
            maxWidth={theme.breakpoints.values.md}
            marginX="auto"
            paddingBottom="32px"
            paddingX={{
              xs: '16px',
              md: '32px',
            }}
          >
            <ChatList chatList={chatList} />
          </Box>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          maxWidth={theme.breakpoints.values.md}
          marginX="auto"
          width={'100%'}
          paddingRight={{
            xs: '16px',
            md: '32px',
          }}
          paddingLeft={{
            xs: '16px',
            md: '72px',
          }}
        >
          <ChatTextarea
            value={message}
            onChange={handleTextareaChange}
            onSubmit={submit}
            textareaRef={textareaRef}
            disabled={drawingCard}
          />
        </Box>
      </Stack>
      <Modal open={drawingCard}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100%" flexDirection="column">
          <Typography
            display={{
              xs: 'none',
              md: 'block',
            }}
            level="h2"
            sx={{
              animation: `${shimmer} 2s infinite`,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            마음에 드는 카드를 한 장 골라봐냥!
          </Typography>
          <Typography
            display={{
              xs: 'block',
              md: 'none',
            }}
            level="h4"
            sx={{
              animation: `${shimmer} 2s infinite`,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            마음에 드는 카드를 한 장 골라봐냥!
          </Typography>
          <TaroDeck
            onCardSelect={(cardId) => {
              mutate(
                { question_message: chatList.filter((chat) => chat.isSender).slice(-1)[0].message, card: cardId },
                {
                  onSuccess: (data) => {
                    addChatMessage(data.answer_message, false);
                  },
                  onSettled: () => {
                    setDrawingCard(false);
                  },
                  onError: (error) => {
                    addChatMessage('오류가 발생했다냥! 다시 시도해봐냥.', false);
                  },
                }
              );
            }}
          />
        </Box>
      </Modal>
      <Modal open={isLoading} slotProps={{ backdrop: { sx: { backdropFilter: 'unset' } } }}>
        <Box
          display="grid"
          sx={{
            placeItems: 'center',
            height: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      </Modal>
    </>
  );
}
