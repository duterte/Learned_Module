import React, { Fragment } from 'react';
import SearchInput from './new-component/search-input';
import './css/query-header.css';

class QueryHeader extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <SearchInput />
      </Fragment>
    );
  }
}

export default QueryHeader;
