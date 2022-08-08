import {useEffect, useState} from 'react';

// From: https://incolumitas.com/2020/12/27/detecting-uBlock-Origin-and-Adblock-Plus-with-JavaScript-only/
//     Section: "Update Adblock Detection on May 25th 2022"
export function detectAdBlockScriptSailthruJs(
    sailthruJsAssetLink: string,
    adBlockDetectedCallback: () => void
): void {
  const script = document.createElement('script');

  script.onload = function() {
    if (!document.getElementById('ybVg4vsBhs')) {
      adBlockDetectedCallback();
    }
  };

  script.onerror = function() {
    adBlockDetectedCallback();
  };

  script.src = sailthruJsAssetLink;
  document.body.appendChild(script);
}

export function useDetectAdBlockScriptSailthruJs(sailthruJsAssetLink: string): boolean {
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);
  useEffect(() => {
    detectAdBlockScriptSailthruJs(sailthruJsAssetLink, () => {
      setAdBlockDetected(true);
    });
  });
  return adBlockDetected;
}
