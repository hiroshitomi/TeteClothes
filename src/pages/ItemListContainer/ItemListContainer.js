import "./style.css";
import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, "products")

    const querySnapshot = categoryId
      ? query(queryBase, where("category", "==", categoryId))
      : queryBase;

    getDocs(querySnapshot)
      .then((response) => {
        const list = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProductList(list);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return (
    <div className="main">
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
