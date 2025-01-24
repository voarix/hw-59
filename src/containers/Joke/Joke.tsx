import { useEffect, useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState<string>("");

  useEffect( () => {
    const fetchData = async () => {
      try{
        const response = await fetch("https://api.chucknorris.io/jokes/random");

        if(!response.ok){
          throw new Error(response.status + ' - ' + response.statusText);
        }
        const newResponse = await response.json();
        setJoke(newResponse.value);
        console.log(newResponse);
      } catch(err) {
        alert(err);
      }
    };


    void fetchData();
  }, []);

  return (
    <div className='container'>
      {joke ? <p>{joke}</p> : <p>шуток еще нет))</p>}
    </div>
  );
};

export default Joke;
