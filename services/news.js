import fetch from 'isomorphic-unfetch';
import { newsApiKey, newsApi } from '../constants';

const NewsService = async (type = 'top-headlines', language = 'en') => {
  const res = await fetch(`${newsApi}/${type}?language=${language}&apiKey=${newsApiKey}`);
  const data = await res.json();

  return data;
};

export default NewsService;