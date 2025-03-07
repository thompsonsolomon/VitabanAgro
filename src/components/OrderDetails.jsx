import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../assets/data/firebase";
import { toast } from "react-toastify";
import { FormatCurrency } from "../assets/data/data";

const OrderDetails = () => {
  const { id } = useParams(); // Extract the order ID from URL params
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

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
  const GoBack = () => {
    navigate(-1)
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-[90px]">

      <h1 className="text-3xl font-bold text-blue-700 mb-3">Order Details</h1>
      <button onClick={() => GoBack()} className="py-2 px-4 mb-5 rounded-md text-white bg-blue-500 w-[100px]" >Go Back</button>
      <div className="bg-white p-4 shadow-md rounded-lg">

        <div>

        <p className="text-lg text-blue-500">
          <strong className="text-blue-600">User Name:</strong> {order.Name}{" "}
          <button
            onClick={() => copyToClipboard(order.Name)}
            className="ml-2 bg-blue-100 px-2 py-1 rounded text-sm text-blue-800"
          >
            Copy
          </button>
        </p>
        <p className="text-lg text-green-500">
          <strong className="text-green-600">Phone Number:</strong> {order.Phone}{" "}
          <button
            onClick={() => copyToClipboard(order.Phone)}
            className="ml-2 bg-green-100 px-2 py-1 rounded text-sm text-green-800"
          >
            Copy
          </button>
        </p>
        <p className="text-lg text-gray-500">
          <strong className="text-gray-600">Address:</strong> {order.Address}{" "}
        </p>

        <p className="text-red-600">
                    Status:{" "}
                    <span
                      className={`font-semibold ${
                        order.status ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {order.status ? "Delivered" : "Not Delivered"}
                    </span>
                  </p>

        </div>

       
        <h2 className="text-2xl font-bold mt-6 text-purple-700">Cart Items</h2>
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
                <p className="text-orange-600">{item.name}</p>
                <p className="text-gray-600">
                  Quantity: {item.quantity}, Price:{" "}
                  <span className="text-gray-800">
                     {FormatCurrency(item.price)}
                  </span>
                </p>
                <p className="text-gray-600">
                  Total:{" "}
                  <span className="text-gray-800">
                     {FormatCurrency(item.totalPrice)}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div>
        <p className="text-lg text-green-500">
          <strong className="text-green-600">Total Amount:</strong> {FormatCurrency(order.totalPrice)}{" "}
        </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;