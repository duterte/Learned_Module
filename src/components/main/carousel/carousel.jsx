import React from 'react';
import './carousel.css';
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti';

class Item extends React.Component {
  render() {
    return (
      <div className="item" id={this.props.id ? this.props.id : null}>
        <img src={this.props.src} alt={this.props.alt} />
        <div className="badges">
          <div className="type-of-selling">For Sale</div>
          <div className="type-of-property">Condominium</div>
          <div className="property-status">Ready For Occupancy</div>
        </div>
        <div className="title">Lorem ipsum dolor sit.</div>
      </div>
    );
  }
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: '',
      item: '',
      counter: 1,
      size: 0,
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.loop = this.loop.bind(this);
    this.startLoop = this.startLoop.bind(this);
    this.stopLoop = this.stopLoop.bind(this);
  }

  loop() {
    let promise = new Promise((resolve, reject) => {
      const { item, counter } = this.state;
      let loaded = item[counter] ? true : false;
      if (loaded) {
        resolve();
      }
    });
    return promise.then(this.next);
  }
  startLoop() {
    this.loopInterval = setInterval(this.loop, 10000);
  }
  stopLoop() {
    clearInterval(this.loopInterval);
  }
  transitionEnd() {
    const { slide, item, counter } = this.state;
    const size = item[1].querySelector('img').clientWidth;
    let number;
    if (item[counter].id === 'last') {
      slide.style.transition = 'none';
      number = item.length - 2;
      slide.style.transform = `translate(${-size * number}px)`;
      this.setState({ counter: number });
    } else if (item[counter].id === 'first') {
      slide.style.transition = 'none';
      number = 1;
      slide.style.transform = `translate(${-size * number}px)`;
      this.setState({ counter: number });
    }
  }
  prev() {
    const { slide, item, counter } = this.state;
    const size = item[counter].clientWidth;
    let number;

    if (counter <= 0) return;
    number = counter - 1;
    slide.style.transition = `transform 0.4s ease-in-out`;
    slide.style.transform = `translateX(${-size * number}px)`;
    this.setState({ counter: number });
  }

  next() {
    const { slide, item, counter } = this.state;
    const size = item[counter].clientWidth;
    let number;
    if (counter >= item.length - 1) return;
    number = counter + 1;
    slide.style.transition = `transform 0.4s ease-in-out`;
    slide.style.transform = `translateX(${-size * number}px)`;
    this.setState({ counter: number });
  }

  componentDidMount() {
    const slide = document.querySelector(`#${this.props.id} > .slide`);
    const item = document.querySelectorAll(`#${this.props.id} .item`);
    const size = item[1].clientWidth;
    slide.style.transform = `translate(${-size * 1}px)`;

    this.setState({
      slide: slide,
      item: item,
    });

    this.startLoop();
  }

  componentWillUnmount() {
    this.setState({
      slide: '',
      item: '',
    });
    clearInterval(this.loopInterval);
  }
  render() {
    const folder = `carousel-images/`;
    const { id } = this.props;
    return (
      <div
        className="carousel"
        id={id}
        onMouseOver={this.stopLoop}
        onMouseLeave={this.startLoop}
      >
        <div className="slide" onTransitionEnd={this.transitionEnd}>
          <Item src={`${folder}Town House.jpg`} alt="Town House" id="last" />
          <Item src={`${folder}Garden.jpg`} alt="Garden" />
          <Item src={`${folder}Inside.jpg`} alt="Inside" />
          <Item src={`${folder}Lot For Sale.jpg`} alt="Lot For Sale" />
          <Item src={`${folder}Puyo Dayon.jpg`} alt="Puyo Dayon" />
          <Item src={`${folder}Town House.jpg`} alt="Town House" />
          <Item src={`${folder}Garden.jpg`} alt="Garden" id="first" />
        </div>
        <TiArrowLeftOutline className="prev" onClick={this.prev} />
        <TiArrowRightOutline className="next" onClick={this.next} />
      </div>
    );
  }
}

export default Carousel;
