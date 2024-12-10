'use client';

import theme from '@/lib/mui/theme';
import { Box, CircularProgress, Link, Modal, Stack, Typography } from '@mui/joy';

import { keyframes } from '@mui/system';
import { StaticImageData } from 'next/image';
import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from 'react';
import ChatList, { ChatMessage } from './_components/ChatList';
import ChatTextarea from './_components/ChatTextarea';
import FeedbackModal from './_components/FeedbackModal';
import TaroDeck from './_components/TaroDeck';
import taroDeckData from './_data/tarot';
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
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);

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
  const addChatMessage = ({
    message,
    isSender,
    imgSrc,
  }: {
    message: string;
    isSender: boolean;
    imgSrc?: StaticImageData;
  }) => {
    setChatList((prevChatList) => [
      ...prevChatList,
      {
        id: prevChatList.length,
        message,
        isSender,
        imgSrc,
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
    if (answeredCount === 2) {
      setOpenFeedbackModal(true);
      return;
    }
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
            onFeedbackClick={() => {
              setOpenFeedbackModal(true);
            }}
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
              addChatMessage({
                message: '',
                isSender: false,
                imgSrc: taroDeckData.find((card) => card.id === cardId)?.imgSrc,
              });
              mutate(
                { question_message: chatList.filter((chat) => chat.isSender).slice(-1)[0].message, card: cardId },
                {
                  onSuccess: async (data) => {
                    addChatMessage({ message: data.answer_message, isSender: false });

                    await delay(2000);
                    addChatMessage({ message: '더 궁금한 게 있다면 뭐든 물어봐냥!✨', isSender: false });
                  },
                  onSettled: () => {
                    setDrawingCard(false);
                  },
                  onError: (error) => {
                    addChatMessage({ message: '오류가 발생했다냥! 다시 시도해봐냥.', isSender: false });
                  },
                }
              );
              setAnsweredCount((prev) => prev + 1);
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              padding: 2,
              fontSize: '0.875rem',
              bottom: 0,
            }}
          >
            <Typography
              sx={{
                display: {
                  xs: 'none',
                  md: 'block',
                },
              }}
            >
              Image © Ashley Lim, licensed under CC BY 4.0 |{' '}
              <Link
                href="https://www.figma.com/community/file/1276447799586098149/78-tarot-cards"
                target="_blank"
                sx={{ color: 'primary.main' }}
              >
                Tarot Cards on Figma
              </Link>
            </Typography>
            <Typography
              level="body-xs"
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
                flexDirection: 'column',
              }}
            >
              Image © Ashley Lim, licensed under CC BY 4.0
              <Link
                href="https://www.figma.com/community/file/1276447799586098149/78-tarot-cards"
                target="_blank"
                sx={{ color: 'primary.main' }}
              >
                Tarot Cards on Figma
              </Link>
            </Typography>
          </Box>
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
      <FeedbackModal
        open={openFeedbackModal}
        onClose={() => {
          setOpenFeedbackModal(false);
          if (answeredCount === 2) {
            setAnsweredCount(3);
          }
        }}
        disableCloseAction={answeredCount === 2}
      />
    </>
  );
}
