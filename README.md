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

The table below shows the success level of the ad blocker detection techniques included here.

| Detection Algorithm  | [uBO](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) | [uB](https://chrome.google.com/webstore/detail/ublock-free-ad-blocker/epcnnfbjfcgphgdmggkamkmgojdagdnn?hl=en) | [AB](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom) | [ABP](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb) | [Gh.](https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij?hl=en) | [AG](https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=en) | [AL](https://chrome.google.com/webstore/detail/adlock-adblocker-privacy/aemffjkmgcepimloclpkecifcnipnodh?hl=en) | [PB](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) | [FA](https://chrome.google.com/webstore/detail/fair-adblocker/lgblnfidahcdcjddiepkckcfdhpknnjh?hl=en) | [ABU](https://chrome.google.com/webstore/detail/adblocker-ultimate/ohahllgiabjaoigichmmfljhkcfikeof/related?hl=en)
| ----------------------------- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| `detectAdBlockScriptAdsJs`    | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `...ScriptSailthruJs`         | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `...ScriptAdsByGoogle`        | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| `...FetchOrXhrAdsByGoogle`    | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `...BaitElementOrXhrGoogle`   | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| `...FetchDoubleClick`         | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ |✅ | ✅ | ❌ | ✅ |

You can import one or multiple of these detection techniques for use in your project.

