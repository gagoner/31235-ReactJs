import ItemDetail from '../ItemDetail/ItemDetail';
import React, {useState,useEffect} from 'react';

const ItemDetailContainer = () => {
    const[productos,setProductos]=useState()
    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=bandera&limit=3#json").then(response=>response.json()).then(data=>setProductos(data.results));
        },2000)
    },[]);
    
    return (
        <div className='d-flex justify-content-center pt-5'>
            <div className='card w-50'>
                <div className='card-body text-center'>
                    <h2 className="card-header text-center">Productos</h2>
                    <div className="p-3 mb-2 bg-dark text-white">
                        {
                        productos &&  productos.map(item=>
                        <ItemDetail key={item.id} Data={item} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer;