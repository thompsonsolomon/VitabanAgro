import React, { useEffect, useState } from "react";
import { db } from "../../assets/data/firebase";
import {
  collection,
} from "firebase/firestore";

import { query, onSnapshot } from "firebase/firestore";
import { product } from "../../assets/data/data";
import ProductCart from "./ProductCart";

const Product = () => {


  const [AllData, setAllData] = useState([]);
  let StreamArrey = [];
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "products"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        StreamArrey.push({ ...doc.data(), id: doc.id });
      });
      setAllData(StreamArrey);
      setIsLoading(false);
    });
    return () => unsub();
  }, []);
  console.log(AllData);


  return (
    <div className="p-4">
      {
        isLoading ? <div>Loading...</div> :
          <div className="grid sm:grid-cols-2 bg-white md:grid-cols-3 gap-4 ">
            {AllData.map((item) => (
              <ProductCart
                key={item.id}
                id={item.id}
                cover={item.cover}
                name={item.name}
                price={item.price}
                quantity={item.qty}
                totalPrice={item.totalPrice}
              />
            ))}
          </div>}
    </div>
  );
};

export default Product;
