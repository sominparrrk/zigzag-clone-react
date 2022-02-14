import React from 'react';
import { CategoryData } from '../../lib/CategoryData';

const Category = () => {
  return (
    <div className='cloth__category overflow-x-auto flex justify-around mt-4 text-xs text-gray-300 font-bold space-x-2 pb-2 mb-2'>
      <a href='/' className='font-bold text-gray-900 border-b-4'>
        전체
      </a>
      {CategoryData.map((category, i) => (
        <a href={category.eng} key={i}>
          {category.kor}
        </a>
      ))}
    </div>
  );
};

export default Category;
