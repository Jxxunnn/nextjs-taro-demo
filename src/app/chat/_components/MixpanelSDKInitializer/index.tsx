'use client';

import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

export default function MixpanelSDKInitializer() {
  useEffect(() => {
    mixpanel.init('68379cf6b181d58fd3d90ab34968ec64', {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
      record_sessions_percent: 100,
    });
  }, []);

  return <></>;
}
