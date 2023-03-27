// @filename: elements.js

/* <p>: HTMLParagraphElement */
import { paragraphs } from "./p/p";
for (const paragraph of paragraphs) { if (paragraph.isConnected) {}; };
export { paragraphs };

/* <a>: HTMLAnchorElement */
import { anchors } from "./a/a";
for (const anchor of anchors) { if (anchor.isConnected) {}; };
export { anchors };

/* <img>: HTMLImageElement */
import { imgs } from "./img/img";
for (const img of imgs) { if (img.isConnected) {}; };
export { imgs };

/* <iframe>: HTMLIframeElement */
import { iframes } from "./iframe/iframe";
for (const iframe of iframes) { if (iframe.isConnected) {}; };
export { iframes };


export const h1 = document.querySelector("h1");
export const h2 = document.querySelector("h2");
export const h3 = document.querySelector("h3");
export const h4 = document.querySelector("h4");
export const h5 = document.querySelector("h5");
export const h6 = document.querySelector("h6");

export const bold = document.querySelector("b");
export const italic = document.querySelector("i");
export const strikethrough = document.querySelector("s");

export const abbreviation = document.querySelector("abbr");
export const address = document.querySelector("address");
export const article = document.querySelector("article");
export const aside = document.querySelector("aside");

export const audio = document.querySelector("audio");

export const map = document.querySelector("map");
export const area = document.querySelector("area");
export * as Elements from "./elements";
