import { LazyImg } from "../../../../global/components/LazyImg";
import { useCats } from "../../../../hooks/useCats";

interface propsTypes {
  src: string;
  catId: string;
}

export const RandomCat = ({ src, catId }: propsTypes): JSX.Element => {
  const { addFavorite, addFav } = useCats();

  return (
    <>
      <LazyImg
        src={src}
        addFav={addFav}
        onDoubleClick={() => {
          addFavorite(catId);
        }}
      />
    </>
  );
};
