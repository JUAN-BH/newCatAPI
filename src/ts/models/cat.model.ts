export interface CatImg {
  breeds?: string[];
  id: string;
  url: string;
  width?: number;
  height?: number;
}

export interface CatFav {
  id?: number;
  user_id?: string;
  image_id?: string;
  sub_id?: null;
  created_at?: Date;
  image: ImageFav;
}

export interface ImageFav {
  id: string;
  url: string;
}
