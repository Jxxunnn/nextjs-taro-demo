import { IconButton } from '@mui/joy';

export default function ShareKakaoTalkButton() {
  const shareOnKakaoTalk = () => {
    if (!Kakao) return;
    if (!Kakao.isInitialized()) return;

    Kakao.Share.sendDefault({
      objectType: 'text',
      text: '오늘은 어떤 주제에 대한 답을 찾고 싶으신가요?\n\n궁금한 주제를 알려주시면 타로로 답을 찾아드릴게요.',
      link: {
        mobileWebUrl: location.href,
        webUrl: location.href,
      },
    });
  };

  return (
    <IconButton
      type="button"
      variant="outlined"
      color="neutral"
      onClick={(event) => {
        event.stopPropagation();
        shareOnKakaoTalk();
      }}
    >
      <svg width="16" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 10.6731C1 5.88311 5.92483 2 12 2C18.0752 2 23 5.88311 23 10.6731C23 15.4632 18.0752 19.3462 12 19.3462C11.3332 19.3462 10.6803 19.2995 10.0462 19.2097C9.41151 19.657 5.74439 22.2329 5.39831 22.2813C5.39831 22.2813 5.25637 22.3365 5.13568 22.2654C5.015 22.1943 5.03689 22.0079 5.03689 22.0079C5.07328 21.7599 5.98755 18.6027 6.15604 18.0216C3.0589 16.4872 1 13.7699 1 10.6731ZM5.28365 13.0947C5.28365 13.4289 5.56828 13.7007 5.91827 13.7007C6.26826 13.7007 6.55288 13.4289 6.55288 13.0947V9.32453H7.5431C7.88642 9.32453 8.16586 9.04572 8.16586 8.70313C8.16586 8.36055 7.88653 8.08174 7.5431 8.08174H4.29344C3.95011 8.08174 3.67067 8.36055 3.67067 8.70313C3.67067 9.04572 3.95001 9.32453 4.29344 9.32453H5.28365V13.0947ZM10.9549 13.4122C11.0159 13.585 11.2184 13.6925 11.483 13.6925C11.6222 13.6926 11.7598 13.6628 11.8864 13.605C12.0613 13.5245 12.2295 13.3025 12.0364 12.7026L10.519 8.70885C10.4119 8.40434 10.0871 8.09115 9.67255 8.08185C9.2592 8.09126 8.93438 8.40434 8.82745 8.70821L7.30945 12.7038C7.11674 13.3023 7.28491 13.5242 7.45985 13.6049C7.58646 13.6628 7.72406 13.6926 7.86326 13.6925C8.12789 13.6925 8.33023 13.5851 8.39105 13.4126L8.7055 12.5894L10.6407 12.5895L10.9549 13.4122ZM9.67308 9.66468L10.307 11.4654H9.0392L9.67308 9.66468ZM12.4495 13.0265C12.4495 13.3471 12.7223 13.6082 13.0577 13.6082H15.0937C15.4291 13.6082 15.7019 13.3471 15.7019 13.0265C15.7019 12.7058 15.4291 12.4447 15.0937 12.4447H13.7452V8.71636C13.7452 8.36637 13.4545 8.08174 13.0974 8.08174C12.7402 8.08174 12.4495 8.36637 12.4495 8.71636V13.0265ZM15.9488 13.0579C15.9488 13.4079 16.2334 13.6925 16.5834 13.6925C16.7517 13.6923 16.9131 13.6253 17.0321 13.5063C17.1511 13.3872 17.218 13.2259 17.2182 13.0575V11.6729L17.4384 11.4527L18.9267 13.4247C18.9857 13.5034 19.0622 13.5672 19.1502 13.611C19.2383 13.6548 19.3353 13.6774 19.4337 13.6769C19.5715 13.6773 19.7057 13.6323 19.8154 13.5488C19.8821 13.4988 19.9382 13.4361 19.9805 13.3643C20.0227 13.2924 20.0503 13.2129 20.0616 13.1303C20.0735 13.0478 20.0688 12.9637 20.0479 12.883C20.027 12.8023 19.9902 12.7266 19.9398 12.6602L18.3777 10.5907L19.8239 9.14472C19.9233 9.04519 19.9731 8.90801 19.9639 8.75835C19.9548 8.60995 19.8885 8.46706 19.7773 8.356C19.6581 8.2369 19.499 8.16858 19.3406 8.16858C19.2048 8.16858 19.0797 8.21871 18.9886 8.30978L17.218 10.0804V8.71636C17.218 8.36637 16.9334 8.08174 16.5834 8.08174C16.2334 8.08174 15.9488 8.36637 15.9488 8.71636V13.0579Z"
          fill="currentColor"
        />
      </svg>
    </IconButton>
  );
}
