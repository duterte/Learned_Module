import React from 'react';
import './listings.css';

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <img src="images/Garden.jpg" alt="Garden" />
        <span className="caption">Lorem ipsum dolor sit amet.</span>
      </div>
    );
  }
}

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mousedown: false,
      scrollX: 0,
    };
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  scroll(e) {
    // console.log(e.currentTarget.scrollLeft);
    this.setState({ scrollX: e.currentTarget.scrollLeft });
  }
  mouseDown() {
    this.setState({ mousedown: true });
  }
  mouseMove(e) {
    e.preventDefault();
    const { mousedown, scrollX } = this.state;
    const element = document.querySelector(`#${this.props.id}`);
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    if (mousedown) {
      element.scrollLeft = scrollX;
      if (scrollX < 0) {
        this.setState({ scrollX: 0 });
      } else if (scrollX > maxScrollLeft) {
        this.setState({ scrollX: maxScrollLeft });
      } else {
        this.setState({ scrollX: scrollX + -e.movementX });
      }
    }
  }
  mouseUp() {
    this.setState({ mousedown: false });
  }
  mouseLeave() {
    this.setState({ mousedown: false });
  }

  UNSAFE_componentWillUpdate() {
    const { scroller } = this.props;
    console.log(scroller);

    if (scroller) {
      const element = document.querySelector(`#${this.props.id}`);
      element.scrollLeft += 10;
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <div
        className="lists"
        id={this.props.id}
        onMouseDown={this.mouseDown}
        onMouseMove={this.mouseMove}
        onMouseUp={this.mouseUp}
        onMouseLeave={this.mouseLeave}
        onScrollCapture={this.scroll}
      >
        <div className="content">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}

export default Listings;
