import React, { Fragment } from 'react';
import { FaTimes } from 'react-icons/fa';

class Head extends React.Component {
  render() {
    return (
      <Fragment>
        <h2 className="heading">Filter Result</h2>
        <div className="close">
          <FaTimes />
        </div>
      </Fragment>
    );
  }
}

export default Head;
