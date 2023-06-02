import { useState, useRef } from "react";
import { LazyImg } from "../../global/components/LazyImg";
import { useCats } from "../../hooks/useCats";
import { useInitialContext } from "../../context/initalStateContext";
import { Loading } from "../../global/components/Loading";
import { Modal } from "../../global/components/Modal";

export const UploadCat = (): JSX.Element => {
  const [imgValue, setImageValue] = useState<string>("");
  const formNode = useRef<HTMLFormElement>(null);
  const { uploadCat } = useCats();
  const stateData = useInitialContext();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImageValue(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section>
      <article className="p-3">
        <h2 className="text-2xl font-semibold text-secondaryColor">
          Upload your cat image ⬆
        </h2>
        <p className="mt-1 text-secondaryColor">
          It will display in your favorites 😻
        </p>
      </article>

      {stateData?.state.upLoadImg && <Modal />}
      <article className="pt-4">
        {imgValue.length > 0 && <LazyImg src={imgValue} />}
        {stateData?.state.loading && <Loading />}
        <form
          className=" flex flex-col items-center justify-center"
          ref={formNode}
          onSubmit={(e) => {
            e.preventDefault();
            const form = formNode.current;
            if (form) {
              const formData = new FormData(form);
              const file = formData.get("inputmg");
              if (file) {
                uploadCat(file);
              }
            }
          }}
        >
          <label className="block">
            <span className="sr-only">Choose File</span>
            <input
              onChange={handleImageChange}
              name="inputmg"
              accept="image/*"
              type="file"
              className="btnFile my-4 block w-full text-sm text-gray-500"
            />
          </label>

          <button className="btn" type="submit">
            Add cat
          </button>
        </form>
      </article>
    </section>
  );
};
