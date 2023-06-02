import { useState } from "react";
import axios, { AxiosError } from "axios";
import { API } from "../services/apiSettings";
import { CatImg } from "../ts/models/cat.model";
import { useInitialContext } from "../context/initalStateContext";

export const useCats = (numCats = 0) => {
  const stateData = useInitialContext();
  const [addFav, setAddFav] = useState<boolean>(false);
  let catsInSession: CatImg[];

  const catsSessionActive: string | null =
    sessionStorage.getItem("catsInSession");
  if (catsSessionActive) {
    catsInSession = JSON.parse(catsSessionActive);
  } else {
    sessionStorage.setItem("catsInSession", "[]");
    catsInSession = [];
  }
  const [cats, setCats] = useState<CatImg[]>(catsInSession);

  async function getImgs(numImgs: number): Promise<CatImg[]> {
    try {
      stateData?.dispatch({ type: "START_REQUEST" });
      const { data } = await API<CatImg[]>(`images/search?limit=${numImgs}`);
      const cats: CatImg[] = data.map((cat) => {
        return {
          id: cat.id,
          url: cat.url,
        };
      });
      stateData?.dispatch({ type: "REQUEST_SUCCESS" });
      return cats;
    } catch (error) {
      stateData?.dispatch({ type: "REQUEST_ERROR" });
      console.log(error);
      return [];
    }
  }

  const addToFavorites = async (id: string) => {
    try {
      await API("favourites", {
        method: "POST",
        data: {
          image_id: id,
        },
      });
      stateData?.dispatch({ type: "REQUEST_SUCCESS" });
    } catch (error) {
      stateData?.dispatch({ type: "REQUEST_ERROR" });
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error(axiosError.message);
      } else {
        console.error(error);
      }
    }
  };

  const uploadCat = async (formData: FormDataEntryValue) => {
    try {
      stateData?.dispatch({ type: "START_REQUEST" });
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
      stateData?.dispatch({ type: "UPLOAD_SUCCESS" });
    } catch (error) {
      stateData?.dispatch({ type: "REQUEST_ERROR" });
    }
  };

  const getCats = async () => {
    const rtaCats = await getImgs(numCats);
    sessionStorage.setItem("catsInSession", JSON.stringify(rtaCats));
    setCats((prev: CatImg[]) => [...prev, ...rtaCats]);
  };

  const clearCats = () => {
    sessionStorage.setItem("catsInSession", "[]");
    setCats([]);
  };

  const addFavorite = (id: string) => {
    setAddFav(true);
    addToFavorites(id);
  };

  return {
    cats,
    getCats,
    clearCats,
    addFav,
    addFavorite,
    uploadCat,
  };
};
