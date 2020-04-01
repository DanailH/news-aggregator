import propTypes from 'prop-types';

const NewsList = props => {
  console.log(props.news)
  return (
    <div>
      <ul>
        {props.news.map((article, index) => (
          <li key={index} className="article-item">
            {/* <a href={article.url} className="article-link" target="_blank" rel="noopener">
            </a>*/}
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
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
        }
        .article-item {
          display: flex;
          padding: 6px 0;
        }
        .url-container {
          flex: 1;
        }
        .url-container img {
          max-width: 100%;
          height: auto;
          width: 60%;
        }
        .article-text {
          flex:2;
          padding: 6px 18px 6px 0;
          margin-right: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          border-bottom: 1px solid rgba(0,0,0,.09);
        }
        .article-title {
          font-size: 1.1rem;
        }
        .article-details {
          color: #737373;
          font-size: 0.85rem;
        }
        .article-details span{
          padding: 0 6px;
        }
        .article-link {
          color: black;
          text-decoration: none;
        }
        .article-link:hover {
          text-decoration: underline;
          color:red;
        }
     `}</style>
    </div>
  );
};

NewsList.propTypes = {
  news: propTypes.array
};

export default NewsList;