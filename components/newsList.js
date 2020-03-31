import propTypes from 'prop-types';

const NewsList = props => {
  return (
    <ul>
      { props.news.map((article, index) => (
        <li key={index}>
          <a href={article.url} target="_blank">{article.title}</a>
        </li>
      )) }
    </ul>
  );
};

NewsList.propTypes = {
  news: propTypes.array
};

export default NewsList;