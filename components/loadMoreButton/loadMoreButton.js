import propTypes from 'prop-types';
import './loadMoreButton.scss';

const LoadMoreButton = () => {
  return (
    <div className="load-more-container">
      <button className="load-more-button">Load More</button>
    </div>
  )
};

LoadMoreButton.propTypes = {
};

export default LoadMoreButton;