import { CatImgFav } from "../ts/DTO/cat.dto";
import { API } from "./apiSettings";
import axios, { AxiosError } from "axios";

export const deleteFavorite = async (id: CatImgFav["id"]) => {
  try {
    await API(`favourites/${id}`, {
      method: "DELETE",
    });
    alert("The cat has been remove!");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    } else {
      console.error(error);
    }
  }
};
