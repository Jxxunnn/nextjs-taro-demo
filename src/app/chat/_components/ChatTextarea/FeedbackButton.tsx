import { Button, ButtonProps } from '@mui/joy';

type FeedbackButtonProps = {
  onFeedbackClick: () => void;
} & ButtonProps;

export default function FeedbackButton({ onFeedbackClick, ...rest }: FeedbackButtonProps) {
  return (
    <>
      <Button
        type="button"
        variant="outlined"
        color="neutral"
        onClick={(event) => {
          event.stopPropagation();
          onFeedbackClick();
        }}
        {...rest}
      >
        Give us feedback 🙏
      </Button>
    </>
  );
}
