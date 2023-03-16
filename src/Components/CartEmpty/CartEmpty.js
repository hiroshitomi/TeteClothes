import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"


const CartEmpty = () => {
    const navigate = useNavigate()
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}>
        <img alt="CartEmpty" src="./images/emptyCart.png"/>
        <h2>Tu carrito está vacío</h2>
        <Button
          onClick={() => navigate("/")}
          style={{
            background: "#15042d",
            border: "1px solid #15042d",
            margin: "2px",
          }}>Vamos a llenar el carrito</Button>
      </div>
  )
}

export default CartEmpty