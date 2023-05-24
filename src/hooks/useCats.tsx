import { useState } from "react";
import { CatImg } from "../ts/models/cat.model";
import { getImgs } from "../services/getImages";

export const useCats = (numCats: number) => {
  const [cats, setCats] = useState<CatImg[]>([]);

  const getCats = async () => {
    const rtaCats = await getImgs(numCats);
    setCats((prev: CatImg[]) => [...prev, ...rtaCats]);
  };

  const clearCats = () => {
    setCats([]);
  };

  return {
    cats,
    getCats,
    clearCats,
  };
};
