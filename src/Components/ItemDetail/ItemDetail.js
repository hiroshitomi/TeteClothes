import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(detail?.stock === 0 ? 0 : 1);
  const { addItem } = useContext(CartContext);

  const addToCart = () => {
    addItem(detail, count);
    toast(`${detail.title} agregado al carrito`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "4px 16px 13px",
        flexDirection: "row",
        alignItems: "center",
        color: "#15042d",
        background: '#15042d19'
      }}
    >
      <div>
        <img src={`/images/${detail.image}`} alt={detail.title} width="250px" />
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "4px 32px 140px",
        flexDirection: "column",
        alignItems: "flex-start",
        color: "#15042d"
      }}>
        <h2>{detail.title}</h2>
        <h3>${detail.price}</h3>
        <h4>{detail.description}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            flexDirection: "row",
            alignItems: "center",
            color: "#15042d",
          }}
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
            {" "}
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

      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
