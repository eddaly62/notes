!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.841e456fdfe9b996f90fd56954bfea8d.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.95ee0a42f05bb05565f71d826186fb74.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.eed6dd4035d96db3e07615c1e3684f55.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.300fd7523e7f201aab427c2273b6ebdc.js",a.body.appendChild(c)}();