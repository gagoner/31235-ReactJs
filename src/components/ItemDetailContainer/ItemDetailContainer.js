import { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const navigate = useNavigate()

    const { id } = useParams()
    
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', '2moRkvusi5kdWYm6QzOs');
    getDoc(queryDoc)
    .then(res => console.log(res))

    useEffect(() => {

        getItem()
            .then((res) => {
                if(res === undefined){
                    navigate('/*')
                }else {
                    setItem(res)
                }
            })
            .catch((rej) => {
                console.log(rej)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const productFilter = Data.find( (product) => {
        return product.id === parseInt(id)
    })

    return (
        <>
            {Object.keys(item).length === 0 ? "Cargando producto" : <ItemDetail prop={item} />}
        </>
    )
}

export default ItemDetailContainer