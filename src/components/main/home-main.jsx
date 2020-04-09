import React, { Fragment } from 'react';
import Carousel from './carousel/carousel.jsx';
import LotListing from './listing/lot-listing.jsx';
import './css/home-main.css';
class HomeMain extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="upper">
          <Carousel id={`carouse-${1}`} />
          <Carousel id={`carouse-${2}`} />
        </div>
        <div className="category">
          <LotListing />
        </div>
      </Fragment>
    );
  }
}

export default HomeMain;
