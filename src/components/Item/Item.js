import React from "react";

const Item =({Data})=>{
  return(
    <>
    <img alt="Imagen al azar"  src={Data.pictureurl} />
    <div>
        {Data.title}
    </div>
    <div className="mb-2 text-muted">
        Precio:{Data.price}
    </div>
    <div>
        Descripción
        <p>
            {Data.description}
        </p>
    </div>
    </>
    );
};



export default Item;