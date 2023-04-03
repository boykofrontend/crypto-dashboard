export interface NewsResponse<T> {
  Data: T[];
}

export interface INews {
  id: string;
  guid: string;
  published_on: number;
  imageurl: string;
  title: string;
  url: string;
  body: string;
  tags: string;
  lang: string;
  upvotes: string;
  downvotes: string;
  categories: string;
  source_info: NewsSourceInfo;
  source: string;
}

export interface NewsSourceInfo {
  name: string;
  img: string;
  lang: string;
}
