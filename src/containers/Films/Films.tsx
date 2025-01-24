import FilmForm from "./components/FilmForm.tsx";
import React, { useCallback, useState } from "react";
import { Film } from "./types";
import FilmItem from "./components/FilmItem.tsx";

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const onAddFilm = (newFilm: Film) => {
    setFilms((prevState) => [...prevState, newFilm]);
    console.log(films);
  };

  const onChangeInputFilmItem = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      setFilms((prevState: Film[]) => prevState.map((item) => {
        if (item.id === id) {
          return {...item, film: e.target.value};
        }
        return item;
      }));
    },
    [],
  );

  const onDelete = useCallback((id: string) => {
    setFilms((prevFilms) => prevFilms.filter((film) => film.id !== id));
  }, []);

  return (
    <div className="container">
      <FilmForm onSubmitAddToFilm={onAddFilm}/>
      {films.length > 0 ? (
        films.map((film: Film) => (
          <FilmItem
            filmName={film.film}
            key={film.id}
            onChangeInputFilmItem={(e) => onChangeInputFilmItem(e, film.id)}
            onDelete={() => onDelete(film.id)}
          />
        ))
      ) : (
        <p>No films added yet.</p>
      )}
    </div>
  );
};

export default Films;
