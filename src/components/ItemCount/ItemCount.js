import React from 'react';

function ItemCount({ action,  title, stock }) {
    // Desarrollar lógica
    return <button className='btn btn-light mx-2' onClick={action}>{title}</button>;
};

export default ItemCount;
   