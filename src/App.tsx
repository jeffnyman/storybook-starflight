import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import typescriptLogo from "./assets/typescript.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Storybook Starflight</h1>

        <p>
          <em>A Pedagogical React Relativity Calculator in Storybook</em>
        </p>
      </header>
      <main>
        <p>Content goes here!</p>
      </main>
      <footer>
        <p>
          <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </p>
        <p>+</p>
        <p>
          <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </p>
        <p>and</p>
        <p>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={typescriptLogo} className="logo" alt="TypeScript logo" />
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
