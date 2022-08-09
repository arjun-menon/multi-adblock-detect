# Multivalent Adblock Detector (with optional React Hook support)

This package contains several adblock detection techniques, drawn from different sources on the internet.

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

The table below shows the effectiveness level of the ad blocker detection techniques included here.

| Detection Algorithm  | [uBO](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) | [uB](https://chrome.google.com/webstore/detail/ublock-free-ad-blocker/epcnnfbjfcgphgdmggkamkmgojdagdnn?hl=en) | [AB](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom) | [ABP](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb) | [Gh.](https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij?hl=en) | [AG](https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=en) | [AL](https://chrome.google.com/webstore/detail/adlock-adblocker-privacy/aemffjkmgcepimloclpkecifcnipnodh?hl=en) | [PB](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) | [FA](https://chrome.google.com/webstore/detail/fair-adblocker/lgblnfidahcdcjddiepkckcfdhpknnjh?hl=en) | [ABU](https://chrome.google.com/webstore/detail/adblocker-ultimate/ohahllgiabjaoigichmmfljhkcfikeof/related?hl=en)
| ----------------------------- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| `...FetchOrXhrAdsByGoogle`    | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `...FetchDoubleClick`         | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ |✅ | ✅ | ❌ | ✅ |
| `...ScriptSailthruJs`         | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `...BaitElementOrXhrGoogle`   | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| `...ScriptAdsByGoogle`        | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| `detectAdBlockScriptAdsJs`    | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |


You can import one or multiple of these detection techniques for use in your project.

## LICENSE
The detection code is derived from multiple sources.

* `detectAdBlockBaitElementOrXhrGoogle`: https://github.com/wmcmurray/just-detect-adblock
  * which in turn is derived from: https://github.com/sitexw/BlockAdBlock
* `detectAdBlockFetchDoubleClick`: https://github.com/aruniverse/adblock-detect-react/blob/master/adblock-detect-react
* 3 algorithms are from: https://incolumitas.com/2020/12/27/detecting-uBlock-Origin-and-Adblock-Plus-with-JavaScript-only/
  * `detectAdBlockFetchOrXhrAdsByGoogle` (the "ultimate" solution in the article above)
    * Dervied from: https://github.com/NikolaiT/adblock-detect-javascript-only/blob/master/index.js
  * `detectAdBlockScriptAdsByGoogle` (first solution in the article above)
  * `detectAdBlockScriptSailthruJs` (an update solution from May 25th 2022)
* `detectAdBlockScriptAdsJs`: an in-house solution, this might be removed soon due to low effectiveness

The wrapper code here is released under Apache 2.0.

