import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { GoReport } from 'react-icons/go';
import { FaRegBookmark } from 'react-icons/fa';

class TopLevel extends React.Component {
  render() {
    const { posted, modified } = this.props;
    return (
      <div className="top-level">
        <div className="left">
          <FaRegClock className="icon" />
          <div className="posted">
            <pre>
              <span>Posted </span>
              <time>{posted}</time>
            </pre>
          </div>
          <div className="modefied">
            <pre>
              <span> | Modified </span>
              <time>{modified}</time>
            </pre>
          </div>
        </div>
        <div className="right">
          <FaRegBookmark className="save" />
          <GoReport className="warning" />
        </div>
      </div>
    );
  }
}

export default TopLevel;
