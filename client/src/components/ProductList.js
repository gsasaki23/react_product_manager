import React from 'react';
import axios from 'axios';

// For each product in the Main.js state "products", show link to product detail page
export default (props) => {

    const onClickHandler = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res=>{
                console.log("Response: ",res)
                // received this function from Main
                props.removeFromDom(productId)
            })
            .catch(err=>console.log("Error: ",err))
    }

    return (
        <div>
            {props.products.map((product, idx)=>{
                return <div style={{display:"block"}}>
                    <a href={"/products/" + product._id}>{product.title}</a> <button onClick= {e=>{onClickHandler(product._id)}}>Delete</button>
                </div>
            })}
        </div>
    )
}