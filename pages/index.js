import Head from 'next/head';
import SectionHeader from '../components/sectionHeader';
import NewsList from '../components/newsList';
import NewsService from '../services/news';
import { Fragment } from 'react/cjs/react.production.min';

const Home = props => {
  return (
    <Fragment>
      <Head>
        <title>News Aggregator</title>
      </Head>

      <SectionHeader text="top headlines" />

      <NewsList news={props.topHeadlines} />
    </Fragment>
  );
};

Home.getInitialProps = async () => {
  const newsApiTopHeadlines = await NewsService();

  return {
    topHeadlines: newsApiTopHeadlines
  };
};

export default Home;
