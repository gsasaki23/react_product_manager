import React from 'react'
import axios from 'axios';

export default props => {
    const deleteProduct = e => {        
        axios.delete('http://localhost:8000/api/products/delete/' + props.productID)
        .then(res=>{
            props.successfulCallback()
            })
        .catch(console.log)
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}