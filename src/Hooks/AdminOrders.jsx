import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../assets/data/firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FormatCurrency } from "../assets/data/data";
const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch orders from Firestore
  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "orders"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const orderArray = [];
      querySnapshot.forEach((doc) => {
        orderArray.push({ ...doc.data(), id: doc.id });
      });
      setOrders(orderArray);
      setIsLoading(false);
    });
    return () => unsub();
  }, []);


  // Toggle order status
  const toggleStatus = async (orderId) => {
    try {
      const orderRef = doc(db, "orders", orderId); // Reference to the specific order
      const currentOrder = orders.find((order) => order.id === orderId);

      if (!currentOrder) {
        toast.error(`Order with ID ${orderId} does not exist.`);
        return;
      }

      const newStatus = !currentOrder.status; // Toggle the status

      // Update status in Firestore
      await updateDoc(orderRef, { status: newStatus });

      // Update UI immediately
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );

      toast.success(
        `Order status updated to ${newStatus ? "Delivered" : "Not Delivered"}.`
      );
    } catch (error) {
      toast.error("Error updating order status. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Orders</h1>
      <div className="grid gap-6">
        {isLoading ? (
          <p>Loading orders...</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 shadow-md rounded-lg border border-gray-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-600">
                    Order Date: {order.date}
                  </p>
                  <p className="text-gray-600">
                    Total Price:{FormatCurrency(order.totalPrice)}
                  </p>
                  <p className="text-gray-600">
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
                <button
                  className={`py-2 px-4 rounded-md text-white ${
                    order.status ? "bg-green-500" : "bg-red-500"
                  }`}
                  onClick={() => toggleStatus(order.id)}
                >
                  {order.status ? "Mark as Not Delivered" : "Mark as Delivered"}
                </button>
              </div>
              <div className="mt-4">
                <h2 className="text-LG text-gray-700  font-bold">Cart Items:</h2>
                <ul className="mt-2">
                  {order.cartItems &&
                    order.cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-4 p-2 border-b last:border-b-0"
                      >
                        <img
                          src={item.cover}
                          alt={item.name}
                          className="w-16 h-16 rounded object-cover border"
                        />
                        <div>
                          <p className="text-md font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-600">
                            Quantity: {item.quantity} | Price: {order.Currency}  {FormatCurrency(item.price)}
                          </p>
                          <p className="text-sm text-gray-600">
                            Total:{FormatCurrency(item.totalPrice)}
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div>                
                  <Link className="py-2 px-4 mx-3 rounded-md text-white bg-blue-500" to={`/order/${order.id}`}
                  >View</Link>

{/* <a href={`/order/${order.id}`} className="hover:text-green-400">Contact</a> */}

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminOrders;