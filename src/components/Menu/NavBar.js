import React from 'react';

const NavBar = () => {
  return (
    <div className='nav__bar flex justify-around mt-2 mb-4 text-gray-400 text-xl font-bold space-x-2 border-b'>
      <a href='/home'>홈</a>
      <a href='/best' className='font-bold text-gray-900 border-b-4'>
        베스트
      </a>
      <a href='/new'>신상</a>
    </div>
  );
};

export default NavBar;
