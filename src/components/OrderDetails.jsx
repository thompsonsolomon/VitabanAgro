import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ref, get } from "firebase/database";
import { db } from '../assets/data/firebase';
const OrderDetails = () => {
  const [order, setOrder] = useState(null);
const params = useParams();
    // const ID = parseInt(params.id)
    

    const [AllData, setAllData] = useState([]);
    let StreamArrey = [];
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const q = query(collection(db, "orders"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                StreamArrey.push({ ...doc.data(), id: doc.id });
            });
            setAllData(StreamArrey);
            setIsLoading(false);
        });
        return () => unsub();


const orderDetails = AllData.filter(function (e) {
        return e.id === params.id;
    });

setOrder(orderDetails)
    }, []);
    console.log(AllData);

    

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  if (!order) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Details</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <p className="text-lg">
          <strong>User Name:</strong> {order.Name}{" "}
          <button
            onClick={() => copyToClipboard(order.Name)}
            className="ml-2 bg-gray-200 px-2 py-1 rounded text-sm"
          >
            Copy
          </button>
        </p>
        <p className="text-lg">
          <strong>Phone Number:</strong> {order.phone}{" "}
          <button
            onClick={() => copyToClipboard(order.phone)}
            className="ml-2 bg-gray-200 px-2 py-1 rounded text-sm"
          >
            Copy
          </button>
        </p>
        <p className="text-lg">
          <strong>Address:</strong> {order.Address}{" "}
          <button
            onClick={() => copyToClipboard(order.Address)}
            className="ml-2 bg-gray-200 px-2 py-1 rounded text-sm"
          >
            Copy
          </button>
        </p>
        <h2 className="text-2xl font-bold mt-6">Cart Items</h2>
        <ul>
          {order.cartItems.map((item) => (
            <li
              key={item.id}
              className="mt-2 p-2 border-b last:border-b-0 flex items-center"
            >
              <img
                src={item.cover}
                alt={item.name}
                className="w-16 h-16 mr-4 rounded object-cover"
              />
              <div>
                <p>{item.name}</p>
                <p>
                  Quantity: {item.quantity}, Price: {order.Currency} {item.price}
                </p>
                <p>Total: {order.Currency} {item.totalPrice}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;