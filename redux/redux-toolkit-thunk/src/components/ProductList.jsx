import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/reducers/ProductSlice';

const ProductList = () => {
    const dispatch = useDispatch();

    // select state from the store 
    const { items, loading, error } = useSelector((state) => state?.products);
  
  
    // fetch products on component mount
    useEffect(() => {

        dispatch(fetchProducts())
    }, [dispatch]);

    return (
        <div>
            <h1>Products</h1>
            {/* {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>} */}
            {items && items.length > 0 ? ( // Check if items exist and are not empty
                <ul>
                    {items.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            ) : (
                !loading && <p>Loading...</p> // Show fallback if no products
            )}
        </div>
    )
}

export default ProductList
