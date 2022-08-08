import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
    const navigate = useNavigate();
	const { detalleId } = useParams();

    const db = getFirestore();

    const productFilter = async () => {
        
        const docRef = doc(db, "products", detalleId);
        const docSnapshop = await getDoc(docRef);
        let product = {id: docSnapshop.id, ...docSnapshop.data()};
        console.log("product");
        console.log(product);

        if (product === undefined) {
            navigate('/*');
        } else {
            setData(product);
        }
    }

	useEffect(() => {
        productFilter();

        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [detalleId]);

	return (
        <>
        <Container fluid="true">
            <Row>
                {Object.keys(data).length === 0 ?
                <Spinner animation="border" role="status" className="mx-auto my-auto">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner> : <ItemDetail data={data} />}
            </Row>
        </Container>
        </>
    )
};

export default ItemDetailContainer