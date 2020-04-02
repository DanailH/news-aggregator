import { useState } from 'react';
import propTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';
import Head from 'next/head';
import SectionHeader from '../components/sectionHeader/sectionHeader';
import NewsList from '../components/newsList/newsList';
import { getTopHeadlines, getSearchedHeadlines } from '../services/news';
import SearchBar from '../components/searchBar/searchBar';
import LoadMoreButton from '../components/loadMoreButton/loadMoreButton';

const Home = props => {
  const [searchQuery, setSearchQuery] = useState(props.searchQuery);
  const [headlines, setHeadlines] = useState(props.topHeadlines);

  const handleNewsSearch = async query => {
    if(query === 'top') {
      handleLoadTopHeadlines();
    } else {
      const newsApiSearchedHeadlines = await getSearchedHeadlines(query);

      setHeadlines(newsApiSearchedHeadlines.articles);
      setSearchQuery(query);
    }
  };

  const handleLoadTopHeadlines = async () => {
    const newsApiTopHeadlines = await getTopHeadlines();

    setHeadlines(newsApiTopHeadlines.articles);
    setSearchQuery('top');
  };

  return (
    <Fragment>
      <Head>
        <title>The News Load</title>
      </Head>

      <SearchBar searchQuery={searchQuery} searchNews={handleNewsSearch} loadTopHeadlines={handleLoadTopHeadlines} />

      <SectionHeader text={searchQuery} />
      <NewsList news={headlines} />
      <LoadMoreButton/>
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
