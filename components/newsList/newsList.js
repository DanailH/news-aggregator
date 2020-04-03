import propTypes from 'prop-types';
import './newsList.module.scss';

const NewsList = props => {
  return (
    <ul className="articles-container">
      { props.news.map((article, index) => (
        <li key={index} className="article-item">
          <div className="article-text">
            <div className="article-title">
              <a href={article.url} className="article-link" target="_blank" rel="noopener noreferrer">{article.title}</a>
            </div>
            <div className="article-details">
              {article.source.name}
              <span>&#183;</span>
              {new Date(article.publishedAt).toDateString()}
            </div>
          </div>
          <div className="url-container">
            <img src={article.urlToImage || '/noimage.jpg'} alt="news-article-image"/>
          </div>
        </li>
      )) }
    </ul>
  );
};

NewsList.propTypes = {
  news: propTypes.array
};

export default NewsList;