import PropTypes from "prop-types";

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string)
});
