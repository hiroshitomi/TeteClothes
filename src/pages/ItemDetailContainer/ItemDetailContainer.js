import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { products } from "../../data/products";


const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({})
    const { id } = useParams();
    const getProduct = new Promise((res, rej) => {
    setTimeout(() => {
        const findProduct = products.find((product) => product.id == id);
        res(findProduct);
    }, 1000);
    });

    useEffect(() => {
        getProduct
        .then((response) => {
            setDetailProduct(response)
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className="main">
            <h1><ItemDetail detail={detailProduct}/></h1>
        </div>
    );
};

export default ItemDetailContainer;
