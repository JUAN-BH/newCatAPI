import { useState, useRef } from "react";
import { uploadCat } from "../../services/uploadCat";

export const UploadCat = (): JSX.Element => {
  const [imgValue, setImageValue] = useState("");
  const formNode = useRef<HTMLFormElement>(null);
  return (
    <section>
      <article>
        <h2>Upload your cat image ⬆</h2>
        <p>It will display in your favorites 😻</p>
      </article>
      <article>
        <form
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
            // if (file) {
            // }
          }}
        >
          <input
            type="file"
            name="inputmg"
            value={imgValue}
            onChange={(e) => setImageValue(e.target.value)}
          />
          <button type="submit">Add cat</button>
        </form>
      </article>
    </section>
  );
};
