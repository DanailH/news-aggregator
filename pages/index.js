import { useState } from 'react';
import propTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';
import Head from 'next/head';
import SectionHeader from '../components/sectionHeader/sectionHeader';
import NewsList from '../components/newsList/newsList';
import { getTopHeadlines, getSearchedHeadlines } from '../services/news';
import SearchBar from '../components/searchBar/searchBar';
import LoadMoreButton from '../components/loadMoreButton/loadMoreButton';
import Layout from '../components/layout/layout';
import { sortOptions } from '../constants';


const Home = props => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(props.searchQuery);
  const [headlines, setHeadlines] = useState(props.topHeadlines);
  const [fromDate, setFromDate] = useState(undefined);
  const [toDate, setToDate] = useState(undefined);
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [language, setLanguage] = useState('');

  const handleNewsSearch = async (query, fromDate, toDate, sortBy, language) => {
    const newsApiSearchedHeadlines = await getSearchedHeadlines(page, query, fromDate, toDate, sortBy, language);

    setHeadlines(newsApiSearchedHeadlines);
    setSearchQuery(query);
    setFromDate(fromDate);
    setToDate(toDate);
    setSortBy(sortBy);
    setLanguage(language);
  };

  const handleLoadMoreActicles = async () => {
    const nextPage = page + 1;

    if (searchQuery === 'top') {
      const newsApiTopHeadlines = await getTopHeadlines(nextPage);

      setHeadlines([...headlines, ...newsApiTopHeadlines]);
      setPage(nextPage);
    } else {
      const newsApiSearchedHeadlines = await getSearchedHeadlines(nextPage, searchQuery, fromDate, toDate, sortBy, language);

      setHeadlines([...headlines, ...newsApiSearchedHeadlines]);
      setPage(nextPage);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>The News Load</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news, today's news, top news, top news, trending news, what happen today, new from today, filtered news, personal news load, news load, thenewsload, newsload, world news, my news, current news, news today"/>
        <meta name="description" content="The easiest way to search for any trending news both domestically and internationally" />
        <meta name="title" content="TheNewsLoad | The trending news finder"/>
        <meta property="og:title" content="TheNewsLoad | The trending news finder"/>
        <meta property="og:url" content="https://www.thenewsload.com/"/>
        <meta property="og:type" content="webapp"/>
        <meta property="og:site_name" content="theNewsLoad"/>
        <meta itemprop="name" content="TheNewsLoad | The trending news finder"/>
        <meta itemprop="url" content="https://www.thenewsload.com/"/>
        <meta itemprop="description" content="The easiest way to search for any trending news both domestically and internationally."/>

      </Head>

      <Layout>
        <SearchBar searchNews={handleNewsSearch} />

        <SectionHeader text={searchQuery} />
        <NewsList news={headlines} />
        <LoadMoreButton loadMoreArticles={handleLoadMoreActicles}/>
      </Layout>
    </Fragment>
  );
};

Home.getInitialProps = async () => {
  const newsApiTopHeadlines = await getTopHeadlines();

  return {
    searchQuery: 'top',
    topHeadlines: newsApiTopHeadlines
  };
};

Home.propTypes = {
  searchQuery: propTypes.string,
  topHeadlines: propTypes.array
};

export default Home;
