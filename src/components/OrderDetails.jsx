import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../assets/data/firebase";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "orders"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const ordersArray = [];
      querySnapshot.forEach((doc) => {
        ordersArray.push({ ...doc.data(), id: doc.id });
      });

      const selectedOrder = ordersArray.find((order) => order.id === params.id);
      setOrder(selectedOrder || null);
      setIsLoading(false);
    });

    return () => unsub();
  }, [params.id]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!order) {
    return <p>No order found</p>;
  }

  const [selectedProduct, ...remainingProducts] = order.cartItems;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Details</h1>

      <div className="bg-white p-4 shadow-md rounded-lg mb-6">
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
      </div>

      <div className="bg-white p-4 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Selected Product</h2>
        {selectedProduct && (
          <div className="flex items-center">
            <img
              src={selectedProduct.cover}
              alt={selectedProduct.name}
              className="w-20 h-20 mr-4 rounded object-cover"
            />
            <div>
              <p className="text-lg font-bold">{selectedProduct.name}</p>
              <p>
                Quantity: {selectedProduct.quantity}, Price: {order.Currency}{" "}
                {selectedProduct.price}
              </p>
              <p>
                Total: {order.Currency} {selectedProduct.totalPrice}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Remaining Products</h2>
        {remainingProducts.length > 0 ? (
          <ul>
            {remainingProducts.map((item) => (
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
                  <p>
                    Total: {order.Currency} {item.totalPrice}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No remaining products in this order.</p>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;