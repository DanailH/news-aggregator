import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import './searchBar.module.scss';

const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState(props.searchQuery);

  useEffect(() => {
    setSearchQuery(props.searchQuery);
  }, [props.searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery !== '') {
      props.searchNews(searchQuery);
    }
  }

  return (
    <div className="header-container">
      <img src="logo.png" className="main-logo" />
      <form onSubmit={handleSubmit} className="search-bar">
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
      </form>

      <button onClick={props.loadTopHeadlines}>Back to Top Headlines</button>
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: propTypes.string,
  searchNews: propTypes.func,
  loadTopHeadlines: propTypes.func
};

export default SearchBar;