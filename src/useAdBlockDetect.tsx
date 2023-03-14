import { useDetectAdBlockFetchOrXhrAdsByGoogle } from './techniques/detectAdBlockFetchOrXhrAdsByGoogle';
import { useDetectAdBlockFetchDoubleClick } from './techniques/detectAdBlockFetchDoubleClick';

// const adsJsAsset = '/public/assets/ads.js';
// const pagead2Asset = '/public/assets/pagead2.googlesyndication.com';
// const sailthruJsAsset = '/public/assets/sailthru.js';

export const useAdBlockDetect = (): boolean => {
    /*-----------------------------------\
          AdBlock Consolidated Detection
        Comment out lines below as needed:
      \-----------------------------------*/
    const multiAdBlockDetected = [
        // useDetectAdBlockScriptAdsJs(adsJsAsset),
        // useDetectAdBlockScriptSailthruJs(sailthruJsAsset),
        // useDetectAdBlockScriptAdsByGoogle(),
        useDetectAdBlockFetchOrXhrAdsByGoogle(),
        // useDetectAdBlockBaitElementOrXhrGoogle(pagead2Asset),  // we might turn this back on later
        useDetectAdBlockFetchDoubleClick(),
    ];

    // For testing:
    // useEffect(() => {
    //   console.log(`Ad Block Detection Algorithm Results:
    //   useDetectAdBlockScriptAdsJs: ${multiAdBlockDetected[0]}
    //   useDetectAdBlockScriptSailthruJs: ${multiAdBlockDetected[1]}
    //   useDetectAdBlockScriptAdsByGoogle: ${multiAdBlockDetected[2]}
    //   useDetectAdBlockFetchOrXhrAdsByGoogle ${multiAdBlockDetected[3]}
    //   useDetectAdBlockBaitElementOrXhrGoogle: ${multiAdBlockDetected[4]}
    //   useDetectAdBlockFetchDoubleClick: ${multiAdBlockDetected[5]}`);
    // }, [multiAdBlockDetected]);

    const anyAdBlockDetected = multiAdBlockDetected.some(detected => detected);
    return anyAdBlockDetected;
};
