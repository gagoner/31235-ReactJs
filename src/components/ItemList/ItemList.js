import Item from '../Item/Item';

const ItemList = ({items}) => {
    
    return (
        <>{ items.map((data, index) => <Item item={data} key={index}/>) }</>
    )
}

export default ItemList