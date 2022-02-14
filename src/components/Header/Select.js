import React from 'react';

const Select = () => {
  return (
    <div className='personal__select__area flex justify-between my-2'>
      <div className='age__area space-x-1'>
        <button className='border rounded-3xl border-gray-300 px-3 py-2 text-xs'>
          전체
        </button>
        <button className='border rounded-3xl border-gray-300 px-3 py-2 text-xs'>
          10대
        </button>
        <button className='border rounded-3xl border-gray-300 px-3 py-2 text-xs'>
          20대
        </button>
        <button className='bg-gray-900 text-white rounded-3xl px-3 py-2 text-xs'>
          30대
        </button>
      </div>
      <select
        name='choice'
        defaultValue='daily'
        className='date__basis__area text-xs'
      >
        <option value='daily'>데일리</option>
        <option value='weekly'>위클리</option>
      </select>
    </div>
  );
};

export default Select;
