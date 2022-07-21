import Item from '../Item/Item';

const ItemList = ({items}) => {
    
    return (
        <>{ items.map((Data, index) => <Item item={Data} key={index}/>) }</>
    )
}

export default ItemList