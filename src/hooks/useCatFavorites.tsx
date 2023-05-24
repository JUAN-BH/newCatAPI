import { useState, useEffect } from "react";
import { getFavorites } from "../services/getFavorites";
import { deleteFavorite } from "../services/deleteFavorite";
import { CatImgFav } from "../ts/DTO/cat.dto";

export const useCatFavorites = () => {
  const [favCats, setFavCats] = useState<CatImgFav[]>([]);

  useEffect(() => {
    const favorites = async () => {
      const rta = await getFavorites();
      setFavCats(rta);
    };
    favorites();
  }, []);

  const removeFavorite = (id: CatImgFav["id"]) => {
    deleteFavorite(id);
    const favsToDisplay = favCats.filter((f) => f.id !== id);
    setFavCats(favsToDisplay);
  };

  return { favCats, removeFavorite };
};
