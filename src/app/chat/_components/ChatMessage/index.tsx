import ChatBotProfile from '@/app/chat/_data/tarot/images/chatbot-profile.webp';
import { Avatar, Box, Modal, Stack } from '@mui/joy';
import Image from 'next/image';
import { useState } from 'react';
import ChatBubble from '../ChatBubble';
interface ChatMessageProps {
  isSender?: boolean;
  message: string;
}
export default function ChatMessage({ isSender, message }: ChatMessageProps) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <>
      {isSender ? (
        <ChatBubble isSender message={message} />
      ) : (
        <Stack direction="row" gap="16px">
          <Avatar size="sm" src={ChatBotProfile.src} onClick={() => setShowProfileModal(true)} />
          <ChatBubble message={message} />
        </Stack>
      )}
      <Modal
        open={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ borderRadius: 'md', boxShadow: 'lg', overflow: 'hidden', width: 300, height: 300 }}>
          <Image src={ChatBotProfile} alt="Chatbot profile" width={300} height={300} />
        </Box>
      </Modal>
    </>
  );
}
