import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {

    const [count, setCount] = useState(initial);

    let incrementCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    
    let decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (  
    <>
        <h2 className='card-text text-start'>Cantidad: {count}</h2>
        <div class="buttons">
            <button  className='btn btn-light mx-2' onClick={decrementCount}>-</button>
            <button  className='btn btn-light mx-2' onClick={incrementCount}>+</button>
        </div>
        <br></br>
    </>
    );
};

export default ItemCount;