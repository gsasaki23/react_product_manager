import React, {useState} from 'react';

export default (props) => {
    const [title, setTitle] = useState(props.initTitle);
    const [price, setPrice] = useState(props.initPrice);
    const [description, setDescription] = useState(props.initDescription);


    const onSubmitHandler = e => {
        e.preventDefault();
        props.onSubmitProp({title,price,description});
    }

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