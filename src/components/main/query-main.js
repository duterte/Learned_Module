import React, { Fragment, Component } from 'react';
import Cards from './cards/cards';
import Filter from './filter/filter';
import './css/query-main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: [],
      reserve: [],
      deleted: [],
    };
    this.deleteLocation = this.deleteLocation.bind(this);
  }

  deleteLocation(city, e) {
    if (!e.currentTarget.checked) {
      // remove component
      let include = this.state.property.filter((item) => {
        return item.address.city !== city;
      });
      let exclude = this.state.property.filter((item) => {
        return item.address.city === city;
      });
      let deleted = this.state.deleted;
      exclude.forEach((item) => deleted.push(item));
      this.setState({ property: include, deleted: deleted });
    } else {
      // reinstate component
      let include = this.state.deleted.filter((item) => {
        return item.address.city === city;
      });
      let exclude = this.state.deleted.filter((item) => {
        return item.address.city !== city;
      });
      let property = this.state.property;
      include.forEach((item) => property.unshift(item));
      this.setState({ property: property, deleted: exclude });
    }
  }

  componentDidMount() {
    fetch('property.json')
      .then((response) => response.json())
      .then((result) => {
        const tempVar = result.map((item) => {
          return item;
        });
        this.setState({ property: tempVar, reserve: tempVar });
      });
  }

  render() {
    if (this.state.property.length === 0 && this.state.reserve.length === 0) {
      return null;
    }
    return (
      <Fragment>
        <Filter property={this.state.reserve} delete={this.deleteLocation} />
        <div className="cards">
          <Cards property={this.state.property} />
        </div>
      </Fragment>
    );
  }
}

export default Main;
