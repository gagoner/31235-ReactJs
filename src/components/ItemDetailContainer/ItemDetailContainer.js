import ItemDetail from '../ItemDetail/ItemDetail';
import Data from '../Data/Data.json';

function ItemDetailContainer(props) {

    const[items,setItems]= props.id
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(Data)
        },2000)
    })
    
    call.then(response=> {
        setItems(response)
    })

    return (
        <div className="mb-2">
            <p>
                <button type="button" className="btn btn-link" data-bs-toggle="collapse" data-bs-target= {"#" + props.id} aria-expanded="false" aria-controls={props.id}>Más detalles:</button>
            </p>
            <div className="collapse" id= {'"' + props.id + '"'}>
            {
                items &&  items.map(item=>
                <ItemDetail key={Data.id} Data={item} />
            )}
            </div>
        </div>
    )
}

export default ItemDetailContainer;