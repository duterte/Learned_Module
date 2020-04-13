import React, { Fragment } from 'react';
import Carousel from './carousel/carousel.jsx';
import Listings from './listing/listings.jsx';
// import Explorer from './explorer/explorer.jsx';
import './css/home-main.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

class MouseButton extends React.Component {
  render() {
    return (
      <button className={this.props.side} onClick={this.props.event}>
        {this.props.side === 'right' ? <FaArrowRight /> : <FaArrowLeft />}
      </button>
    );
  }
}

class HomeMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick() {
    this.setState({ scroll: true });
  }
  render() {
    const MouseLeft = <MouseButton side="left" event={this.buttonClick} />;
    const MouseRight = <MouseButton side="right" event={this.buttonClick} />;
    const span = <span>swipe left to view more</span>;
    const scroller = this.state.scroll;
    return (
      <Fragment>
        <div className="upper">
          <Carousel id={`carouse-${1}`} />
          <Carousel id={`carouse-${2}`} />
        </div>
        <div className="listings">
          <div className="heading">
            {navigator.maxTouchPoints === 0 ? MouseLeft : null}
            <h2>Recommended Property</h2>
            {navigator.maxTouchPoints === 0 ? MouseRight : span}
          </div>
          <Listings id="lists-1" scroller={scroller} />
          <div className="heading">
            {navigator.maxTouchPoints === 0 ? MouseLeft : null}
            <h2>New Listings</h2>
            {navigator.maxTouchPoints === 0 ? MouseRight : span}
          </div>
          <Listings id="lists-2" scroller={scroller} />
        </div>
        <div className="bottom"></div>
      </Fragment>
    );
  }
}

export default HomeMain;
