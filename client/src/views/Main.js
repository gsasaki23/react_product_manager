import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // set products to list of all products from DB
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    },[])

    // Called back from ProductForm, creates new product in DB
    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res=>{
                console.log("Response: ",res);
                setProducts([...products, res.data]);
            })
            .catch(err=>console.log("Error: ",err))
    }

    return (
        <>
            <h1>Product Manager</h1>
            <ProductForm onSubmitProp={createProduct} initTitle="" initPrice={0} initDescription=""/>
            <hr/>
            {/* only loads if loaded. sends list of products AND function removeFromDom to child class */}
            {loaded && <ProductList data={{products,setProducts}}/>}
        </>
    )
}
