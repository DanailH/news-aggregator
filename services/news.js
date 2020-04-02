import fetch from 'isomorphic-unfetch';
import { newsApiKey, newsApi } from '../constants';

export const getTopHeadlines = async (page = 1, language = 'en') => {
  const res = await fetch(`${newsApi}/top-headlines?language=${language}&pageSize=10&page=${page}&apiKey=${newsApiKey}`);
  const data = await res.json();

  return data.articles.filter(article => (article.title && article.title !== ''));
};

export const getSearchedHeadlines = async (page = 1, query, fromDate = undefined, toDate = new Date(), sortBy = 'publishedAt', language = 'en') => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  if (!toDate) {
    toDate = new Date();
  }

  if (!fromDate || +oneMonthAgo > +fromDate || +fromDate > +toDate) {
    fromDate = oneMonthAgo;
  }

  if (!language) {
    language = 'en';
  }

  const res = await fetch(`${newsApi}/everything?qInTitle=${query}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&soryBy=${sortBy}&pageSize=10&page=${page}&language=${language}&apiKey=${newsApiKey}`);
  const data = await res.json();

  return data.articles.filter(article => (article.title && article.title !== ''));
};