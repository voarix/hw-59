import React from "react";
import { Film } from "../../types";
import FilmItem from "./FilmItem.tsx";

interface Props {
  films: Film[];
  onChangeInputFilmItem: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
  onDelete: (id: string) => void;
}

const FilmList: React.FC<Props> = ({
  films,
  onChangeInputFilmItem,
  onDelete,
}) => {
  return (
    <>
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
    </>
  );
};

export default FilmList;
