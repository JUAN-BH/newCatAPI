import { useState } from "react";
import { useCats } from "../../hooks/useCats";
import { IconRefresh } from "@tabler/icons-react";
import { ImgResults } from "../../global/containers/ImgResults";
import { RandomCat } from "./components/RandomCat";

export const Home = (): JSX.Element => {
  const [catsInput, setCatsInput] = useState<number>(0);
  const { cats, getCats, clearCats } = useCats(catsInput);
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
        <div>
          <form
            className="flex p-3 "
            onSubmit={(e) => {
              e.preventDefault();
              getCats();
            }}
          >
            <input
              className="w-full rounded-md rounded-e-none border border-secondaryColor px-4 py-1 focus:outline-none"
              type="number"
              placeholder="Add many cats as you want"
              value={catsInput}
              onChange={(e) => {
                const numberInput: number = parseInt(e.target.value);
                if (numberInput >= 0) setCatsInput(parseInt(e.target.value));
              }}
            />
            <button className="btnForm" type="submit">
              Add
            </button>
            <button
              type="button"
              onClick={() => {
                setCatsInput(0);
                clearCats();
              }}
              className="ml-2 rounded-full bg-secondaryColor p-2 shadow-md transition duration-200 ease-linear hover:bg-primaryColor"
            >
              <IconRefresh color="white" />
            </button>
          </form>
        </div>
        <ImgResults>
          {cats.map((cat) => (
            <RandomCat src={cat.url} key={cat.id} catId={cat.id} />
          ))}
        </ImgResults>
      </article>
    </section>
  );
};
