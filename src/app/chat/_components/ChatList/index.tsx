import { Box, Stack } from '@mui/joy';
import { StaticImageData } from 'next/image';
import ChatMessage from '../ChatMessage';

export interface ChatMessage {
  id: number;
  message: string;
  isSender: boolean;
  isTyping?: boolean;
  imgSrc?: StaticImageData;
}

interface ChatListProps {
  chatList: ChatMessage[];
}
export default function ChatList({ chatList }: ChatListProps) {
  return (
    <Stack>
      {chatList.map((chat, index) =>
        chat.isSender ? (
          <Box
            key={chat.id}
            alignSelf="flex-end"
            maxWidth={{
              xs: '85%',
              sm: '75%',
            }}
            width="fit-content"
            marginTop={index > 0 && chatList[index - 1].isSender === chat.isSender ? '6px' : '12px'}
          >
            <ChatMessage isSender message={chat.message} />
          </Box>
        ) : (
          <Box
            key={chat.id}
            maxWidth={{
              xs: '85%',
              sm: '75%',
            }}
            width="fit-content"
            marginTop={index > 0 && chatList[index - 1].isSender === chat.isSender ? '6px' : '12px'}
          >
            <ChatMessage message={chat.message} imgSrc={chat.imgSrc} />
          </Box>
        )
      )}
    </Stack>
  );
}
