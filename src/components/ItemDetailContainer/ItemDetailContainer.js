import { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {

    const [items, setItems] = useState({})
    const navigate = useNavigate()

    const { id } = useParams()

    const db = getFirestore();
    
    const productFilter = async () => {
        const docRef = doc(db, "products", id)
        const docSnapshop = await getDoc(docRef)
        let product = docSnapshop.data()
        product.id = parseInt(docSnapshop.id)


        if (product === undefined) {
            navigate('/*')
        } else {
            setItems(product)
        }
    }

    useEffect(() => {

        productFilter()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
            {Object.keys(items).length === 0 ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner> : <ItemDetail prop={items} />}
        </>
    )
}

export default ItemDetailContainer