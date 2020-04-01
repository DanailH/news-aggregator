import propTypes from 'prop-types';
import './newsList.module.scss';

const NewsList = props => {
  const openArticle = url => {
    const win = window.open(url, '_blank');
    win.focus();
  };

  return (
    <ul className="articles-container">
      { props.news.map((article, index) => (
        <li key={index} className="article-item" onClick={() => openArticle(article.url)}>
          <div className="article-text">
            <div className="article-title">
              {article.title}
            </div>
            <div className="article-details">
              {article.source.name}
              <span>&#183;</span>
              {article.publishedAt}
            </div>
          </div>
          <div className="url-container">
            <img src={article.urlToImage} />
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