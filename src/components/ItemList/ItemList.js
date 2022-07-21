import  ItemCount from '../ItemCount/ItemCount';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemList =({Data})=>{
    return(
    <>
    <div>
        <img src={Data.pictureurl} alt="thumbnail" />
            <div>
                {Data.title}
            </div>
            <p>
                {Data.description}
            </p>
                <ItemDetailContainer id={Data.id}/>
            <div className="mb-2">
                <div className="pt-2 text-muted">Precio: {Data.price}
                    <div>
                        <p className="card-header text-center">
                            Cantidad disponible: {Data.stock}.
                            <ItemCount  key={Data.id} stock={Data.stock}/>
                        </p>
                    </div>
                </div>
            </div>
    </div>
    </>
    )
};

export default ItemList;