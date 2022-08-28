import { useState, useContext } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import CartContext from "../../context/cartContext";

export const useForm = (initialForm, validateForm) => {
  const { cart, clearCart, totalPrice } =
    useContext(CartContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const order = {
		buyer: {
			name: form.name,
			email: form.email,
			phone: form.phone,
			address: form.address,
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

  const modalBasico = (id) => {
    <>
    <p>Hola modal activado.</p>
    </>
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      handleClick();
      clearCart();
    } else {
      console.log("error");
    }
  };

  function handleClick() {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      modalBasico(id);
    });
  }

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
