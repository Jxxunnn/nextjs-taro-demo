import { Button, ButtonProps, FormHelperText, Textarea, Typography } from '@mui/joy';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSendFeedbackMutation } from '../../_service/query';

type FeedbackButtonProps = ButtonProps;

export default function FeedbackButton(props: FeedbackButtonProps) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { mutate } = useSendFeedbackMutation();

  return (
    <>
      <Button
        type="button"
        variant="outlined"
        color="neutral"
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
        {...props}
      >
        Give us feedback 🙏
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog sx={{ p: 3, width: 400 }}>
          <DialogTitle>피드백을 주세요 🙏</DialogTitle>
          <DialogContent>여러분의 소중한 피드백을 자유롭게 적어주세요.</DialogContent>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={3}>
              <FormControl>
                <FormLabel>피드백</FormLabel>
                <Textarea
                  minRows={3}
                  sx={{ marginBottom: 2 }}
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  endDecorator={
                    <Typography level="body-xs" sx={{ ml: 'auto' }}>
                      {text.length}자
                    </Typography>
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>이메일 (선택사항)</FormLabel>
                <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormHelperText>정식 버전 출시 시 알림을 받으려면 이메일을 남겨주세요.</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>전화번호 (선택사항)</FormLabel>
                <Input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <FormHelperText>정식 버전 출시 시 알림을 받으려면 전화번호를 남겨주세요.</FormHelperText>
              </FormControl>
              <Button
                type="submit"
                color="primary"
                sx={{ marginTop: 2, width: '100%' }}
                onClick={() => {
                  mutate(
                    { feedback: text, email, phone },
                    {
                      onSuccess: () => {
                        setText('');
                        setEmail('');
                        setPhone('');
                        toast.success('피드백이 성공적으로 전송되었어요. 감사합니다!🙏');
                      },
                      onSettled: () => setOpen(false),
                      onError: (error) => {
                        toast.error('피드백을 전송하는 중 오류가 발생했어요. 다시 시도해주세요.');
                      },
                    }
                  );
                }}
              >
                제출
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      <Toaster />
    </>
  );
}
