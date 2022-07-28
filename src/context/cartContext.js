import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {

        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)

        if (!isInCart) {
            setCartListItems(cartListItems => [...cartListItems, product])
            const alertPlaceholder = document.getElementById("alerta");
            const elemento = document.createElement('div');
            elemento.innerHTML = [`<div class="alert alert-success alert-dismissible fade show" role="alert">`,`<div>Se agregaron ${product.cantidad} productos al carrito</div>`,'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>','</div>'].join('');
            alertPlaceholder.append(elemento);
        } else {
            const alertPlaceholder = document.getElementById("alerta");
            const elemento = document.createElement('div');
            elemento.innerHTML = [`<div class="alert alert-warning alert-dismissible fade show" role="alert">`,`<div>Ya tienes el producto en el carrito.</div>`,'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>','</div>'].join('');
            alertPlaceholder.append(elemento);
        }
    }

    const data = {
        cartListItems,
        addProductToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }