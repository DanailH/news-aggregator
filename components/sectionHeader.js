import propTypes from 'prop-types';

const SectionHeader = props => {
  return (
    <h1>Showing <i>{props.text}</i> headlines:</h1>
  );
};

SectionHeader.propTypes = {
  topHeadlines: propTypes.string
};

export default SectionHeader;