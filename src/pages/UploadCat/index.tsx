import { useState, useRef } from "react";
import { uploadCat } from "../../services/uploadCat";

export const UploadCat = (): JSX.Element => {
  const [imgValue, setImageValue] = useState("");
  const formNode = useRef<HTMLFormElement>(null);
  return (
    <section>
      <article className="p-3">
        <h2 className="text-secondaryColor text-2xl font-semibold">
          Upload your cat image ⬆
        </h2>
        <p className="text-secondaryColor mt-1">
          It will display in your favorites 😻
        </p>
      </article>

      <article className="pt-4">
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
          <input
            type="file"
            name="inputmg"
            value={imgValue}
            onChange={(e) => setImageValue(e.target.value)}
          />
          <button className="btn" type="submit">
            Add cat
          </button>
        </form>
      </article>
    </section>
  );
};
