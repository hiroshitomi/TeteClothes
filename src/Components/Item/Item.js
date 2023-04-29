import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Item = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div className="item">
      <img
        alt={product.title}
        src={`/images/${product.image}`}
        width="175px"
        onClick={() => navigate(`/item/${product.id}`)}
        style={{cursor: "pointer"}}
      />
      <h2>{product.title}</h2>
      <h3>
        <strong>$</strong>
        {product.price}
      </h3>
      {/* <p>{product.description}</p> */}
      <Link to={`/item/${product.id}`}>
        <Button
          style={{
            background: "#dbc0ff",
            border: "1px solid #dbc0ff",
            color: "#15042d",
            margin: "2px",
            "&:hover": {
              background: "#15042d73",
              border: "1px solid #15042d73",
              color: "#dbc0ff",
            },
          }}
        >
          Ver mas
        </Button>
      </Link>
    </div>
  );
};

export default Item;
