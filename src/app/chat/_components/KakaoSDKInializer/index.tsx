'use client';

import Script from 'next/script';

export default function KakaoSDKInitializer() {
  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.3/kakao.min.js"
      integrity="sha384-kLbo2SvoNtOFiniJ1EQ9o2iDA8i3xp+O6Cns+L5cd4RsOJfl+43z5pvieT2ayq3C"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => {
        if (Kakao) {
          Kakao.init('1d5b278f150fbbaffc3a3512388b5a4d');
        }
      }}
    />
  );
}
