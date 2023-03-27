// declare const page: Document | null;
// declare const pages: NodeListOf<Document> | null;

// export { page, pages };


declare interface page {
  element: {
    collection: HTMLCollectionOf<Element>;
    list: NodeListOf<Element>;
  }

}



export type { page }
