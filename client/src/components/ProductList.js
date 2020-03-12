import React from 'react';

export default (props) => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <p key={idx}>Product: {product.title} is a {product.description}. Sold for ${product.price/100}!</p>
            })}
        </div>
    )
}