export interface ListItemMovie {
  id: number;
  title: string;
  original_title?: string;
  poster_path?: string | null;
  overview?: string;
  release_date?: string;
  [key: string]: any;
}

export interface ListDetailsResponse {
  id: number;
  iso_639_1?: string | null;
  name: string;
  description?: string | null;
  favorite_count?: number;
  item_count?: number;
  items: ListItemMovie[];
  [key: string]: any;
}
