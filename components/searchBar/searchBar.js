import 'date-fns';
import { useState } from 'react';
import propTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import SortIcon from '@material-ui/icons/Sort';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TuneIcon from '@material-ui/icons/Tune';
import { sortOptions, languages } from '../../constants';
import './searchBar.module.scss';

const SearchBar = props => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [language, setLanguage] = useState('');
  const [showFilter, setShowFilter] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery !== '') {
      const targetFromDate = fromDate ? new Date(fromDate) : undefined;
      const targetToDate = toDate ? new Date(toDate) : undefined;

      props.searchNews(searchQuery, targetFromDate, targetToDate, sortBy, language);
    }
  }

  const toggleFilters = () => {
    setShowFilter(!showFilter)
  }

  const renderDates = () => {
    return <div className="date-container">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="from date:"
          value={fromDate}
          onChange={setFromDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="to date:"
          value={toDate}
          onChange={setToDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  }

  const renderSortFilter = () => {
    return <div className="sort-boxes">
      <SortIcon />
      <FormControl>
        <Select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <MenuItem value=''></MenuItem>
          {sortOptions.map((option, index) => (
            <MenuItem
              key={index} value={option}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  }

  const filterLanguage = () => {
    return <div className="sort-boxes">
      <LanguageIcon />
      <FormControl>
        <Select
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <MenuItem value=''></MenuItem>
          {languages.map((language, index) => (
            <MenuItem
              key={index} value={language}
            >
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  }

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="logo.png" className="main-logo" alt="main-logo" />
        <div className="sub-header">The trending news finder</div>
      </div>
      <form onSubmit={handleSubmit} className="search-form">
        <h3>What are you looking for today?</h3>
        <div className="d-flex">
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
          <IconButton aria-label="filter" className="filter-button" onClick={toggleFilters}>
            <TuneIcon />
          </IconButton>
        </div>

        {showFilter && <div className="filter-bar">
        <div className="filter-sub-header">Add your filters:</div>
          {renderDates()}
          <div className="sort-container">
            {renderSortFilter()}
            {filterLanguage()}
          </div>
        </div>}

      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchNews: propTypes.func
};

export default SearchBar;