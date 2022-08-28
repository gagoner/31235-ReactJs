import { useState, useContext } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import cartContext from "../../context/cartContext";

export const useForm = (initialForm) => {
  const { cart, clearCart, totalPrecio, totalProductos } =
    useContext(cartContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const order = {
    buyer: {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
    },
    items: cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    })),
    suegras: totalProductos(),
    total: totalPrecio(),
  };

  // const modalBasico = (id) => {
  //   Swal.fire({
  //     title: "Gracias por elegir Dulce Suegra!",
  //     text: `Su Orden: (${id}) ha sido realizada con éxito!`,
  //     icon: "success",
  //     confirmButtonText: "OK",
  //   });
  // };

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
      // modalBasico(id);
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
