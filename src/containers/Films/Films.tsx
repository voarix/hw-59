import FilmForm from "./components/FilmForm.tsx";
import { useState } from "react";
import { Film } from "./types";

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const onAddFilm = (newFilm: Film) => {
    setFilms((prevState) => [...prevState, newFilm]);
    console.log(films);
  };

  return (
    <div className="container">
      <FilmForm onSubmitAddToFilm={onAddFilm} />
    </div>
  );
};

export default Films;
