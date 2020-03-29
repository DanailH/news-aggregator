const NewsList = props => {
  return (
    <ul>
      { props.news.articles.map((article, index) => (
        <li key={index}>
          <a href={article.url} target="_blank">{article.title}</a></li>
      )) }
    </ul>
  );
};

export default NewsList;