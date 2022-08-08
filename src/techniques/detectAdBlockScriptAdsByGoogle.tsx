import {useEffect, useState} from 'react';

// From: https://incolumitas.com/2020/12/27/detecting-uBlock-Origin-and-Adblock-Plus-with-JavaScript-only/
//     Section: "A first solution: Dynamically creating a <script> tag"
export function detectAdBlockScriptAdsByGoogle(adBlockDetectedCallback: () => void): void {
  const badURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  const script = document.createElement('script');

  script.onload = function() {
    // delete script node
    script.parentNode?.removeChild(script);
  };

  script.onerror = function() {
    adBlockDetectedCallback();
  };

  script.src = badURL;
  document.body.appendChild(script);
}

export function useDetectAdBlockScriptAdsByGoogle(): boolean {
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);
  useEffect(() => {
    detectAdBlockScriptAdsByGoogle(() => {
      setAdBlockDetected(true);
    });
  });
  return adBlockDetected;
}
