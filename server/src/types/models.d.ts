export interface IPage {
  pageId: string;
  author: string;
  title: string;
  value: object;
  cleanUrl: string;
  count: number;
  createdAt: date;
  updatedAt: date;
  coments: [{ text: string; date: date }?];
}

export interface INotionPageMap {
  [key: stirng]: INotionPage | null;
}

export interface INotionBlock {
  [keys: string]: any;
  value: {
    [keys: string]: any;
    id: string;
    type: string;
  };
}
export interface INotionPage {
  [keys: string]: any;
  block: {
    [id: string]: INotionBlock | any;
  };
  collection: any;
  collection_view: any;
  notion_user: any;
  collection_query: any;
  signed_urls: any;
}
