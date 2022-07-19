import React, { useState } from 'react';

function ItemCount({ name, stock }) {
    const [count, setCount] = useState(0);

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
        <h2 className='card-text'>{count}</h2>
        <div class="buttons">
            <button  className='btn btn-light mx-2' onClick={decrementCount}>-</button>
            <button  className='btn btn-light mx-2' onClick={incrementCount}>+</button>
        </div>
        <br></br>
    </>
    );
};

export default ItemCount;