import React from 'react';
import { CategoryData } from '../../lib/CategoryData';

const Category = () => {
  return (
    <div className='cloth__category overflow-x-scroll flex justify-around text-xs text-gray-300 font-bold space-x-2 my-4'>
      <div className='whitespace-nowrap overflow-x-scroll'>
        <a href='/' className='font-bold text-gray-900 mx-1'>
          전체
        </a>
        {CategoryData.map((category, i) => (
          <a href={category.eng} key={i} className='mx-1'>
            {category.kor}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
