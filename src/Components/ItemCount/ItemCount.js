import "./style.css";
import { Button } from "react-bootstrap";

const ItemCount = ({ count, setCount }) => {
  const onAdd = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <div className="controllers">
        <Button
          disabled={count === 0}
          onClick={restar}
          style={{
            background: "#15042d",
            border: "2px solid #15042d",
            marginRight: "10px",
          }}
        >
          {" "}
          -{" "}
        </Button>
        <div style={{color: "#15042d"}}>
          <span>{count}</span>
        </div>
        <Button
          disabled={count === 0}
          onClick={onAdd}
          className="btn-primary"
          style={{
            background: "#15042d",
            border: "1px solid #15042d",
            marginLeft: "10px",
          }}
        >
          {" "}
          +{" "}
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
