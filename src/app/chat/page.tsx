'use client';

import theme from '@/lib/mui/theme';
import { Box, DialogContent, DialogTitle, Modal, ModalDialog, Stack } from '@mui/joy';

import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from 'react';
import ChatList, { ChatMessage } from './_components/ChatList';
import ChatTextarea from './_components/ChatTextarea';
import TarotDeck from './_components/TarotDeck';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [chatList, setChatList] = useState<ChatMessage[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [drawingCard, setDrawingCard] = useState(false);

  useEffect(function sendDelayedWelcomeMessage() {
    const timer = setTimeout(() => {
      setChatList([
        {
          id: 0,
          message: '오늘은 어떤 주제에 대한 답을 찾고 싶으신가요?',
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

    await delay(1500);
    addChatMessage('음, 잘 들었습니다.', false);

    await delay(2000);
    addChatMessage('타로 카드가 당신의 질문에 답을 줄 거예요. 카드를 뽑아보시겠어요?', false);

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
        <ModalDialog>
          <DialogTitle>타로 카드 뽑기</DialogTitle>
          <DialogContent>
            <TarotDeck />
          </DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
}
