import ReactDOM from "react-dom";
import { useInitialContext } from "../../../context/initalStateContext";

function Modal() {
  const stateData = useInitialContext();

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  const title: string = stateData?.state.error
    ? "Ups! 😿"
    : stateData?.state.upLoadImg
    ? "Uploaded 😽"
    : " ";
  const text: string = stateData?.state.error
    ? "Something went wrong please try again"
    : stateData?.state.upLoadImg
    ? "Your cat has been uploaded to our favorites 😻"
    : " ";

  const handleCloseModal: React.MouseEventHandler<HTMLElement> = (e) => {
    const element = e.target as HTMLElement;
    if (element.id == "backModal" || element.id == "btnModal")
      stateData?.dispatch({ type: "CLOSE_MODAL" });
  };

  return ReactDOM.createPortal(
    <section
      id="backModal"
      onClick={handleCloseModal}
      className="absolute left-0  top-0 z-10 h-full w-full bg-gray-800 bg-opacity-40"
    >
      <article className="positionModal flex h-72 w-72 flex-col items-center justify-between  rounded-md bg-white px-3 py-10 text-center shadow-md">
        <h2 className="text-2xl font-bold text-primaryColor">{title}</h2>
        <p className="text text-primaryColor">{text}</p>
        <button id="btnModal" className="btn" type="button">
          Ok
        </button>
      </article>
    </section>,
    modalRoot
  );
}

export { Modal };
