import { useState, useEffect } from "react";
import { deleteFavorite } from "../services/deleteFavorite";
import { CatImgFav } from "../ts/DTO/cat.dto";
import { useInitialContext } from "../context/initalStateContext";
import { CatFav } from "../ts/models/cat.model";
import { API } from "../services/apiSettings";

export const useCatFavorites = () => {
  const [favCats, setFavCats] = useState<CatImgFav[]>([]);
  const stateData = useInitialContext();
  useEffect(() => {
    const getFavorites = async (): Promise<CatImgFav[]> => {
      try {
        stateData?.dispatch({ type: "START_REQUEST" });
        const { data } = await API<CatFav[]>("favourites");
        const cats: CatImgFav[] = data.map((cat) => {
          return {
            id: cat.id,
            imgUrl: cat.image.url,
          };
        });
        setFavCats(cats);
        stateData?.dispatch({ type: "REQUEST_SUCCESS" });
        return cats;
      } catch (error) {
        stateData?.dispatch({ type: "REQUEST_ERROR" });
        return [];
      }
    };
    getFavorites();
  }, []);

  const removeFavorite = (id: CatImgFav["id"]) => {
    deleteFavorite(id);
    const favsToDisplay = favCats.filter((f) => f.id !== id);
    setFavCats(favsToDisplay);
  };

  return { favCats, removeFavorite };
};
