import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Data from '../Data/Data.json';

function ItemListContainer(props) {
  
  const[item,setItems]=useState([])
  const call = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(Data)
    },2000)
  })
  
  call.then(response=> {
    setItems(response)
  })

  return (
      <div className='d-flex justify-content-center pt-5'>
        <div className='card w-50'>
          <div className='card-body text-center'>
            <h1 className="card-header text-center"> {props.title}</h1>
            <div className="p-3 mb-2 bg-dark text-white">
              <ItemList items={item}/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemListContainer;