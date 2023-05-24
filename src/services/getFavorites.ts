import axios, { AxiosError } from "axios";
import { API } from "./apiSettings";
import { CatFav } from "../ts/models/cat.model";
import { CatImgFav } from "../ts/DTO/cat.dto";

export const getFavorites = async (): Promise<CatImgFav[]> => {
  try {
    const { data } = await API<CatFav[]>("favourites");
    const cats: CatImgFav[] = data.map((cat) => {
      return {
        id: cat.id,
        imgUrl: cat.image.url,
      };
    });
    return cats;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    } else {
      console.error(error);
    }
    return [];
  }
};
