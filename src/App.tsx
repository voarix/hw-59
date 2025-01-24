import "./App.css";
import { useState } from "react";
import Films from "./containers/Films/Films.tsx";
import Joke from "./containers/Joke/Joke.tsx";

const App = () => {
  const [page, setPage] = useState<boolean>(false);

  return (
    <div className="container">
      <button
        type="button"
        onClick={() => setPage(!page)}
        className="btn btn-primary mb-5"
      >
        Change page
      </button>

      {page ? <Films /> : <Joke />}
    </div>
  );
};

export default App;
