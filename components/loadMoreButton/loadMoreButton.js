import propTypes from 'prop-types';
import './loadMoreButton.scss';

const LoadMoreButton = props => {
  return (
    <div className="load-more-container">
      <button className="load-more-button" onClick={props.loadMoreArticles}>Load More</button>
    </div>
  )
};

LoadMoreButton.propTypes = {
  loadMoreArticles: propTypes.func
};

export default LoadMoreButton;