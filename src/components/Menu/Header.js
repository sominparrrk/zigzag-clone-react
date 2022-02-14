import React from 'react';
import Category from './Category';
import NavBar from './NavBar';
import Search from './Search';
import Select from './Select';

const Header = () => {
  return (
    <>
      <Search />
      <NavBar />
      <Category />
      <Select />
    </>
  );
};

export default Header;
