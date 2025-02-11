import PropTypes from "prop-types";

export const FirstApp = ({
  title,
  subTitle,
  name,
  disabled = false,
  onSmash,
}) => {
  return (
    <>
      <h1> {title} </h1>
      <p>{subTitle}</p>
      <p>{name}</p>

      <button disabled={disabled} onClick={onSmash}>
        Click me
      </button>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onSmash: PropTypes.func,
};
