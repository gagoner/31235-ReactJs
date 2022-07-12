import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer(props) {
  const [count, setCount] = useState(0);
  let stock = 5;

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
      <div className='d-flex justify-content-center pt-5'>
        <div className='card w-50'>
          <div className='card-body text-center'>
            <h1 className="card-header text-center"> {props.title}</h1>
            <h2 className='card-text'>{count}</h2>
            <div class="buttons">
              <ItemCount title={"-"} action={decrementCount}/>
              <ItemCount title={"+"} action={incrementCount}/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemListContainer;