import { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Data from '../Data/Data.json';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const navigate = useNavigate()

    const { id } = useParams()
    
    const getItem = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(productFilter)
            }, 2000)
        })
    };

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