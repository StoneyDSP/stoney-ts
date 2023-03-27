// @filename: iframe.js
const iframes = document.querySelectorAll("iframe");
for (const iframe of iframes) { if (iframe.isConnected) {} else {}; };
export { iframes };
