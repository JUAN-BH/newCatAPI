import { addToFavorites } from "./addToFavorites";
import { API } from "./apiSettings";
import axios, { AxiosError } from "axios";

export const uploadCat = async (formData: FormDataEntryValue) => {
  try {
    const { data } = await API("images/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        file: formData,
      },
    });
    addToFavorites(data.id);
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
