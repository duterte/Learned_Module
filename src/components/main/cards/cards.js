import React from 'react';
import './cards.css';
import Card from './component/card';

class Cards extends React.Component {
  render() {
    const card = this.props.property.map((item, i) => (
      <Card key={i} property={item} />
    ));

    return card;
  }
}

export default Cards;
