import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {        
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [props])

    return (
        <div>
            <h2>{product.title}</h2>
            <h3>Price: ${product.price/100}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    )
}
