import React from 'react';

class CategorySection extends React.Component {
  render() {
    return (
      <div className="category-section">
        <p className="text">
          Either way you can also browse aproperty base on a category
        </p>
        <div className="lot">
          <h2>Lot Property</h2>
        </div>
        <div className="house-lot">
          <h2>House and Lot</h2>
        </div>
        <div className="condu">
          <h2>Conduminium</h2>
        </div>
        <div className="aprtmnt">
          <h2>Apartment</h2>
        </div>
      </div>
    );
  }
}

export default CategorySection;
