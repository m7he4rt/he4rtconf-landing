if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,t)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/KaBlbkK42KwR5dk8PDHae/_buildManifest.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/KaBlbkK42KwR5dk8PDHae/_ssgManifest.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/1bfc9850-4132713d4b2c5417f0ea.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/494-486310a6659aa06fef14.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/646-b9b3cfbaa31e9951862a.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/908-be27e4de605046352f35.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/95b64a6e-fcc08947ae085f062403.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/d7eeaac4-dc97dfe7964fbdf384b1.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/main-d8f94b0b0f0397afa335.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/_app-03af3816a55e2a14e267.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/index-855519dd7e78b111412e.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/me-46537e065f4b1afef283.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/me/connect/discord-bab298face5857b01209.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/me/connect/twitch-e43fafd2c0301428b758.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/me/delete-0891858b68dc20c98d7e.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/me/logout-fee5c7f92fd9de47a770.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/pages/ticket/%5Busername%5D-8ae23b3ad5bcf4048393.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/chunks/webpack-f47d69457824065d04c3.js",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/image/src/assets/about.950dd0f75e6fb9b61498dfe252ce5cf5.png",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/_next/static/image/src/assets/logo.8b797d7a0b8482207a0558dc7d188926.svg",revision:"KaBlbkK42KwR5dk8PDHae"},{url:"/assets/Elements.svg",revision:"dcfed2c7fdc10f475b0fe9d99a3e6ca4"},{url:"/assets/hearticon.ico",revision:"83a9f9395bf19a2a773f7978e2573ae9"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
