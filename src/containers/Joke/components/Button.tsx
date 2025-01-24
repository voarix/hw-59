import React from "react";

interface Props {
  onNewJoke: React.MouseEventHandler;
}

const Button: React.FC<Props> = React.memo(({ onNewJoke }) => {
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
},   (prevProps, nextProps) => {
  console.log('ререндер');
  return prevProps.onNewJoke === nextProps.onNewJoke;
});

export default Button;
