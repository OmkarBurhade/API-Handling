import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgetproducts } from '../actions/ProductActions'

const Products = () => {
  const { Product } = useSelector((state) => state.ProductReducer)
  console.log(Product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [])
  return (
    <div className='flex flex-col gap-5 '>
      {Product && Product.map((product) => {
        return (
          <div key={product.id}>
            <h1><b>Title:</b> {product.title}</h1>
            <h1><b>Body:</b> {product.body}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Products
