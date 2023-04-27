import "./style.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(detail?.stock === 0 ? 0 : 1);
  const { addItem } = useContext(CartContext);

  const addToCart = () => {
    addItem(detail, count);
    toast.success(`${detail.title} agregado al carrito`, {
      position: "bottom-right",
      duration: 3000,
      style: {
        fontSize: "1rem",
        backgroundColor: "#dbc0ff",
        color: "#15042d"
      },
    });
  };

  return (
    <div className="container">
      <div className="detail-container">
      <div>
        <img src={`/images/${detail.image}`} alt={detail.title} width="250px" />
      </div>
      <div>
        <h2>{detail.title}</h2>
        <h3>${detail.price}</h3>
        <h4>{detail.description}</h4>
        <div
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   padding: "10px",
          //   flexDirection: "row",
          //   alignItems: "center",
          //   color: "#15042d",
          // }}
        >
          <ItemCount count={count} setCount={setCount} />
          <h6 style={{paddingLeft: "10px"}}>Disponibles:{detail.stock}</h6>
        </div>
        <div>
          <Button
            onClick={() => navigate("/")}
            style={{
              background: "#15042d",
              border: "1px solid #15042d",
              margin: "2px",
            }}
          >
            Seguir comprando
          </Button>
          <Button
          disabled={count > detail.stock}
            onClick={() => addToCart()}
            style={{
              background: "#15042d",
              border: "1px solid #15042d",
              margin: "2px",
            }}
          >
            Agregar al Carrito
          </Button>
          <Button
            onClick={() => navigate("/cart")}
            style={{
              background: "#15042d",
              border: "1px solid #15042d",
              margin: "2px",
            }}
          >
            Finalizar compra
          </Button>
        </div>
      </div>
      </div>
      

      <Toaster />
    </div>
  );
};

export default ItemDetail;
