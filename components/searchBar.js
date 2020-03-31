import { useState } from 'react';
import propTypes from 'prop-types';

const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    props.searchNews(searchQuery);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  searchNews: propTypes.func
};

export default SearchBar;