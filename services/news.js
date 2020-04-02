import fetch from 'isomorphic-unfetch';
import { newsApiKey, newsApi } from '../constants';

export const getTopHeadlines = async (language = 'en') => {
  const res = await fetch(`${newsApi}/top-headlines?language=${language}&pageSize=10&apiKey=${newsApiKey}`);
  const data = await res.json();

  return data;
};

export const getSearchedHeadlines = async (query, fromDate = undefined, toDate = new Date(), sortBy = 'publishedAt', page = 1, language = 'en') => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  if (!fromDate || +oneMonthAgo > +fromDate) {
    fromDate = oneMonthAgo;
  }

  const res = await fetch(`${newsApi}/everything?qInTitle=${query}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&soryBy=${sortBy}&pageSize=10&page=${page}&language=${language}&apiKey=${newsApiKey}`);
  const data = await res.json();

  return data;
};

// TODO: search filters:
//  - fromDate
//  - toDate
//  - sortBy
//  - country