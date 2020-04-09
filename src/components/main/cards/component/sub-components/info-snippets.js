import React from 'react';
import { GoLocation, GoPerson } from 'react-icons/go';
import { GiIsland } from 'react-icons/gi';
import { MdGroup } from 'react-icons/md';
import { FaDollarSign, FaVectorSquare } from 'react-icons/fa';

class InfoSnippets extends React.Component {
  render() {
    const {
      price,
      lotArea,
      propertyType,
      address,
      seller,
      parentOrganization,
      propertyDeveloper
    } = this.props.snippets;

    return (
      <div className="info-snippets">
        <div>
          <FaDollarSign />

          <span className="small-text">{price.toLocaleString()}</span>
        </div>
        <div>
          <FaVectorSquare />
          <span className="small-text">{lotArea + ' sqm'}</span>
        </div>
        <div>
          <GoLocation />
          <span className="small-text">
            {address.barangay + ' ' + address.city}
          </span>
        </div>
        <div>
          <GiIsland />
          <span className="small-text">{propertyType}</span>
        </div>
        <div>
          <GoPerson />
          <span className="small-text">{seller}</span>
        </div>
        <div>
          <MdGroup />
          <span className="small-text">{parentOrganization}</span>
        </div>
        <div>
          <GiIsland />
          <span className="small-text">{propertyDeveloper}</span>
        </div>
      </div>
    );
  }
}

export default InfoSnippets;
