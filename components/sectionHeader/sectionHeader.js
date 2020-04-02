import propTypes from 'prop-types';
import './sectionHeader.module.scss';

const SectionHeader = props => {
  return (
    <h1 className="page-header">Showing <i>{props.text}</i> headlines:</h1>
  );
};

SectionHeader.propTypes = {
  topHeadlines: propTypes.string
};

export default SectionHeader;