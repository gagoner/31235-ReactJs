import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Data from '../Data/Data.json';


const ItemListContainer = ({ title }) => {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const { category } = useParams()

    const getItems = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(Data)
            }, 2000)
        })
    };

    useEffect(() => {
        getItems()
            .then((res) => {
                setLoading(false)
                category === undefined ? 
                    setItems(res) : 
                    setItems(res.filter(el => el.category === category));
            })
            .catch((rej) => {
                console.log(rej)
            })

        return(() =>{
            setLoading(true)
            setItems([])
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
}, [category])

    return (
        <section className='card w-50'>
            <h2 className='card-header text-center'>{title}</h2>
            <div className="card-body text-center">
            {loading ? "Cargando" : <ItemList items={items} />}
            </div>
        </section>
    );
}

export default ItemListContainer