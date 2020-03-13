import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

// For each product in the Main.js state "products", show link to product detail page
export default (props) => {
    useEffect(()=>{
        props.data.setProducts(props.data.products);
    },[])

    // Will work, but requires refresh
    const removeFromDom = productID => {
        props.data.setProducts(props.data.products.filter(product => product._id !== productID))
    }

    return (
        <div>
            {props.data.products.map((product, idx)=>{
                return (
                    <div key={idx} style={{display:"block"}}>
                        <Link to={"/products/" + product._id}>
                            {product.title}
                        </Link>
                        <DeleteButton productID={product._id} successfulCallback={()=>removeFromDom(product._id)}>
                            Delete
                        </DeleteButton>
                </div>
                )
            })}
        </div>
    )
}