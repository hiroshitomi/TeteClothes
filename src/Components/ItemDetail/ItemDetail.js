import "./style.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const ItemDetail = ({ detail }) => {
  
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
      <div className="detail-container mt-3 mb-3">
      <div>
        <img src={`/images/${detail.image}`} alt={detail.title} width="250px" />
      </div>
      <div className="text-color-div mt-2">
        <h3>{detail.title}</h3>
        <h2> <strong>${detail.price}</strong></h2>
        <h6 style={{marginTop: "10px"}} disabled>Detalle</h6>
        <h5>{detail.description}</h5>

        <div className="stock-count mt-4">
          <ItemCount count={count} setCount={setCount} />
          <h6 style={{marginTop: "5px"}}>Disponibles:{detail.stock}</h6>
          <Button
          disabled={count > detail.stock}
            onClick={() => addToCart()}
            style={{
              background: "#15042d",
              border: "1px solid #15042d"
            }}
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ItemDetail;
