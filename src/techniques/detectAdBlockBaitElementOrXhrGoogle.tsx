import {useEffect, useState} from 'react';

// From: https://github.com/wmcmurray/just-detect-adblock/
export function detectAdBlockBaitElementOrXhrGoogle(
    pagead2AssetLink: string,
    adBlockDetectedCallback: () => void
): void {
  // Detect if an ad blocker is blocking ads in the DOM itself
  // From: https://github.com/wmcmurray/just-detect-adblock/blob/master/src/detectDomAdblocker.js
  function detectDomAdBlocker(): boolean {
    // Create a DOM element that should be seen as an ad by adblockers
    // From: https://github.com/wmcmurray/just-detect-adblock/blob/master/src/helpers.js
    function createBaitElement(): HTMLDivElement {
      const bait = document.createElement('div');

      bait.setAttribute(
          'class',
          'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner'
      );
      bait.setAttribute(
          'style',
          'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
      );

      return bait;
    }

    // Check if a DOM element seems to be blocked by an adblocker or not
    // From: https://github.com/wmcmurray/just-detect-adblock/blob/master/src/helpers.js
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function doesElementSeemBlocked(elem: any): boolean {
      if (
          elem.offsetParent === null ||
          elem.offsetHeight === 0 ||
          elem.offsetLeft === 0 ||
          elem.offsetTop === 0 ||
          elem.offsetWidth === 0 ||
          elem.clientHeight === 0 ||
          elem.clientWidth === 0
      ) {
        return true;
      } else if (window.getComputedStyle !== undefined) {
        const elemCS = window.getComputedStyle(elem, null);
        if (
            elemCS &&
            (elemCS.getPropertyValue('display') === 'none' ||
                elemCS.getPropertyValue('visibility') === 'hidden')
        ) {
          return true;
        }
      }
      return false;
    }

    // that's a legacy Ad Block Plus check I suppose ?
    // I don't think this attribute is set anymore, but I am keeping it anyway
    if (window.document.body.getAttribute('abp') !== null) {
      return true;
    }

    // try to lure ad blockers into a trap
    const bait = createBaitElement();
    window.document.body.appendChild(bait);
    const detected = doesElementSeemBlocked(bait);
    window.document.body.removeChild(bait);

    return detected;
  }

  function isBraveBrowser(): boolean {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const braveNavigator: any = navigator;
    return (
        typeof braveNavigator.brave !== 'undefined' &&
        typeof braveNavigator.brave.isBrave !== 'undefined'
    );
  }

  function isOperaBrowser(): boolean {
    return typeof navigator.userAgent === 'string' && !!navigator.userAgent.match(/Opera|OPR\//);
  }

  // Create and execute an XMLHttpRequest that should be blocked by an adblocker
  function createBaitRequest(): Promise<XMLHttpRequest> {
    return new Promise(function(resolve: (xhr: XMLHttpRequest) => void) {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          resolve(xhr);
        }
      };

      // NOTE : it will generate traffic only when brave shields are off tho,
      // because the request is not actually sent when the url is being blocked
      xhr.open('GET', pagead2AssetLink, true);
      xhr.send();
    });
  }

  // From: https://github.com/wmcmurray/just-detect-adblock/blob/master/src/helpers.js
  function isBaitBlockedByBrave(xhr: XMLHttpRequest): boolean {
    // NOTE : brave seems to let blocked requests return a valid HTTP status code,
    // but the content returned is empty, so we check if we see the content that we know is in our bait file
    return xhr.status === 200 && !xhr.responseText.match(/^thistextshouldbethere(\n|)$/);
  }

  // From: https://github.com/wmcmurray/just-detect-adblock/blob/master/src/helpers.js
  function isBaitBlockedByOpera(xhr: XMLHttpRequest): boolean {
    // NOTE : opera seems to set the HTTP status code to 0
    // and empty content, so we check if we see the content that we know is in our bait file
    return xhr.status === 0 && !xhr.responseText.match(/^thistextshouldbethere(\n|)$/);
  }

  // Detect if any ad blocker mechanism is detected
  // From: https://github.com/wmcmurray/just-detect-adblock/blob/master/src/detectAnyAdblocker.js
  if (detectDomAdBlocker()) {
    adBlockDetectedCallback();
  } else {
    if (isBraveBrowser() || isOperaBrowser()) {
      createBaitRequest().then(function(xhr: XMLHttpRequest) {
        if (isBraveBrowser() && isBaitBlockedByBrave(xhr)) {
          adBlockDetectedCallback();
        }
        if (isOperaBrowser() && isBaitBlockedByOpera(xhr)) {
          adBlockDetectedCallback();
        }
      });
    }
  }
}

export function useDetectAdBlockBaitElementOrXhrGoogle(pagead2AssetLink: string): boolean {
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);
  useEffect(() => {
    detectAdBlockBaitElementOrXhrGoogle(pagead2AssetLink, () => {
      setAdBlockDetected(true);
    });
  });
  return adBlockDetected;
}
