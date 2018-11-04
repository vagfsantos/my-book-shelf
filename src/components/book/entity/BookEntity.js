import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  imageLinks: PropTypes.shape({ thumbnail: PropTypes.string }),
  categories: PropTypes.arrayOf(PropTypes.string)
});
