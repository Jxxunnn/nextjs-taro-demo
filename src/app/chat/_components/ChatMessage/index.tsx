import { Avatar, Stack } from '@mui/joy';
import ChatBubble from '../ChatBubble';
interface ChatMessageProps {
  isSender?: boolean;
  message: string;
  markdown?: string;
}
export default function ChatMessage({ isSender, message, markdown }: ChatMessageProps) {
  return (
    <>
      {isSender ? (
        <ChatBubble isSender message={message} />
      ) : (
        <Stack direction="row" gap="16px">
          <Avatar size="sm" />
          <ChatBubble message={message} markdown={markdown} />
        </Stack>
      )}
    </>
  );
}
