import * as React from "react";
import { useState } from "react";
import { Film, FilmMutation } from "../types";

interface Props {
  onSubmitAddToFilm: (newFilm: Film) => void;
}

const FilmForm: React.FC<Props> = ({ onSubmitAddToFilm }) => {
  const initialFilmForm: FilmMutation = {
    film: "",
  };

  const [form, setForm] = useState(initialFilmForm);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.film.trim() !== "") {
      onSubmitAddToFilm({ id: String(new Date().toISOString()), ...form });
      setForm(initialFilmForm);
    } else {
      alert("Заполните поле, пожалуйста");
    }
  };

  const onChangeInputForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          id="film"
          name="film"
          aria-describedby="your film"
          value={form.film}
          onChange={onChangeInputForm}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FilmForm;
