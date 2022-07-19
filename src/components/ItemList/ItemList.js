import React from 'react';
import Item from '../Item/Item'

const ItemList = ({items}) =>{
    return (
        <>
        { items.map(item=>
            <>
                <Item key={item.id} Data={item} />
            </>)}
        </>
    )
}

export default ItemList;