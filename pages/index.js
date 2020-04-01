import { useState } from 'react';
import propTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';
import Head from 'next/head';
import SectionHeader from '../components/sectionHeader/sectionHeader';
import NewsList from '../components/newsList/newsList';
import { getTopHeadlines, getSearchedHeadlines } from '../services/news';
import SearchBar from '../components/searchBar/searchBar';

const Home = props => {
  const [searchQuery, setSearchQuery] = useState(props.searchQuery);
  const [headlines, setHeadlines] = useState(props.topHeadlines);

  const handleNewsSearch = async query => {
    const newsApiSearchedHeadlines = await getSearchedHeadlines(query);

    setHeadlines(newsApiSearchedHeadlines.articles);
    setSearchQuery(query);
  };

  return (
    <Fragment>
      <Head>
        <title>The News Loader</title>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet" />
      </Head>
      <style global jsx>{`
       body {
         font-family: 'Lato', sans-serif;
       }
       `}</style>

      <SearchBar searchNews={handleNewsSearch} />

      <SectionHeader text={searchQuery} />

      <NewsList news={headlines} />
    </Fragment>
  );
};

Home.getInitialProps = async () => {
  const newsApiTopHeadlines = await getTopHeadlines();

  return {
    searchQuery: 'top',
    topHeadlines: newsApiTopHeadlines.articles
  };
};

Home.propTypes = {
  searchQuery: propTypes.string,
  topHeadlines: propTypes.array
};

export default Home;
