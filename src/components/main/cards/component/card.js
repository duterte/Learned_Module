import React from 'react';
import TopLevel from './sub-components/top-level';
import Detail from './sub-components/detail';
import Picture from './sub-components/picture';
import InfoSnippets from './sub-components/info-snippets';
import LowerLevel from './sub-components/lower-level';
import moment from 'moment';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      posted: '',
      modified: ''
    };
  }
  dotClickHandler = e => {
    let node = e.currentTarget;
    let num = Number(node.id.split('-')[1]);
    this.setState({ index: num });
    // node.parentElement.querySelectorAll('button').forEach(element => {
    //   element.classList.remove('active');
    // });
    // node.classList.add('active');
  };
  prev = () => {
    const imgLen = this.props.property.img.length;
    const index = this.state.index;
    if (index === 0) {
      let num = imgLen - 1;
      this.setState({ index: num });
    } else {
      let num = index - 1;
      this.setState({ index: num });
    }
  };

  next = () => {
    let imgLen = this.props.property.img.length - 1;
    const index = this.state.index;
    if (index < imgLen) {
      let num = this.state.index + 1;
      this.setState({ index: num });
    } else {
      this.setState({ index: 0 });
    }
  };
  handleMouserOver(e) {
    if (e.target.firstElementChild) {
      e.target.firstElementChild.classList.add('show');
    }
  }

  handleMouseLeave(e) {
    if (e.target.firstElementChild) {
      e.target.firstElementChild.classList.remove('show');
    }
  }

  componentDidMount() {
    const property = this.props.property;
    const originalPostDate = property.originalPostDate;
    const modificationDates =
      property.modificationDates[property.modificationDates.length - 1];

    let post = moment(
      `${originalPostDate.date} ${originalPostDate.time}`,
      'MM/DD/YYYY hh:mm:ss a'
    ).fromNow();
    let modify = moment(
      `${modificationDates.date} ${modificationDates.time}`,
      'MM/DD/YYYY hh:mm:ss a'
    ).fromNow();
    this.setState({ posted: post, modified: modify });
  }

  render() {
    const { posted, modified, index } = this.state;
    const { title, details, img } = this.props.property;
    return (
      <figure className="thumbnail">
        <TopLevel posted={posted} modified={modified} />

        <div className="product-title">
          <h2>{title}</h2>
        </div>

        <Detail details={details} />
        <Picture
          prev={this.prev}
          next={this.next}
          mouseover={this.handleMouserOver}
          mouseleave={this.handleMouseLeave}
          dot={this.dotClickHandler}
          index={index}
          img={img}
        />
        <InfoSnippets snippets={this.props.property} />
        <LowerLevel lowerlevel={this.props.property} />
      </figure>
    );
  }
}

export default Card;
