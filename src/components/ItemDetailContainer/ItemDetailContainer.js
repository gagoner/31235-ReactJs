import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
    const navigate = useNavigate();
	const { detalleId } = useParams();

    const db = getFirestore();

    const productFilter = async () => {
        
        const docRef = doc(db, "products", detalleId);
        const docSnapshop = await getDoc(docRef);
        console.log("id3 " + docSnapshop.id);
        let product = {id: docSnapshop.id, ...docSnapshop.data()};

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
        {Object.keys(data).length === 0 ?
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner> : <ItemDetail prop={data} />}
        </>
    )
};

export default ItemDetailContainer