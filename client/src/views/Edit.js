import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

export default (props) => {
    const [product,setProduct] = useState({});
    const [loaded,setLoaded] = useState(false);

    // On initial load, get DB info
    useEffect(() => {     
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setProduct({...res.data});
                setLoaded(true);
            })
            .catch(console.log)
    }, [props])

    // When a new form is submitted, PUT request to backend
    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/products/update/${props.id}`, product)
            .then(res=>{
                console.log("Response: ",res)
                // route back to detail
                navigate(`/products/${props.id}`)
            })
            .catch(err=>console.log("Error: ",err))
    }

    return (
        <div>            
            {loaded && <h2>Editing {product.title}</h2>}
            {loaded && <ProductForm 
                onSubmitProp={updateProduct}
                initTitle={product.title}
                initPrice={product.price}
                initDescription={product.description}
            />}
            {loaded && <DeleteButton productID={product._id} successfulCallback={() => navigate("/")} />}
            <Link to={"/products/" + props.id}>Back</Link>
        </div>
    )
}