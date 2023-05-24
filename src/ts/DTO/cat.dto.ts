import { CatFav } from "../models/cat.model";

export interface CatImgFav extends Pick<CatFav, "id"> {
  imgUrl: string;
}
