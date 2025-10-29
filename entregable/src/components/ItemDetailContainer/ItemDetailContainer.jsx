import { useState, useEffect } from "react";
import getProducts from "../../data/products.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const Counter = ({ initial = 0 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <button className="counter-btn" onClick={decrement}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={increment}>+</button>
    </div>
  );
};

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        const dataProduct = data.find((product) => product.id === parseInt(id));
        setProduct(dataProduct);
      });
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
      <Counter initial={1} />
    </div>
  );
};

export default ItemDetailContainer;
