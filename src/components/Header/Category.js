import React from 'react';

const Category = () => {
  return (
    <div className='cloth__category overflow-x-auto flex justify-around mt-4 text-xs text-gray-300 font-bold space-x-2 pb-2 mb-2'>
      <a href='/' className='font-bold text-gray-900 border-b-4'>
        전체
      </a>
      <a href='/best'>아우터</a>
      <a href='/new'>상의</a>
      <a href='/new'>원피스/세트</a>
      <a href='/new'>바지</a>
      <a href='/new'>스커트</a>
      <a href='/new'>슈즈</a>
      <a href='/new'>가방</a>
      <a href='/new'>액세서리</a>
      <a href='/new'>패션소품</a>
      <a href='/new'>란제리/파자마</a>
      <a href='/new'>트레이닝</a>
      <a href='/new'>빅사이즈</a>
      <a href='/new'>비치웨어</a>
      <a href='/new'>뷰티</a>
      <a href='/new'>라이프</a>
    </div>
  );
};

export default Category;
