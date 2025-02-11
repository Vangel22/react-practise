import PropTypes from "prop-types";

const Profile = ({ name, lastname }) => {
  console.log("Rendering Profile with:", { name, lastname });
  return (
    <>
      <h1>{name}</h1>
      <h2>{lastname}</h2>
    </>
  );
};

// Primitive check
Profile.propTypes = {
  name: PropTypes.number.isRequired,
  lastname: PropTypes.string.isRequired,
};

// Collective types
// Profile.propTypes = PropTypes.oneOf(["John", "Doe"]);
// Profile.propTypes = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

// Object validations

// Profile.propTypes = PropTypes.shape({
//   // is not strict about the keys
//   name: PropTypes.number.isRequired,
//   lastname: PropTypes.string.isRequired,
// });

// Profile.propTypes = PropTypes.exact({
//   // im only gonna have name and lastname
//   name: PropTypes.number.isRequired,
//   lastname: PropTypes.string.isRequired,
// });

export { Profile };
