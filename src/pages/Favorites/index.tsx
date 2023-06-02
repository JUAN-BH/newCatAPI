import { useInitialContext } from "../../context/initalStateContext";
import { LazyImg } from "../../global/components/LazyImg";
import { Loading } from "../../global/components/Loading";
import { ImgResults } from "../../global/containers/ImgResults";
import { useCatFavorites } from "../../hooks/useCatFavorites";

export const Favorites = (): JSX.Element => {
  const { favCats, removeFavorite } = useCatFavorites();
  const stateData = useInitialContext();
  return (
    <section>
      <article className="p-3">
        <h2 className="text-2xl font-semibold text-secondaryColor">
          Our favorites 😻
        </h2>
        <p className="mt-1 text-secondaryColor">Double tap to unfavorite 😿</p>
      </article>
      {stateData?.state.loading && <Loading />}
      <ImgResults>
        {favCats.map((fav) => (
          <LazyImg
            src={fav.imgUrl}
            key={fav.id}
            id={fav.id?.toString()}
            onDoubleClick={(e) => {
              const target = e.target as HTMLElement;
              const id = target.id;
              removeFavorite(parseInt(id));
            }}
          />
        ))}
      </ImgResults>
    </section>
  );
};
