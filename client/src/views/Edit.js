import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

export default (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    // On initial load, get DB info
    useEffect(() => {        
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setTitle(res.data.title)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    }, [props])

    // When a new form is submitted, PUT request to backend
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props.id}`, {
            title,
            price,
            description
        })
            .then(res=>{
                console.log("Response: ",res)
                // route back to detail
                navigate(`/products/${props.id}`)
            })
            .catch(err=>console.log("Error: ",err))
    }

    return (
        <div>            
            <h2>Editing {title}</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title (Text)</label>
                    <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price (Cents)</label>
                    <input type="number" min="0" value={price} onChange={e=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description (Text)</label>
                    <input type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
                </p>
                <input type="submit" value="Save"/>
            </form>
            
            <Link to={"/products/" + props.id}>Back</Link>
        </div>
    )
}