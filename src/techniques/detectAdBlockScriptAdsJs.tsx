import {useEffect, useState} from 'react';

// From: https://github.com/Nextdoor/nextdoor.com/blob/31097b813cd668419f4a144380beb4887e237dc6/apps/nextdoor/frontend-ts/src/detectAdBlocker/detectAdBlocker.ts
//     Referenced file added from: https://github.com/Nextdoor/nextdoor.com/blob/main/static/nextdoorv2/js/ads/ads.js
export function detectAdBlockScriptAdsJs(
    adsJsAssetLink: string,
    adBlockDetectedCallback: () => void
): void {
  // // temporary, for testing:
  // setTimeout(() => {
  //   adBlockDetectedCallback();
  // }, 2500);

  const script = document.createElement('script');
  script.id = 'adsJS';
  script.onerror = () => {
    adBlockDetectedCallback();
  };
  script.src = adsJsAssetLink;
  const body = document.getElementsByTagName('body')[0];
  body && body.appendChild(script);
}

export function useDetectAdBlockScriptAdsJs(adsJsAssetLink: string): boolean {
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);
  useEffect(() => {
    detectAdBlockScriptAdsJs(adsJsAssetLink, () => {
      setAdBlockDetected(true);
    });
  });
  return adBlockDetected;
}
