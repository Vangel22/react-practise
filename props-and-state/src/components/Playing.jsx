import PropTypes from "prop-types";

export const Playing = () => {
  const onPlayMovie = () => {
    alert("is playing");
  };

  return (
    <Toolbar
      onPlayMovie={onPlayMovie}
      onUploadImage={() => alert("uploading!")}
    />
  );
};

const Toolbar = ({ onPlayMovie, onUploadImage }) => {
  return (
    <>
      <Button onClick={onPlayMovie}>Play movie</Button>
      <Button onClick={onUploadImage}>Upload image</Button>
    </>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button
      style={{
        backgroundColor: "red",
        width: 100,
        height: 100,
        margin: 20,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Toolbar.propTypes = {
  onPlayMovie: PropTypes.func,
  onUploadImage: PropTypes.func,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

// npm i prop-types
