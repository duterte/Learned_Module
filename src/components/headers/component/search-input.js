import React from 'react';
import { GoSearch } from 'react-icons/go';

class SearchInput extends React.Component {
  state = {};
  render() {
    return (
      <div className="search">
        <input type="text" placeholder="search" />
        <GoSearch className="search-icon" />
      </div>
    );
  }
}

export default SearchInput;
