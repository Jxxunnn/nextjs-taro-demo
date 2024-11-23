import { ComponentProps } from 'react';

interface BubbleTipSvgProps extends ComponentProps<'svg'> {
  position: 'left' | 'right';
}

export default function BubbleTipSvg({ position, style, ...restProps }: BubbleTipSvgProps) {
  return (
    <svg
      width="9"
      height="11"
      viewBox="0 0 9 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...style,
        transform: position === 'left' ? undefined : 'scaleX(-1)',
      }}
      {...restProps}
    >
      <path
        d="M8.36243 0.485352C8.36243 0.485352 3.36851 0.485352 2.09604 0.485352C0.823561 0.485352 0.529459 1.79085 1.70441 3.09635C2.87935 4.40185 7.92782 8.75352 8.36243 10.059C8.79705 11.3645 8.36243 0.485352 8.36243 0.485352Z"
        fill="current"
      />
    </svg>
  );
}
