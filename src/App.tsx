import { useState } from "react";
import { Route, Link } from "wouter";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { UploadCat } from "./pages/UploadCat";
import { Turn as Hamburger } from "hamburger-react";
import linkedInIcon from "./assets/icons/linkedin_icon.png"
import { IconBrandGithubFilled, IconUserCircle } from "@tabler/icons-react";

function App() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div >
      <header className="p-2 text-white overflow-hidden relative  shadow-lg bg-primaryColor">
        <article className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-2 items-center">
            <span className="logoSize">🐱</span>
            <h1 className="text-2xl font-bold">Cats API</h1>
          </div>
          <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
          <nav
            id="navPhone"
            className={`fixed gap-5 text-lg flex sm:hidden transition duration-200 ease-linear bottom-0 right-0 w-2/3 flex-col items-start px-5 pt-20 h-full bg-secondaryColor ${isOpen ? "translate-x-0" : "translate-x-96"}`}
          >
            <Link
              href="/"
              className="hover:underline transition duration-200 ease-linear m-0"
              onClick={() => {setOpen(false)}}
            >
              Random cat images
            </Link>
            <Link
              href="/favorites"
              className=" hover:underline transition duration-200 ease-linear m-0"
              onClick={() => {setOpen(false)}}
            >
              Your Favorites
            </Link>
            <Link
              href="/uploadCat"
              className="hover:underline transition duration-200 ease-linear"
              onClick={() => {setOpen(false)}}
            >
              Upload your own cat
            </Link>
          </nav>
          <nav id="navDesk" className="hidden sm:block text-lg font-semibold">
            <Link
              href="/"
              className="hover:underline transition duration-200 ease-linear"
            >
              Random cat images
            </Link>
            <Link
              href="/favorites"
              className="mx-5 hover:underline transition duration-200 ease-linear"
            >
              Your Favorites
            </Link>
            <Link
              href="/uploadCat"
              className="hover:underline transition duration-200 ease-linear"
            >
              Upload your own cat
            </Link>
          </nav>
        </article>
      </header>
      <main className="overflow-y-auto" onClick={() => {setOpen(false)}}>
        <div className="max-w-7xl mx-auto mainH ">
          <Route path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/uploadCat" component={UploadCat} />
        </div>
      </main>
      <footer className="p-3 shadow-lg bg-primaryColor">
        <div className="flex justify-between max-w-7xl mx-auto text-white font-medium bg-primaryColor">
          <p>Made by Juan Manuel Becerra</p>
          <div className="flex items-center gap-3">
            <a href="https://www.juan-bh.com/" target="_blank" >
              {/* <img className="footerIcons" src={porfolioIcon} alt="" /> */}
              <IconUserCircle size={24}/>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-manuel-becerra-hernandez/"
              target="_blank"
            >
              {/* <img className="footerIcons" src={gitIcon} alt="" /> */}
              <IconBrandGithubFilled size={24}/>
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
