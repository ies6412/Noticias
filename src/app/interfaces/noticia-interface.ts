export interface NoticiaInterface {

  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;                     // Source tambien es una interface y esta relacinada con el id y el name
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}







