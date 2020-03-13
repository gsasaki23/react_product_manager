import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';

export default (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {        
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [props])

    const onClickHandler = e => {
        axios.delete(`http://localhost:8000/api/products/delete/${product._id}`)
            .then(res=>console.log("Response: ",res))
            .catch(err=>console.log("Error: ",err))
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <h3>Price: ${product.price/100}</h3>
            <h3>Description: {product.description}</h3>
            <Link to={"/products/" + product._id + "/edit"}>Edit Info</Link> <Link to="/products">Back</Link>
        </div>
    )
}