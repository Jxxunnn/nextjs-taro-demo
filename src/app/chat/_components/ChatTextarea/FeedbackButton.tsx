import { Button, ButtonProps, Textarea } from '@mui/joy';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import { useState } from 'react';

type FeedbackButtonProps = ButtonProps;

export default function FeedbackButton(props: FeedbackButtonProps) {
  const [open, setOpen] = useState(false);

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
        <ModalDialog>
          <DialogTitle>Give us feedback 🙏</DialogTitle>
          <DialogContent>Feel free to write your feedback.</DialogContent>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Feedback</FormLabel>
                <Textarea minRows={2} />
              </FormControl>
              <FormControl>
                <FormLabel>Email (option)</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number (option)</FormLabel>
                <Input />
              </FormControl>
              <Button
                type="submit"
                onClick={() => {
                  alert('제출 완료');
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
