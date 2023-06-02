import { useState } from "react";
import { useCats } from "../../hooks/useCats";
import { ImgResults } from "../../global/containers/ImgResults";
import { RandomCat } from "./components/RandomCat";
import { useInitialContext } from "../../context/initalStateContext";
import { LazyImg } from "../../global/components/LazyImg";
import { FormCats } from "./components/FormCats";

export const Home = (): JSX.Element => {
  const [catsInput, setCatsInput] = useState<number>(0);
  const [imgLoading, setImgLoading] = useState<number[]>([]);
  const { cats, getCats, clearCats } = useCats(catsInput);
  const stateData = useInitialContext();

  return (
    <section>
      <article className="p-3">
        <h2 className="text-2xl font-semibold text-secondaryColor">
          Random cat images 🎲
        </h2>
        <p className="mt-1 text-secondaryColor">
          Double tap to mark as a favorite 😻
        </p>
      </article>
      <article>
        <FormCats
          catsInput={catsInput}
          setCatsInput={setCatsInput}
          setImgLoading={setImgLoading}
          getCats={getCats}
          clearCats={clearCats}
        />
        <ImgResults>
          {cats.map((cat) => (
            <RandomCat src={cat.url} key={cat.id} catId={cat.id} />
          ))}
          {stateData?.state.loading &&
            imgLoading.map((load) => (
              <LazyImg
                key={load}
                className="imgStyle animate-pulse border-none"
              />
            ))}
        </ImgResults>
      </article>
    </section>
  );
};
