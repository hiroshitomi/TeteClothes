import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate()


    return (
      <div className="item">
        <img className="image-style"
          alt={product.title}
          src={`/images/${product.image}`}
          width="250px"
          onClick={() => navigate(`/item/${product.id}`)}
          style={{cursor: "pointer"}}
        />
        <div className="product-title">
          <h6>{product.title}</h6>
          <h6>
            <strong>${product.price}</strong>
          </h6>
        </div>
        <Link to={`/item/${product.id}`}>
          <button className="button-card">
            Ver más
          </button>
        </Link>
      </div>
    );
};

export default Item;
