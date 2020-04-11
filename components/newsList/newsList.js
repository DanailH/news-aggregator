import propTypes from 'prop-types';
import './newsList.module.scss';
import { Fragment } from 'react';

const NewsList = props => {
  const newsModified = [[],[]];
  const defaultNewsArr = props.news;

  defaultNewsArr.forEach((article, index) => {
    if (index % 2) {
      newsModified[0].push(article);
    } else {
      newsModified[1].push(article);
    }
  });

  const renderAriclesContainer = (articles, index) => {
    return (
      <div className="articles-container" key={index}>
        { articles.map((article, index) => (
          <div key={index} className="article-item">
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
          </div>
        )) }
      </div>
    )
  };

  return (
    <Fragment>
      <div className="article-containers-wrapper desktop-container">
        {newsModified.map((articlesSet, index) => renderAriclesContainer(articlesSet, index))}
      </div>

      <div className="article-containers-wrapper mobile-container">
        {renderAriclesContainer(defaultNewsArr)}
      </div>
    </Fragment>
  );
};

NewsList.propTypes = {
  news: propTypes.array
};

export default NewsList;