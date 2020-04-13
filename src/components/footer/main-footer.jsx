import React, { Fragment } from 'react';
import './main-footer.css';
import { AiOutlineToTop } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoLogoFacebook } from 'react-icons/io';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

class MainFooter extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="top">
          <AiOutlineToTop className="icon" />
          <a href="#nav-top">GO TO TOP OF PAGE</a>
        </div>
        <div className="middle">
          <div className="subscribe">
            <h3>Get notified through email</h3>
            <p>
              If you would like to receive updates like new listings and more.
              Subscribing your email may come in handy.
            </p>
            <div className="email-input">
              <input type="text" placeholder="Put your email here." />
              <MdEmail className="icon" />
            </div>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <pre className="email">
              <b>Email:</b> <em>Administrator@bahandi.com</em>
            </pre>
            <pre className="tel">
              <b>Tel:</b> 0916 478 3880
            </pre>
          </div>
          <div className="links">
            <a href="http://www.germanochea.com">Bahandi.com</a>
            <a href="http://www.germanochea.com">Browsing History</a>
            <a href="http://www.germanochea.com">Help</a>
            <a href="http://www.germanochea.com">About Us</a>
            <a href="http://www.germanochea.com">Post Your Property</a>
            <a href="http://www.germanochea.com">Meet our professional</a>
            <a href="http://www.germanochea.com">Find Agent</a>
            <a href="http://www.germanochea.com" target="_blank">
              Articles and Blog
            </a>
          </div>
          <div className="social-media">
            <h3>Connect With Us</h3>
            <div className="icon-holder">
              <IoLogoFacebook className="icon facebook" />
              <FaTwitter className="icon twitter" />
              <FaInstagram className="icon instagram" />
              <FaLinkedin className="icon linkedIn" />
            </div>
          </div>
        </div>
        <div className="bottom">&copy; All Rights Reserve 2020</div>
      </Fragment>
    );
  }
}

export default MainFooter;
