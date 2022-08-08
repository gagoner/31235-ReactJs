import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	
	const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));
		
	const data = {
        clearCart,
		isInCart,
		removeProduct,
		addProduct,
		totalPrice,
		totalProducts,
		cart,
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )


/*    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || []);

    const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem('total-price')) || 0);

    const deleteProduct = (prod) => {
        const filteredProduct = cartListItems.filter(cartItem => cartItem !== prod);
        setCartListItems(filteredProduct);
        localStorage.setItem('products', JSON.stringify(filteredProduct));
        setTotalPrice(totalPrice - prod.price * prod.quantity);
        localStorage.setItem('total-price', totalPrice - prod.price * prod.quantity);
    }

    const addProductToCart = (product) => {

        console.log("cartContext | product");
        console.log(product);

        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id);
        console.log({cartListItems});

        if (!isInCart) {
            setCartListItems(cartListItems => [...cartListItems, product]);
            setTotalPrice(Number(totalPrice) + Number(product.price) * Number(product.cantidad));

            localStorage.setItem('products', JSON.stringify([...cartListItems, product]));
            localStorage.setItem('total-price', Number(totalPrice + product.price * product.quantity));
            const alertPlaceholder = document.getElementById("alerta");
            const elemento = document.createElement('div');
            elemento.innerHTML = [`<div class="alert alert-success alert-dismissible fade show" role="alert">`,`<div>Se agregaron ${product.cantidad} productos al carrito</div>`,'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>','</div>'].join('');
            alertPlaceholder.append(elemento);
        } else {

            const refreshQuantity = cartListItems.find(cartItem => cartItem.id === product.id)

            if (refreshQuantity.quantity + product.quantity <= product.stock) {
                refreshQuantity.quantity += product.quantity
                const filteredProduct = cartListItems.filter(cartItem => cartItem.id !== product.id)
                setCartListItems(filteredProduct)
                setCartListItems(filteredProduct => [...filteredProduct, refreshQuantity])
                localStorage.setItem('products', JSON.stringify([...filteredProduct, refreshQuantity]))

                setTotalPrice(totalPrice + product.price * product.quantity)
                localStorage.setItem('total-price', totalPrice + product.price * product.quantity);

                const alertPlaceholder = document.getElementById("alerta");
                const elemento = document.createElement('div');
                elemento.innerHTML = [`<div class="alert alert-warning alert-dismissible fade show" role="alert">`,`<div>Ya tienes el producto en el carrito.</div>`,'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>','</div>'].join('');
                alertPlaceholder.append(elemento);

            } else {

                const alertPlaceholder = document.getElementById("alerta");
                const elemento = document.createElement('div');
                elemento.innerHTML = [`<div class="alert alert-warning alert-dismissible fade show" role="alert">`,`<div>Ya tienes el máximo de productos en stock (${product.stock}).</div>`,'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>','</div>'].join('');
                alertPlaceholder.append(elemento);
            }
        }
    }

    const data = {
        cartListItems,
        setCartListItems,
        addProductToCart,
        totalPrice,
        setTotalPrice,
        deleteProduct
    }
*/

}

// export default CartContext
// export { CartProvider }


export default CartProvider;