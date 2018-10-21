import PropTypes from "prop-types";

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired })
    .isRequired,
  subtitle: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string)
});
