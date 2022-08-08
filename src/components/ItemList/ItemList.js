import React from "react";
import Item from '../Item/Item';

const ItemList = ({ item }) => {
	return item.map((data) => <Item item={data} key={data.id} />);
};

export default ItemList