import { useState } from "react";
import { CatImg } from "../ts/models/cat.model";
import { getImgs } from "../services/getImages";

export const useCats = (numCats: number) => {
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

  return {
    cats,
    getCats,
    clearCats,
  };
};
