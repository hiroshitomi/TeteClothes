import "./style.css";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0));
  }, [cart]);

  return (
    <>
      <Link to={"/cart"}>
        <div style={{display: 'flex', flexDirection: 'row', color: '#dbc0ff', margin: '5px', alignItems: 'center'}}>
          <img className="imgCart" alt="carrito" src="/images/carrito.png" />
          <p className="total">{total}</p>
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
