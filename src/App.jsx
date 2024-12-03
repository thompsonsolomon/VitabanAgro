import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../assets/data/firebase";

const OrderDetails = () => {
  const { id } = useParams(); // Extract the order ID from URL params
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // Query the Firebase "orders" collection
    const q = query(collection(db, "orders"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let foundOrder = null;
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          foundOrder = { ...doc.data(), id: doc.id };
        }
      });
      setOrder(foundOrder);
      setIsLoading(false);
    });

    return () => unsub(); // Clean up the listener
  }, [id]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Details</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <p className="text-LG text-black">
          <strong>User Name:</strong> {order.Name}{" "}
          <button
            onClick={() => copyToClipboard(order.Name)}
            className="ml-2 bg-gray px-2 py-1 rounded text-sm"
          >
            Copy
          </button>
        </p>
        <p className="text-lg text-black">
          <strong>Phone Number:</strong> {order.phone}{" "}
          <button
            onClick={() => copyToClipboard(order.phone)}
            className="ml-2 bg-gray px-2 py-1 rounded text-sm"
          >
            Copy
          </button>
        </p>
        <p className="text-lg text-black">
          <strong>Address:</strong> {order.Address}{" "}
          <button
            onClick={() => copyToClipboard(order.Address)}
            className="ml-2 bg-gray px-2 py-1 rounded text-sm"
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
                <p className="text-black" >{item.name}</p>
                <p className="text-black">
                  Quantity: {item.quantity}, Price: {order.Currency} {item.price}
                </p>
                <p className="text-black" >
                  Total: {order.Currency} {item.totalPrice}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;