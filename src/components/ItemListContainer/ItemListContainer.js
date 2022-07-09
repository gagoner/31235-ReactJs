import React from 'react';

function ItemListContainer(props) {
  return (
      <div>
        <h1 className="text-center"> {props.title}</h1>
      </div>
  );
};

export default ItemListContainer;