import { useState, useEffect } from "react";
import { getFavorites } from "../services/getFavorites";
import { deleteFavorite } from "../services/deleteFavorite";
import { CatImgFav } from "../ts/DTO/cat.dto";
import { useInitialContext } from "../context/initalStateContext";

export const useCatFavorites = () => {
  const [favCats, setFavCats] = useState<CatImgFav[]>([]);
  const stateData = useInitialContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        stateData?.dispatch({ type: "START_REQUEST" });
        const rta = await getFavorites();
        setFavCats(rta);
        stateData?.dispatch({ type: "REQUEST_SUCCESS" });
      } catch (error) {
        stateData?.dispatch({ type: "REQUEST_ERROR" });
      }
    };
    fetchData();
  }, []);

  const removeFavorite = (id: CatImgFav["id"]) => {
    deleteFavorite(id);
    const favsToDisplay = favCats.filter((f) => f.id !== id);
    setFavCats(favsToDisplay);
  };

  return { favCats, removeFavorite };
};
