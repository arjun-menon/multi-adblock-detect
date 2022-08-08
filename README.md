# Multivalent Adblock Detector (with optional React Hook support)

This package contains several adblock detection techniques, drawn from different sources on the internet.

The table below shows the success level of the ad blocker detection techniques included here:

| Detection Algorithm  | uBO | AdBlock | uB | ABP | Ghostery | AdGuard | AdLock | Privacy Badger | Stands Fair AdBlock |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| detectAdBlockScriptAdsJs | ❌  | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| detectAdBlockScriptSailthruJs | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| detectAdBlockScriptAdsByGoogle | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| detectAdBlockFetchOrXhrAdsByGoogle | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| detectAdBlockBaitElementOrXhrGoogle  | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| detectAdBlockFetchDoubleClick | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ |✅ | ✅ | ❌ |

(uBO = uBlock Origin, uB = uBlock, ABP = AdBlock Plus)

You can import one or multiple of these detection techniques for use in your project.

