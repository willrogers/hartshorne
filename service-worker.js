!function(){"use strict";const e=1612700725263,t="cache"+e,s=["client/thehouse.0fb36a07.js","client/index.b91fcab3.js","client/contact.930ae4fb.js","client/history.a526ec8d.js","client/events.8c8cfc6b.js","client/gallery.90194e41.js","client/[slug].d1ae071e.js","client/index.f58c0216.js","client/client.30c1a1ae.js"].concat(["service-worker-index.html","Hartshorne_church.jpg","dark.jpg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","snow1.jpg","snow2.jpg"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();
