import { IconRefresh } from "@tabler/icons-react";

interface PropsFormCats {
  getCats: () => void;
  clearCats: () => void;
  catsInput: string;
  setCatsInput: React.Dispatch<React.SetStateAction<string>>;
  setImgLoading: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FormCats = (props: PropsFormCats): JSX.Element => {
  return (
    <form
      className="flex p-3 "
      onSubmit={(e) => {
        e.preventDefault();
        props.getCats();
      }}
    >
      <input
        className="w-full rounded-md rounded-e-none border border-secondaryColor px-4 py-1 focus:outline-none"
        type="number"
        placeholder="Add many cats as you want"
        value={props.catsInput}
        onChange={(e) => {
          if (!e.target.value.includes("-")) {
            const numberInput: number = parseInt(e.target.value);
            const newNumbers = Array.from(
              { length: numberInput },
              (_, index) => index + 1
            );
            props.setImgLoading(newNumbers);
            props.setCatsInput(e.target.value);
          }
        }}
      />
      <button className="btnForm" type="submit">
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          props.clearCats();
        }}
        className="ml-2 rounded-full bg-secondaryColor p-2 shadow-md transition duration-200 ease-linear hover:bg-primaryColor"
      >
        <IconRefresh color="white" />
      </button>
    </form>
  );
};
