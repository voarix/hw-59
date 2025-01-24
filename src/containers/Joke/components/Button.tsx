import React from "react";

interface Props {
  onNewJoke: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({ onNewJoke }) => {
  return (
    <>
      <button
        type="button"
        onClick={onNewJoke}
        className="btn btn-primary mb-3"
      >
        Новая шутка
      </button>
    </>
  );
};

export default Button;
