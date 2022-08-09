# Multivalent Adblock Detector (with TypeScript + React Hook support)

This package contains several adblock detection techniques, drawn from different sources on the internet.

## Effectivenss
This detection suite has been tested against several ad blockers:
* **uBO**: [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en)
* **uB**: [uBlock](https://chrome.google.com/webstore/detail/ublock-free-ad-blocker/epcnnfbjfcgphgdmggkamkmgojdagdnn?hl=en)
* **AB**: [AdBlock](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom)
* **ABP**: [AdBlock Plus](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb)
* **Gh.**: [Ghostery](https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij?hl=en)
* **AG**: [AdGuard](https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=en)
* **AL**: [AdLock](https://chrome.google.com/webstore/detail/adlock-adblocker-privacy/aemffjkmgcepimloclpkecifcnipnodh?hl=en)
* **PB**: [Privacy Badger](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp)
* **FA**: [Fair AdBlock](https://chrome.google.com/webstore/detail/fair-adblocker/lgblnfidahcdcjddiepkckcfdhpknnjh?hl=en)
* **ABU**: [AdBlock Ultimate](https://chrome.google.com/webstore/detail/adblocker-ultimate/ohahllgiabjaoigichmmfljhkcfikeof/related?hl=en)

The table below shows the effectiveness level of the several ad blocker detection techniques included here:
| Detection Technique  | [uBO](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) | [uB](https://chrome.google.com/webstore/detail/ublock-free-ad-blocker/epcnnfbjfcgphgdmggkamkmgojdagdnn?hl=en) | [AB](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom) | [ABP](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb) | [Gh.](https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij?hl=en) | [AG](https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=en) | [AL](https://chrome.google.com/webstore/detail/adlock-adblocker-privacy/aemffjkmgcepimloclpkecifcnipnodh?hl=en) | [PB](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) | [FA](https://chrome.google.com/webstore/detail/fair-adblocker/lgblnfidahcdcjddiepkckcfdhpknnjh?hl=en) | [ABU](https://chrome.google.com/webstore/detail/adblocker-ultimate/ohahllgiabjaoigichmmfljhkcfikeof/related?hl=en)
| ----------------------------- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| `...FetchOrXhrAdsByGoogle`    | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `...FetchDoubleClick`         | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ |✅ | ✅ | ❌ | ✅ |
| `...ScriptSailthruJs`         | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `...BaitElementOrXhrGoogle`   | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| `...ScriptAdsByGoogle`        | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| `...ScriptAdsJs`    | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

You can import one or multiple of these detection techniques for use in your project.

## Techniques

Each technique is available as a regular function, and as a React hook.

* Standard JavaScript function: `detectAdBlockFetchOrXhrAdsByGoogle`
  * React Hook variant: `useDetectAdBlockFetchOrXhrAdsByGoogle`

* Standard JavaScript function: `detectAdBlockFetchDoubleClick`
  * React Hook variant: `useDetectAdBlockFetchDoubleClick`

* Standard JavaScript function: `detectAdBlockScriptSailthruJs` – ***requires a static asset***
  * React Hook variant: `useDetectAdBlockScriptSailthruJs`

* Standard JavaScript function: `detectAdBlockBaitElementOrXhrGoogle` – ***requires a static asset***
  * React Hook variant: `useDetectAdBlockBaitElementOrXhrGoogle`

* Standard JavaScript function: `detectAdBlockScriptAdsByGoogle`
  * React Hook variant: `useDetectAdBlockScriptAdsByGoogle`

* Standard JavaScript function: `detectAdBlockScriptAdsJs` – ***requires a static asset***
  * React Hook variant: `useDetectAdBlockScriptAdsJs`

### Usage
The function variant takes a callback (of type `() => void`), which gets called/triggered if an ad blocker is detected.

The custom hook contains a `useState` which intially starts out as `false`, and eventually updates to `true` if an ad blocker (this state is returned by the custom hook).

_Note:_ there can be false positives (i.e. false detection of an ad blocker when none is present), but it is likely rare (and likely caused by an extension that does ad blocker-like things, like blocking tracking).

## LICENSE
The detection code is derived from multiple sources.

* `detectAdBlockBaitElementOrXhrGoogle`: https://github.com/wmcmurray/just-detect-adblock (**no license** information)
  * which in turn is derived from: https://github.com/sitexw/BlockAdBlock (MIT license)
* `detectAdBlockFetchDoubleClick`: https://github.com/aruniverse/adblock-detect-react/blob/master/adblock-detect-react (**no license** information)
* 3 algorithms are from: https://incolumitas.com/2020/12/27/detecting-uBlock-Origin-and-Adblock-Plus-with-JavaScript-only/ (**no license** information)
  * `detectAdBlockFetchOrXhrAdsByGoogle` (the "ultimate" solution in the article above)
    * Dervied from: https://github.com/NikolaiT/adblock-detect-javascript-only/blob/master/index.js (**no license** information)
  * `detectAdBlockScriptAdsByGoogle` (first solution in the article above)
  * `detectAdBlockScriptSailthruJs` (an update solution from May 25th 2022)
* `detectAdBlockScriptAdsJs`: an in-house solution, this might be removed soon due to low effectiveness

The wrapper code here is released under Apache 2.0.

