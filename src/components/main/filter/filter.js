import React from 'react';
import './filter.css';
import Head from './components/head';
import Location from './components/location';

class Filter extends React.Component {
  cityCount() {
    const property = this.props.property;
    let cities = property.map((item) => {
      return item.address.city;
    });
    var tracer = [];
    var cityCount = [];
    for (let i = 0; i < cities.length; i++) {
      let a = tracer.find((item) => {
        return item === cities[i];
      });
      if (Boolean(!a)) {
        let b = cities.filter((city) => {
          return city === cities[i];
        });
        cityCount.push(b);
      }
      tracer[i] = cities[i];
    }
    return cityCount;
  }
  render() {
    const [...cities] = this.cityCount();

    return (
      <div className="filter">
        <Head />
        <Location cityCount={cities} delete={this.props.delete} />
      </div>
    );
  }
}

export default Filter;
