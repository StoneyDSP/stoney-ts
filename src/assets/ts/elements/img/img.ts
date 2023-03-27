/**
 * Provides special properties and methods for manipulating the first element that is a descendant of node 'document' and matches selector 'img'.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
*/
const img = document.querySelector("img");
/**
 * Provides special properties and methods for manipulating all elements that are descendants of node 'document' and match selector 'img'.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
*/
const imgs = document.querySelectorAll("img");
/**
 * Returns the first element that is a descendant of node 'document' and matches selector 'img'.
*/
function selectFirst(): HTMLImageElement | null {
  if (img?.getRootNode().isSameNode(document.getRootNode())) {
    return img;
  }
  else {
    return null;
  }
}
/**
 * Returns all element descendants of node 'document' that match selectors.
*/
function selectAll(): NodeListOf<HTMLImageElement> {
  return imgs;
}

export { img, imgs, selectFirst, selectAll };
