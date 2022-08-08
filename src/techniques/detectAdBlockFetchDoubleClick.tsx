import {useEffect, useState} from 'react';

// From: https://github.com/aruniverse/adblock-detect-react/blob/master/adblock-detect-react/src/hooks/useDetectAdBlock.ts
export function detectAdBlockFetchDoubleClick(adBlockDetectedCallback: () => void): void {
  // grab a domain from https://github1s.com/gorhill/uBlock/blob/master/docs/tests/hostname-pool.js
  const url = 'https://www3.doubleclick.net';
  fetch(url, {
    method: 'HEAD',
    mode: 'no-cors',
    cache: 'no-store',
  }).catch(() => {
    adBlockDetectedCallback();
  });
}

export const useDetectAdBlockFetchDoubleClick = (): boolean => {
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);
  useEffect(() => {
    detectAdBlockFetchDoubleClick(() => {
      setAdBlockDetected(true);
    });
  });
  return adBlockDetected;
};
