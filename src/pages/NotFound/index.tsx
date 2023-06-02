import cat404 from "../../assets/imgs/cat404.png";
export const NotFound = () => {
  return (
    <section className="h-full">
      <article className="flex h-full w-full flex-col items-center justify-center">
        <figure className="h-96 w-96">
          <img
            className="h-full w-full object-contain"
            src={cat404}
            alt="cat"
          />
        </figure>
        <div className="text-center">
          <h1 className="text-7xl font-bold text-primaryColor">404</h1>
          <h2 className="my-4 text-3xl font-semibold text-primaryColor">
            PAGE NOT FOUND 😿
          </h2>
          <p className="text-xl ">
            We couldn't find the page you were looking for.
          </p>
        </div>
      </article>
    </section>
  );
};
