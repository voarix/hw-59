import { useEffect, useState } from "react";
import Button from "./components/Button.tsx";
import Loader from "./components/Loader.tsx";

const Joke = () => {
  const [joke, setJoke] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await fetch("https://api.chucknorris.io/jokes/random");

      if (!response.ok) {
        throw new Error(response.status + " - " + response.statusText);
      }
      const newResponse = await response.json();
      setJoke(newResponse.value);
      console.log(newResponse);
    } catch (err) {
      alert(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  const onNewJoke = () => {
    void fetchData();
  };

  return (
    <div>
      <Button onNewJoke={onNewJoke} />
      <Loader loader={loader} />
      {joke ? <p>{joke}</p> : <p>шуток еще нет))</p>}
    </div>
  );
};

export default Joke;
