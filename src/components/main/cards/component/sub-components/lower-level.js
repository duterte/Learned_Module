import React from 'react';
import { FiMessageSquare, FiShare2 } from 'react-icons/fi';
import { MdThumbUp } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';

class LowerLevel extends React.Component {
  render() {
    const { inquiries, shares, likes, views } = this.props.lowerlevel.stats;
    return (
      <div className="lower-level">
        <div className="lower-container">
          <div className="inquiries">
            <span className="icon">
              <FiMessageSquare />
            </span>
            <span className="num">{inquiries > 0 ? inquiries : ''}</span>
          </div>
          <div className="shares">
            <span className="icon">
              <FiShare2 />
            </span>
            <span className="num">{shares > 0 ? shares : ''}</span>
          </div>
          <div className="likes">
            <span className="icon">
              <MdThumbUp />
            </span>
            <span className="num">{likes > 0 ? likes : ''}</span>
          </div>
          <div className="views">
            <span className="icon">
              <FaRegEye />
            </span>
            <span className="num">{views > 0 ? views : ''}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LowerLevel;
