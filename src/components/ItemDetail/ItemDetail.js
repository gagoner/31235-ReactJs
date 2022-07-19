import  ItemCount from '../ItemCount/ItemCount';

const ItemDetail =({Data})=>{
    return(
    <>
    <div id="centerman">
        <div className="mb-2">
            <div>
                <img src={Data.thumbnail} alt="thumbnail" />
            </div>
            <div>
                <div>{Data.title}</div>
                <div className="mb-2 text-muted">Precio: {Data.price}</div>
                <div>
                    Cantidad {Data.available_quantity}<p></p>
                </div>
            </div>
        </div>
        <ItemCount product_name={Data.title} stock={Data.available_quantity}/>
    </div>
    </>
    )
};

export default ItemDetail;
