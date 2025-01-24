import React from "react";

interface Props {
  loader: boolean;
}

const Loader: React.FC<Props> = ({ loader }) => {
  return (
    <>
      {loader ? (
        <div
          className="spinner-border text-primary position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
