import { Link } from 'react-router-dom';
import './style.css'

const Item = ({product}) => {
    return (
        <div className='item'>
            <img alt={product.name} src={product.image} width='200px'/>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h4>{product.description}</h4>
            <Link to={`/item/${product.id}`}>
                <button>Ver mas</button>
            </Link>
        </div>
    );
};

export default Item;
