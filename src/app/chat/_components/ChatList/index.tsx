import { Box, Stack } from '@mui/joy';
import { useEffect, useState } from 'react';
import ChatMessage from '../ChatMessage';

interface ChatMessage {
  id: number;
  message: string;
  isSender: boolean;
}

export default function ChatList() {
  const [chatList, setChatList] = useState<ChatMessage[]>([]);

  useEffect(function sendDelayedWelcomeMessage() {
    const timer = setTimeout(() => {
      setChatList((prev) => [
        {
          id: 0,
          message: '오늘은 어떤 주제에 대한 답을 찾고 싶으신가요?',
          isSender: false,
        },
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack gap="12px">
      {chatList.map((chat) =>
        chat.isSender ? (
          <Box key={chat.id} alignSelf="flex-end" maxWidth="40%" width="fit-content">
            <ChatMessage isSender message={chat.message} />
          </Box>
        ) : (
          <Box key={chat.id} maxWidth="40%" width="fit-content">
            <ChatMessage message={chat.message} />
          </Box>
        )
      )}
    </Stack>
  );
}
