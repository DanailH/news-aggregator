import { useState } from 'react';
import propTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

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
      <style jsx>{`
        .search-bar {
          margin-top: 50px;
          position: -webkit-sticky;
          border-radius: 25px;
          border: 1px solid #dbdbdb;
          background: #f6f6f6;
          max-width: 40%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          /* Safari */
          position: sticky;
          top: 20px;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1.5rem 0.75rem;
          font-size: 0.8rem;
          border-radius: 25px;
          border: none;
          background: #f6f6f6;
        }

        .search-input:focus,
        .search-button:focus {
          outline: none;
        }

        .search-button {
          background: transparent;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};

SearchBar.propTypes = {
  searchNews: propTypes.func
};

export default SearchBar;