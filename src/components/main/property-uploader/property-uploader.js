import React from 'react';
import '../../css/property-uploader.css';

class PropertyUploader extends React.Component {
  render() {
    return (
      <form className="uploader">
        <h2 className="heading">Upload Your Property</h2>
        <div className="file-uploader">
          <span>Upload Picture</span>
        </div>

        <div className="inputs">
          <label>
            <b>Title:</b>
            <input className="border" type="text" inputMode="text" />
          </label>
          <label>
            <b>Price:</b>
            <input className="border" type="text" inputMode="numeric" />
          </label>
          <label>
            <b>Lot Area:</b>
            <input className="border" type="text" inputMode="numeric" />
          </label>
          <label>
            <b>Property tol sell:</b>
            <select className="border">
              <option value=""></option>
              <option value="Lot">Lot</option>
              <option value="House and Lot">House and Lot</option>
              <option value="Condominium">Condominium</option>
              <option value="Apartment">Apartment</option>
            </select>
          </label>
          <label>
            <b>Location:</b>
            <input type="text" className="border" inputMode="text" />
          </label>
        </div>

        <div className="txt-area">
          <b>Details:</b>
          <textarea rows="10" className="border"></textarea>
        </div>
        <div className="submit">
          <input className="btn-border" type="submit" value="UPLOAD" />
        </div>
      </form>
    );
  }
}

export default PropertyUploader;
