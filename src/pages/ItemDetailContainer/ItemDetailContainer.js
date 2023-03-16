import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({})
    const { id } = useParams();

    const getProduct = () => {
        const db = getFirestore()
        const querySnapshot = doc(db, 'products', id)

        getDoc(querySnapshot)
        .then((response) => {
            setDetailProduct({
                id: response.id, ...response.data()
            })
            
        })
        .catch((error) => console.log(error))
    }


    useEffect(() => {
        getProduct()
    }, []);

    return (
        <div className="main">
            <h1><ItemDetail detail={detailProduct}/></h1>
        </div>
    );
};

export default ItemDetailContainer;
