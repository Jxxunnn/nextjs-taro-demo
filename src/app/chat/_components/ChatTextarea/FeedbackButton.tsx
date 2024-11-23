import { Button, ButtonProps } from '@mui/joy';

interface FeedbackButtonProps extends ButtonProps {}

export default function FeedbackButton(props: FeedbackButtonProps) {
  return (
    <Button
      type="button"
      variant="outlined"
      color="neutral"
      onClick={(event) => {
        event.stopPropagation();
        alert('구글폼 만들면 연동해야지');
      }}
      {...props}
    >
      Give us feedback 🙏
    </Button>
  );
}
