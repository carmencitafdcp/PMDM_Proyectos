export interface AccountListItem {
  description: string | null;
  favorite_count: number;
  id: number;
  iso_639_1: string | null;
  item_count: number;
  list_type: string | null;
  name: string;
  poster_path: string | null;
}

export interface AccountListsResponse {
  page: number;
  results: AccountListItem[];
  total_pages: number;
  total_results: number;
}
