import { useState } from "react";
import { useCats } from "../../hooks/useCats";
import { IconRefresh } from "@tabler/icons-react";
import { ImgResults } from "../../global/containers/ImgResults";
import { LazyImg } from "../../global/components/LazyImg";
import { addToFavorites } from "../../services/addToFavorites";

export const Home = (): JSX.Element => {
  const [catsInput, setCatsInput] = useState(0);
  const { cats, getCats, clearCats } = useCats(catsInput);
  return (
    <section>
      <article>
        <h2>Random cat images 🎲</h2>
        <p>Double tap to mark as a favorite 😻</p>
      </article>
      <article>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getCats();
            }}
          >
            <input
              type="number"
              placeholder="Add many cats as you want"
              value={catsInput}
              onChange={(e) => setCatsInput(parseInt(e.target.value))}
            />
            <button type="submit">Add</button>
          </form>
          <button onClick={clearCats}>
            <IconRefresh />
          </button>
        </div>
        <ImgResults>
          {cats.map((cat) => (
            <LazyImg
              src={cat.url}
              key={cat.id}
              onClick={() => {
                addToFavorites(cat.id);
              }}
            />
          ))}
        </ImgResults>
      </article>
    </section>
  );
};
