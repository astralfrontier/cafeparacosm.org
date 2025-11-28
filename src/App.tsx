import { useLocation } from "react-router";
import "./App.css";
import GameListing from "./GameListing";

function App() {
  const location = useLocation();

  return (
    <>
      <header className="container">
        <h1>Cafe Paracosm</h1>
      </header>
      <main className="container">
        <p>
          Were you looking for a post on the forum? Try{" "}
          <a
            href={`https://cafeparacosm.forum${location.pathname}`}
          >{`https://cafeparacosm.forum${location.pathname}`}</a>
        </p>
        <GameListing />
      </main>
    </>
  );
}

export default App;
