import { API } from "./apiSettings";
import axios, { AxiosError } from "axios";

export const addToFavorites = async (id: string) => {
  try {
    await API("favourites", {
      method: "POST",
      data: {
        image_id: id,
      },
    });
    alert("The cat has been added to favorites!");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    } else {
      console.error(error);
    }
  }
};
