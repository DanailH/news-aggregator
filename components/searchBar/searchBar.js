import { useState } from 'react';
import propTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import './searchBar.module.scss';

const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery !== '') {
      props.searchNews(searchQuery);
    }
  }

  return (
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
  );
};

SearchBar.propTypes = {
  searchNews: propTypes.func
};

export default SearchBar;