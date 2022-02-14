import React from 'react';
import { IconPath } from '../../lib/IconPath';

const BottomNav = () => {
  return (
    <div class='bottom__nav__bar sticky bottom-0 py-2 bg-white grid grid-cols-5'>
      <a
        href='/post'
        class='flex flex-col py-2 gap-1 items-center justify-center text-xs text-gray-900 font-bold text-center'
      >
        <img src={IconPath.zHome} alt='zigzag_home' />홈
      </a>
      <a
        href='/post'
        class='flex flex-col py-2 gap-1 items-center justify-center text-xs text-gray-500 text-center'
      >
        <img src={IconPath.shoppingMenu} alt='shopping_mall' />
        쇼핑몰
      </a>
      <a
        href='/post'
        class='flex flex-col py-2 gap-1 items-center justify-center text-xs text-gray-500 text-center'
      >
        <img src={IconPath.groupView} alt='group_view' />
        모아보기
      </a>
      <a
        href='/post'
        class='flex flex-col py-2 gap-1 items-center justify-center text-xs text-gray-500 text-center'
      >
        <img src={IconPath.likeList} alt='like_list' />찜
      </a>
      <a
        href='/post'
        class='flex flex-col py-2 gap-1 items-center justify-center text-xs text-gray-500 text-center'
      >
        <img src={IconPath.myPage} alt='my_page' />
        마이페이지
      </a>
    </div>
  );
};

export default BottomNav;
