import { IconButton } from '@mui/joy';

export default function ShareXButton() {
  const shareOnX = () => {
    const open = `https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(
      '오늘은 어떤 주제에 대한 답을 찾고 싶으신가요?\n\n궁금한 주제를 알려주시면 타로로 답을 찾아드릴게요.'
    )}&hashtags=${encodeURIComponent(['타로', '운세', 'AI'].join(','))}`;
    window.open(open, 'pop', 'width=600,height=400');
  };

  return (
    <IconButton
      variant="outlined"
      color="neutral"
      onClick={(event) => {
        event.stopPropagation();
        shareOnX();
      }}
    >
      <svg width="16" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.77091 12.7755L3.34208 19.9989H6.18998L11.1108 14.4552L15.4468 20L21 19.9702L13.9594 10.8056L19.9677 4.03085L17.1655 4L12.6271 9.09141L8.74414 4.00831L3 4.00218L9.77091 12.7755ZM17.6368 18.3361L16.1997 18.3317L6.3261 5.60758H7.87196L17.6368 18.3361Z"
          fill="#141415"
        />
      </svg>
    </IconButton>
  );
}
