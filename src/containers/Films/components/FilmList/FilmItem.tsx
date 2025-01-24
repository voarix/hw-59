import React from "react";

interface Props {
  filmName: string;
  onChangeInputFilmItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: React.MouseEventHandler;
}

const FilmItem: React.FC<Props> = React.memo(
  ({ filmName, onChangeInputFilmItem, onDelete }) => {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your film"
          aria-label="Your film"
          value={filmName}
          onChange={onChangeInputFilmItem}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.filmName === nextProps.filmName;
  });

export default FilmItem;
