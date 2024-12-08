import ThemeRegistry from '@/lib/mui/ThemeRegistry';
import QueryClientProvider from '@/lib/query/QueryClientProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import KakaoSDKInitializer from './chat/_components/KakaoSDKInializer';
import MixpanelSDKInitializer from './chat/_components/MixpanelSDKInitializer';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '타로냥 - 고양이 타로술사',
  description: '고양이 타로술사 타로냥이 당신의 질문에 답해주는 AI 타로 서비스입니다.',
  keywords: 'AI 타로, 타로냥, 고양이 타로술사, 타로, 온라인 타로, 타로 서비스, 무료 타로, 운세, 타로 리딩',
  openGraph: {
    type: 'website',
    url: 'https://tarot-nyang.vercel.app',
    title: '타로냥 - 고양이 타로술사',
    description: '고양이 타로술사 타로냥이 당신의 질문에 답해주는 AI 타로 서비스입니다.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry options={{ key: 'joy' }}>
          <QueryClientProvider>{children}</QueryClientProvider>
        </ThemeRegistry>
        <GoogleAnalytics gaId="G-P0MWP9K8K8" />
      </body>
      <MixpanelSDKInitializer />
      <KakaoSDKInitializer />
    </html>
  );
}
