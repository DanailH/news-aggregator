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
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(props.searchQuery);
  const [headlines, setHeadlines] = useState(props.topHeadlines);

  const handleNewsSearch = async (query, fromDate, toDate, sortBy, language) => {
    const newsApiSearchedHeadlines = await getSearchedHeadlines(page, query, fromDate, toDate, sortBy, language);

    setHeadlines(newsApiSearchedHeadlines);
    setSearchQuery(query);
  };

  return (
    <Fragment>
      <Head>
        <title>The News Load</title>
      </Head>

      <SearchBar searchNews={handleNewsSearch} />

      <SectionHeader text={searchQuery} />
      <NewsList news={headlines} />
      <LoadMoreButton/>
    </Fragment>
  );
};

Home.getInitialProps = async () => {
  const newsApiTopHeadlines = await getTopHeadlines();

  return {
    topHeadlines: newsApiTopHeadlines
  };
};

Home.propTypes = {
  searchQuery: propTypes.string,
  topHeadlines: propTypes.array
};

export default Home;
