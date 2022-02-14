import React from 'react';
import { ProductData } from '../../lib/ProductData';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div className='product__list z-0 grid grid-cols-2 gap-3 py-2'>
      {ProductData.map((product, i) => (
        <ProductItem key={product.id} index={i + 1} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
