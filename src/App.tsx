import { Route, Link } from "wouter";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { UploadCat } from "./pages/UploadCat";

function App() {
  return (
    <>
      <header>
        <div className="logoContainer">
          <span>🐱</span>
          <div>
            <h1>Cats API</h1>
            <p>API consumption practice with TypeScript👩‍💻</p>
          </div>
        </div>
        <nav>
          <Link href="/">Random cat images</Link>
          <Link href="/favorites">Your Favorites</Link>
          <Link href="/uploadCat">Upload your own cat</Link>
        </nav>
      </header>
      <main>
        <Route path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/uploadCat" component={UploadCat} />
      </main>
      <footer>
        <p>Made by Juan Manuel Becerra</p>
        <div>
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
      </footer>
    </>
  );
}

export default App;
