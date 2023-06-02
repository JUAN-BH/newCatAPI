import { useState } from "react";
import { Route, Link, Switch } from "wouter";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { UploadCat } from "./pages/UploadCat";
import { Turn as Hamburger } from "hamburger-react";
import linkedInIcon from "./assets/icons/linkedin_icon.png";
import { IconBrandGithubFilled, IconUserCircle } from "@tabler/icons-react";
import { NotFound } from "./pages/NotFound";

function App() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
      <header className="relative overflow-hidden bg-primaryColor p-2  text-white shadow-lg">
        <article className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="logoSize">🐱</span>
            <h1 className="text-2xl font-bold">Cats API</h1>
          </div>
          <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
          <nav
            id="navPhone"
            className={`fixed bottom-0 right-0 z-10 flex h-full w-2/3 flex-col items-start gap-5 bg-secondaryColor px-5 pt-20 text-lg transition duration-200 ease-linear sm:hidden ${
              isOpen ? "translate-x-0" : "translate-x-96"
            }`}
          >
            <Link
              href="/"
              className="m-0 transition duration-200 ease-linear hover:underline"
              onClick={() => {
                setOpen(false);
              }}
            >
              Random cat images
            </Link>
            <Link
              href="/favorites"
              className=" m-0 transition duration-200 ease-linear hover:underline"
              onClick={() => {
                setOpen(false);
              }}
            >
              Your Favorites
            </Link>
            <Link
              href="/uploadCat"
              className="transition duration-200 ease-linear hover:underline"
              onClick={() => {
                setOpen(false);
              }}
            >
              Upload your own cat
            </Link>
          </nav>
          <nav id="navDesk" className="hidden text-lg font-semibold sm:block">
            <Link
              href="/"
              className="transition duration-200 ease-linear hover:underline"
            >
              Random cat images
            </Link>
            <Link
              href="/favorites"
              className="mx-5 transition duration-200 ease-linear hover:underline"
            >
              Your Favorites
            </Link>
            <Link
              href="/uploadCat"
              className="transition duration-200 ease-linear hover:underline"
            >
              Upload your own cat
            </Link>
          </nav>
        </article>
      </header>
      <main
        className="overflow-y-auto"
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="mainH mx-auto max-w-7xl ">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/uploadCat" component={UploadCat} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </main>
      <footer className="bg-primaryColor p-3 shadow-lg">
        <div className="mx-auto flex max-w-7xl justify-between bg-primaryColor font-medium text-white">
          <p>Made by Juan Manuel Becerra</p>
          <div className="flex items-center gap-3">
            <a href="https://www.juan-bh.com/" target="_blank">
              {/* <img className="footerIcons" src={porfolioIcon} alt="" /> */}
              <IconUserCircle size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-manuel-becerra-hernandez/"
              target="_blank"
            >
              {/* <img className="footerIcons" src={gitIcon} alt="" /> */}
              <IconBrandGithubFilled size={24} />
            </a>
            <a href="https://github.com/JUAN-BH" target="_blank">
              <img className="footerIcons" src={linkedInIcon} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
