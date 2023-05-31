import { LazyImg } from "../../global/components/LazyImg";
import { ImgResults } from "../../global/containers/ImgResults";
import { useCatFavorites } from "../../hooks/useCatFavorites";

export const Favorites = (): JSX.Element => {
  const { favCats, removeFavorite } = useCatFavorites();

  return (
    <section>
      <article className="p-3">
        <h2 className="text-secondaryColor text-2xl font-semibold">
          Our favorites 😻
        </h2>
        <p className="text-secondaryColor mt-1">Double tap to unfavorite 😿</p>
      </article>
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
