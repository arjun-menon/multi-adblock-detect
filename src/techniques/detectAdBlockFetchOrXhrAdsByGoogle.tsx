import {useEffect, useState} from 'react';

// From: https://incolumitas.com/2020/12/27/detecting-uBlock-Origin-and-Adblock-Plus-with-JavaScript-only/
//     Section: "The ultimate solution: Making a request to a non-existent baiting resource"
export function detectAdBlockFetchOrXhrAdsByGoogle(adBlockDetectedCallback: () => void): void {
  const flaggedURL = '/pagead/js/adsbygoogle.js';
  if (window.fetch !== undefined) {
    const request = new Request(flaggedURL, {
      method: 'HEAD',
      mode: 'no-cors',
    });
    fetch(request)
      .then(function() {
        // Skip.
      })
      .catch(function() {
        adBlockDetectedCallback();
      });
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', flaggedURL, false);
    try {
      xhr.send();
    } catch (err) {
      // Ignore.
    }
  }
}

export function useDetectAdBlockFetchOrXhrAdsByGoogle(): boolean {
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);
  useEffect(() => {
    detectAdBlockFetchOrXhrAdsByGoogle(() => {
      setAdBlockDetected(true);
    });
  });
  return adBlockDetected;
}
