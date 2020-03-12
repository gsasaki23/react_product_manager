import React from 'react';

// For each product in the Main.js state "products", show link to product detail page
export default (props) => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <a href={"/products/" + product._id} style={{display:"block"}}>{product.title}</a>
            })}
        </div>
    )
}