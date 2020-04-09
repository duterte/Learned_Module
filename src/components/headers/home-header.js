import React, { Component } from 'react';
import './css/home-header.css';
import Logo from './component/logo-area';
import HeaderLinks from './component/header-nav';
import HeaderTop from './component/header-top';
import HeaderIntro from './component/header-intro';
import SearchInput from './component/search-input';
import Background from './component/background';
// import CategorySection from './component/category-section';

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Logo />
        <HeaderTop />
        <HeaderLinks />
        <Background />
        <HeaderIntro />
        <SearchInput />

        {/* <CategorySection /> */}
      </React.Fragment>
    );
  }
}

export default HomeHeader;
