import { LazyImg } from "../../global/components/LazyImg";
import { ImgResults } from "../../global/containers/ImgResults";
import { useCatFavorites } from "../../hooks/useCatFavorites";

export const Favorites = (): JSX.Element => {
  const { favCats, removeFavorite } = useCatFavorites();

  return (
    <section>
      <article>
        <h2>Our favorites 😻</h2>
        <p>Double tap to unfavorite 😿</p>
      </article>
      <ImgResults>
        {favCats.map((fav) => (
          <LazyImg
            src={fav.imgUrl}
            key={fav.id}
            id={fav.id?.toString()}
            onClick={(e) => {
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
