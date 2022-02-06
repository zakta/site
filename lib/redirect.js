import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from './languageDetector';

export const useRedirect = (to) => {
  const router = useRouter();
  const go = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();

    if (go.startsWith(`/${detectedLng}`) && router.route === '/404') { // prevent endless loop
      router.replace(`/${detectedLng}${router.route}`);

      return;
    }

    languageDetector.cache(detectedLng);

    router.replace(`/${detectedLng}${go}`);
  });

  return <div />;
};

export function Redirect() {
  useRedirect();

  return <div />;
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to) => function () {
  useRedirect(to);

  return <div />;
};
