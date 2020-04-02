import { useState } from 'react';
import propTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { sortOptions, languages } from '../../constants';
import './searchBar.module.scss';

const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [language, setLanguage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery !== '') {
      const targetFromDate = fromDate ? new Date(fromDate) : undefined;
      const targetToDate = toDate ? new Date(toDate) : undefined;

      props.searchNews(searchQuery, targetFromDate, targetToDate, sortBy, language);
    }
  }

  return (
    <div className="header-container">
      <img src="logo.png" className="main-logo" />
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search for topics, sources"
          />

          <button type="submit" className="search-button">
            <SearchIcon />
          </button>
        </div>

        <label>From date:</label>
        <input
          type="date"
          value={fromDate}
          onChange={e => setFromDate(e.target.value)}
        />

        <label>To date:</label>
        <input
          type="date"
          value={toDate}
          onChange={e => setToDate(e.target.value)}
        />

        <label>Sort by:</label>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          { sortOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          )) }
        </select>

        <label>Language:</label>
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <option value=""></option>
          { languages.map((language, index) => (
            <option key={index} value={language}>{language}</option>
          )) }
        </select>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchNews: propTypes.func
};

export default SearchBar;