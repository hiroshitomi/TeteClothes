import './style.css'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import CartEmpty from '../../Components/CartEmpty/CartEmpty';
import  Table  from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2'

const Cart = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);
  const navigate = useNavigate()
  const db = getFirestore()


  const createOrder = (event) => {
    event.preventDefault()
    const querySnapshot = collection(db, 'orders')

    addDoc(querySnapshot,{
      buyer: {
        email: 'test2@test.com',
        name: 'tomas Hiroshi',
        phone: '+5493514452164'
      },
      products: cart.map((product) => {
        return {
          title: product.title,
          price: product.price,
          id: product.id,
          quantity: product.quantity
        }
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    })
    .then((response) => {
      alert(`Orden con el ID: ${response.id} ha sido creada.`)
      updateStocks()
      navigate('/')
      clear()
    }) 
    .catch((error) => console.log(error))

  }

  const updateStocks = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db,'products', product.id)

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity
      })
      .then(() => {
        console.log('El stock de los productos ha sido actualizada')
      })
      .catch((error) => console.log(error))
    })
  }

  return (
    <div className='cart'>
      {cart?.length === 0 && <CartEmpty/> }
      {cart?.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
        {cart?.map((product) => 
          <tr key={product.title}>
            <td>
              <img alt={product.title} src={`/images/${product.image}`} style={{height: "50px", width: "50px"}}/>
            </td>
            <td>
              <h2>{product.title}</h2>
            </td>
            <td>
              <h5>{product.quantity}</h5>
            </td>
            <td>
              <h5>${product.price * product.quantity}</h5>
            </td>
            <td>
              <Button style={{
            background: "#15042d",
            border: "1px solid #15042d",
            margin: "2px",
          }} onClick={() => removeItem(product.id)}>
                <img alt='eliminar' src='/images/eliminar.png'/>
              </Button>
            </td>
          </tr>
        )}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <h2 style={{color: 'black'}}>Total:${total}</h2>
                <Button style={{
                background: "#15042d",
                border: "1px solid #15042d",
                margin: "2px",
              }} onClick={createOrder}>Finalizar Compra</Button>
              </td>
            </tr>
            
          </tbody>
        </Table>
          )}
      {cart?.length > 0 &&(
         <div style={{display: 'flex', flexDirection: 'column', color: 'black'}}>
            <Button style={{
            background: "#15042d",
            border: "1px solid #15042d",
            margin: "2px",
          }} onClick={clear}>Vaciar Carrito</Button>
            <Button style={{
            background: "#15042d",
            border: "1px solid #15042d",
            margin: "2px",
          }} onClick={() => navigate('/')}>Seguir comprando</Button>
         </div>
       )}
    </div>
  );
};

export default Cart;
