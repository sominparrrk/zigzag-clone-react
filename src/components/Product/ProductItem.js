import React from 'react';
import { IconPath } from '../../lib/IconPath';

const ProductItem = ({ product, index }) => {
  const { title, brand, discount, price, img } = product;
  return (
    <div className='product__1 text-sm'>
      <div className='product__photo__area relative'>
        <img
          src={img}
          alt='product'
          className='product__photo rounded w-full h-52'
        />
        <img
          src={IconPath.like}
          alt='like'
          className='product__like__btn absolute right-3 bottom-2'
        />
      </div>
      <h5 className='product__numbering text-gray-600 mt-1'>
        {index < 10 ? `0${index}` : index}
      </h5>
      <hr className='text-gray-300 my-1' />
      <h5 className='product__brand text-gray-900 font-semibold'>{brand}</h5>
      <h3 className='product__title text-gray-900 truncate'>{title}</h3>
      <div className='price__area flex space-x-1 text-base my-1'>
        <h5 className='product__discount text-rose-400 font-bold'>
          {discount}%
        </h5>
        <h3 className='product__price font-bold'>
          {price.toLocaleString('ko-KR')}
        </h3>
      </div>
    </div>
  );
};

export default ProductItem;
