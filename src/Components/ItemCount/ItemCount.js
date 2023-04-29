import "./style.css";
import {Button} from "react-bootstrap";

const ItemCount = ({count, setCount}) => {
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
          style={{marginRight: "5px"}}
        >
          {" "}
          -{" "}
        </Button>
        <span>{count}</span>
        <Button
          disabled={count === 0}
          onClick={onAdd}
          style={{marginLeft: "5px"}}
        >
          {" "}
          +{" "}
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
