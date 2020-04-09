import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

class Detail extends React.Component {
  render() {
    return (
      <div className="detail" translate="yes">
        <p>{this.props.details}</p>
        <div className="show-more">
          <FaAngleDoubleDown />
        </div>
      </div>
    );
  }
}

export default Detail;
