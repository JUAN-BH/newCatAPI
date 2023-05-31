import { useState } from "react";
import { CatImg } from "../ts/models/cat.model";
import { getImgs } from "../services/getImages";
import { addToFavorites } from "../services/addToFavorites";

export const useCats = (numCats = 0) => {
  const [addFav, setAddFav] = useState<boolean>(false)
  
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

  const getCats = async () => {
    const rtaCats = await getImgs(numCats);
    sessionStorage.setItem("catsInSession", JSON.stringify(rtaCats));
    setCats((prev: CatImg[]) => [...prev, ...rtaCats]);
  };

  const clearCats = () => {
    sessionStorage.setItem("catsInSession", "[]");
    setCats([]);
  };

  const addFavorite = (id:string) => {
    setAddFav(true)
    addToFavorites(id)
  }

  return {
    cats,
    getCats,
    clearCats,
    addFav, 
    addFavorite
  };
};
