import "./style.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import CartEmpty from "../../Components/CartEmpty/CartEmpty";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


const Cart = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);

  /* variables para mostrar/ocultar el modal de compra */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
   

  /* state para coompletar el formulario de compra */
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const comprar = () => {
    handleClose()
    createOrder()
  }
    
  const createOrder = () => {
    //event.preventDefault();
    const db = getFirestore();
    const querySnapshot = collection(db, "orders");
    
    addDoc(querySnapshot, {
      buyer: {
        email: formValue.email,
        name: formValue.name,
        phone: formValue.phone,
      },
      products: cart.map((product) => {
        return {
          title: product.title,
          price: product.price,
          id: product.id,
          quantity: product.quantity,
        };
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    })
      .then((response) => {
        Swal.fire({
          title: `Su compra ha sido confirmada con el ID: ${response.id}`,
          icon: "success",
          confirmButtonColor: "#15042d",
        }).then(() => {
          updateStocks(db);
          clear();
          navigate("/");
        });
      })
      .catch((error) => console.log(error));
  };

  const updateStocks = (db) => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "products", product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          console.log("El stock de los productos ha sido actualizada");
        })
        .catch((error) => console.log(error));
    });
  };

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      
      <div className="cart">
        {cart?.length === 0 && <CartEmpty />}
        {cart?.length > 0 && (
          <Table striped className="text-center">
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
              {cart?.map((product) => (
                <tr key={product.title}>
                  <td>
                    <img
                      alt={product.title}
                      src={`/images/${product.image}`}
                      style={{ height: "60px", width: "50px", cursor: "pointer" }}
                      onClick={() => navigate(`/item/${product.id}`)}
                    />
                  </td>
                  <td>
                    <h6>{product.title}</h6>
                  </td>
                  <td>
                    <h6>{product.quantity}</h6>
                  </td>
                  <td>
                    <h6>${product.price * product.quantity}</h6>
                  </td>
                  <td>
                    <Button
                      style={{
                        background: "#15042d",
                        border: "1px solid #15042d",
                        margin: "2px",
                      }}
                      onClick={() => removeItem(product.id)}
                    >
                      <img alt="eliminar" src="/images/eliminar.png" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {cart?.length > 0 && (
          <div
            style={{ display: "flex", flexDirection: "row", color: "black" }}
          >
            <h2 className="text-center">Total:${total}</h2>
            <Button
              style={{
                background: "#15042d",
                border: "1px solid #15042d",
                margin: "2px",
              }}
              onClick={clear}
            >
              Vaciar Carrito
            </Button>
            <Button
              style={{
                background: "#15042d",
                border: "1px solid #15042d",
                margin: "2px",
              }}
              onClick={() => navigate("/")}
            >
              Seguir comprando
            </Button>

            <Button
              style={{
                background: "#15042d",
                border: "1px solid #15042d",
                margin: "2px",
              }}
              onClick={handleShow}
            >
              Finalizar Compra
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Finalizar Compra</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      value={formValue.name}
                      onChange={handleInput}
                      placeholder="Nombre completo"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      name="phone"
                      value={formValue.phone}
                      onChange={handleInput}
                      type="text"
                      placeholder="Teléfono"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      value={formValue.email}
                      onChange={handleInput}
                      type="text"
                      placeholder="mail@ejemplo.com"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{
                    background: "#dbc0ff",
                    border: "1px solid #dbc0ff",
                    margin: "2px",
                    color: "#15042d",
                  }}
                  onClick={comprar}
                >
                  Comprar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};


export default Cart;
