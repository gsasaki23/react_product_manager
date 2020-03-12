import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // set products to list of all products
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    },[])

    // Filter over products, if any product's ID matches the one that got removed, filter it out
    const removeFromDom = productID => {
        setProducts(
            products.filter(product => product._id != productID)
        )
    }

    return (
        <>
            <h1>Product Manager</h1>
            <ProductForm />
            <hr/>
            {/* only loads if loaded. sends list of products AND function removeFromDom to child class */}
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </>
    )
}
