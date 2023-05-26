import { Route, Link } from "wouter";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { UploadCat } from "./pages/UploadCat";

function App() {
  return (
    <>
      <header className="p-5 text-white shadow-lg bg-primaryColor">
        <article className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-2 items-center">
            <span className="text-5xl">🐱</span>
            <div>
              <h1 className="text-3xl font-bold">Cats API</h1>
            </div>
          </div>
          <nav id="navDesk" className="text-xl font-semibold">
            <Link href="/" className="hover:underline">
              Random cat images
            </Link>
            <Link href="/favorites" className="mx-5 hover:underline">
              Your Favorites
            </Link>
            <Link href="/uploadCat" className="hover:underline">
              Upload your own cat
            </Link>
          </nav>
        </article>
      </header>
      <main className="overflow-y-auto">
        <div className="max-w-7xl mx-auto mainH ">
          <Route path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/uploadCat" component={UploadCat} />
        </div>
      </main>
      <footer className="p-4 shadow-lg bg-primaryColor">
        <div className="flex justify-between max-w-7xl mx-auto text-white font-medium bg-primaryColor">
          <p>Made by Juan Manuel Becerra</p>
          <div className="flex items-center gap-5">
            <a href="https://www.juan-bh.com/" target="_blank">
              Portafolio
            </a>
            <a
              href="https://www.linkedin.com/in/juan-manuel-becerra-hernandez/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/JUAN-BH" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
