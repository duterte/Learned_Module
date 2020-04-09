import React from 'react';

class Location extends React.Component {
  idMaker() {
    const cityCount = this.props.cityCount;
    return cityCount.map((item, i) => {
      return item[0].split(' ')[0].toLowerCase();
    });
  }
  render() {
    const cityCount = this.props.cityCount;
    const idMaker = this.idMaker();
    const city = cityCount.map((item, i) => (
      <li key={idMaker[i]}>
        <label htmlFor={idMaker[i]}>
          <input
            type="checkbox"
            id={idMaker[i]}
            defaultChecked
            onChange={e => this.props.delete(item[0], e)}
          />
          {`${item[0]} (${item.length})`}
        </label>
      </li>
    ));

    return (
      <div className="location">
        <div className="heading">
          <b>Location</b>
        </div>
        <ul className="opt">{city}</ul>
      </div>
    );
  }
}

export default Location;
