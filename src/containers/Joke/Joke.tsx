import { useEffect, useState } from "react";

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
      <button
        type="button"
        onClick={onNewJoke}
        className="btn btn-primary mb-3"
      >
        Новая шутка
      </button>
      {loader ? (
        <div
          className="spinner-border text-primary position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}
      {joke ? <p>{joke}</p> : <p>шуток еще нет))</p>}
    </div>
  );
};

export default Joke;
