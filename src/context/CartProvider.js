import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect (() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0))
  }, [cart])

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          product.quantity = product.quantity + quantity
          return product 
        } else {
          return product
        }
      })
      setCart(newCart)

    } else {
      const product = {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        stock: item.stock,
        category: item.category,
        image: item.image,
        quantity: quantity
    }
    setCart([...cart, product])
    }
  };

  const clear = () => {
    setCart([])
  }

  const removeItem = (productId) => {
    setCart(cart.filter((product) =>  product.id !==  productId))
  }

  const isInCart = (productId) => {
    if (cart.find((product) => product.id === productId)){
      return true
    } else {
      return false
    }
  }


  return <CartContext.Provider value={{cart, addItem, clear, removeItem, total}}>{children}</CartContext.Provider>;
};

export default CartProvider;
