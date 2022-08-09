# Multivalent Adblock Detector (with optional React Hook support)

This package contains several adblock detection techniques, drawn from different sources on the internet.

The table below shows the success level of the ad blocker detection techniques included here:

| Detection Algorithm  | [uBO](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) | [AB](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom) | [uB](https://chrome.google.com/webstore/detail/ublock-free-ad-blocker/epcnnfbjfcgphgdmggkamkmgojdagdnn?hl=en) | [ABP](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb) | [Ghostery](https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij?hl=en) | [AdGuard](https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=en) | [AdLock](https://chrome.google.com/webstore/detail/adlock-adblocker-privacy/aemffjkmgcepimloclpkecifcnipnodh?hl=en) | [PB](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) | [FA](https://chrome.google.com/webstore/detail/fair-adblocker/lgblnfidahcdcjddiepkckcfdhpknnjh?hl=en) |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| `detectAdBlockScriptAdsJs` | ❌  | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `...ScriptSailthruJs` | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| `...ScriptAdsByGoogle` | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `...FetchOrXhrAdsByGoogle` | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| `...BaitElementOrXhrGoogle`  | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| `...FetchDoubleClick` | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ |✅ | ✅ | ❌ |

(uBO = [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en), AB = [AdBlock](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom), uB = [uBlock](https://chrome.google.com/webstore/detail/ublock-free-ad-blocker/epcnnfbjfcgphgdmggkamkmgojdagdnn?hl=en), ABP = [AdBlock Plus](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb), PB = [Privacy Badger](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp) SFA = [Fair AdBlock](https://chrome.google.com/webstore/detail/fair-adblocker/lgblnfidahcdcjddiepkckcfdhpknnjh?hl=en))

You can import one or multiple of these detection techniques for use in your project.

