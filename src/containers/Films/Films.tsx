import FilmForm from "./components/FilmForm.tsx";
import React, { useCallback, useState } from "react";
import { Film } from "./types";
import FilmList from "./components/FilmList/FilmList.tsx";

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const onAddFilm = (newFilm: Film) => {
    setFilms((prevState) => [...prevState, newFilm]);
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
    <>
      <FilmForm onSubmitAddToFilm={onAddFilm}/>
      <FilmList films={films} onChangeInputFilmItem={onChangeInputFilmItem} onDelete={onDelete} />
    </>
  );
};

export default Films;
