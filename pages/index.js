import { useState } from 'react';
import propTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';
import Head from 'next/head';
import SectionHeader from '../components/sectionHeader/sectionHeader';
import NewsList from '../components/newsList/newsList';
import { getTopHeadlines, getSearchedHeadlines } from '../services/news';
import SearchBar from '../components/searchBar/searchBar';
import LoadMoreButton from '../components/loadMoreButton/loadMoreButton';
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
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','UA-162693545-1');`}}
        />
      </Head>
      <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-162693545-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />

      <SearchBar searchNews={handleNewsSearch} />

      <SectionHeader text={searchQuery} />
      <NewsList news={headlines} />
      <LoadMoreButton loadMoreArticles={handleLoadMoreActicles}/>
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
