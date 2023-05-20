import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import HeartsLoader from "../../Components/HeartsLoader/HeartsLoader";

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({})
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    const getProduct = () => {
        const db = getFirestore()
        const querySnapshot = doc(db, 'products', id)

        getDoc(querySnapshot)
        .then((response) => {
            setDetailProduct({
                id: response.id, ...response.data()
            })
            setIsLoading(false);
        })
        .catch((error) => console.log(error))
    }


    useEffect(() => {
        getProduct()
    }, []);

    if(isLoading)
    return (
        <div className="main">
            <HeartsLoader/>
        </div>
    )
    else{
        return (
            <div className="main">
                <h1><ItemDetail detail={detailProduct}/></h1>
            </div>
        );
    }
    
};

export default ItemDetailContainer;
