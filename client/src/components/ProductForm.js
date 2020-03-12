import React, {useState} from 'react';
import axios from 'axios';

export default (props) => {
    const [title, setTitle] = useState(props.initTitle);
    const [price, setPrice] = useState(props.initPrice);
    const [description, setDescription] = useState(props.initDescription);


    const onSubmitHandler = e => {
        e.preventDefault();
        props.onSubmitProp({title,price,description});
    }

    // v  Was refactored out to Main! v
    // When a new form is submitted, POST request to backend
    // const onSubmitHandler = e => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8000/api/products/new', {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(res=>console.log("Response: ",res))
    //         .catch(err=>console.log("Error: ",err))
    // }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title (Text)</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price (Cents)</label>
                <input type="number" min="0"  value={price} onChange={e=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description (Text)</label>
                <input type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}