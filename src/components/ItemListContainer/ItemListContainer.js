import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = ({ title }) => {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const { category } = useParams()

    const db = getFirestore();

    const getItems = async () => {

        const productSnapshot = await getDocs(collection(db, "products"));
        const productList = productSnapshot.docs.map(doc => {
            let product = doc.data()
            product.id = parseInt(doc.id)
            return product
        });

        setLoading(false)
        category === undefined ?
            setItems(productList) :
            setItems(productList.filter(el => el.category === category));

    };

    useEffect(() => {

        getItems()

        return (() => {
            setLoading(true);
            setItems([])
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
}, [category])

    return (
        <section className='card w-50'>
            <h2 className='card-header text-center'>{title}</h2>
            <div className="card-body text-center">
            {loading ? 
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner> : <ItemList items={items} />}
            </div>
        </section>
    );
}

export default ItemListContainer