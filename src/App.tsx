import "./App.css";
import { useState } from "react";
import Films from "./containers/Films/Films.tsx";
import Joke from "./containers/Joke/Joke.tsx";

const App = () => {
  const [page, setPage] = useState<boolean>(false);

  return (
    <>
      <button type='button' onClick={() => setPage(!page)} className='btn btn-primary'>Change page</button>

      {page ? <Films/> : <Joke/>}
    </>
  );
};

export default App;
