import React from 'react';
import { IconPath } from '../../lib/IconPath';

const Search = () => {
  return (
    <div className='header__bar sticky top-2 bg-white flex justify-between items-center'>
      <img
        src='https://www.ad-i.com/static/media/partners-zigzag.2ba5c906.svg'
        alt='logo'
        className='w-20'
      />
      <div className='input__area relative'>
        <img
          src={IconPath.search}
          alt='search'
          className='search__icon feather feather-search absolute left-4 top-2.5'
        />
        <input
          className='search__input border-none rounded-3xl bg-gray-100 w-52 h-9 pl-12 text-xs'
          placeholder='검색어를 입력해주세요'
        />
      </div>
      <img src={IconPath.basket} alt='basket' className='zigzag__basket' />
    </div>
  );
};

export default Search;
