import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';
import Title from "../Title/Title";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemListContainer = ({ texto }) => {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const { categoriaId } = useParams();

    const db = getFirestore();

    const getItems = async () => {

        const productSnapshot = await getDocs(collection(db, "products"));
        const productList = productSnapshot.docs.map(item => {
            let product = {id: item.id, ...item.data()}
            return product
        });

        setLoading(false)
        categoriaId === undefined ?
            setItems(productList) :
            setItems(productList.filter(el => el.category === categoriaId));

    };

    useEffect(() => {

        getItems()

        return (() => {
            setLoading(true);
            setItems([])
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
}, [categoriaId])

	return (
		<>
            <Title greeting={texto} />
            <Container fluid="true">
                <Row className='mx-auto'>
                {loading ? 
                <Spinner animation="border" role="status" className="mx-auto my-auto">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner> : <ItemList item={items} />}
                </Row>
            </Container>
		</>
	);
};

export default ItemListContainer