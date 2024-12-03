import React, { useEffect, useState } from "react";
import { ref, onValue, update } from "firebase/database";
import { database, db } from "../assets/data/firebase";
import { collection, onSnapshot, query, update Doc, getDatabase, ref, get, update} from 'firebase/firestore';
import { toast } from 'react-toastify';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // Fetch orders from Firebase
    useEffect(() => {
        setIsLoading(true);
        const q = query(collection(db, 'orders'));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const StreamArray = [];
            querySnapshot.forEach((doc) => {
                StreamArray.push({ ...doc.data(), id: doc.id });
            });
            setOrders(StreamArray);
            setIsLoading(false);
            console.log(orders)
        });
        return () => unsub();
    }, []);


const toggleStatus = async (orderId) => {
  try {
    const orderRef = ref(db, `orders/${orderId}`); // Reference to the specific order

    // Retrieve the current status
    const snapshot = await get(orderRef);
    if (!snapshot.exists()) {
      console.error(`Order with ID ${orderId} does not exist.`);
      return;
    }

    const currentStatus = snapshot.val().status;

    // Toggle the status
    const newStatus = !currentStatus;

    // Update the status in Firebase
    await update(orderRef, { status: newStatus });

    console.log(`Order ${orderId} status updated to ${newStatus}`);
  } catch (error) {
    console.error("Error updating order status:", error);
  }
};


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Orders</h1>
            <div className="grid gap-6">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white p-4 shadow-md rounded-lg border border-gray-300"
                    >
                        <div className="flex justify-between items-center">

                       

<div>
                            
<p className="text-lg font-semi bold text-gray-600">Order Date: {order.date}</p>
                                <p className="text-gray-600">
                                    Total Price: {order.currency} {order.totalPrice}
                                </p>
                                <p className="text-gray-600">
                                    Status:{" "}
                                    <span
                                        className={`font-semibold ${order.status === true
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}
                                    >
                                        {order.status == true ? "Delivered" : "Not Delivered"}
                                    </span>
                                </p>
                            </div>
                            <button
                                className={`py-2 px-4 rounded-md text-white ${order.status === true ? "bg-green-500" : "bg-red-500"
                                    }`}
                                onClick={() => toggleStatus(order.id, order.status)}
                            >
                                {order.status === true
                                    ? "Mark as Not Delivered"
                                    : "Mark as Delivered"}
                            </button>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-bold">Cart Items:</h2>
                            <ul className="mt-2">
                                {order.cartItems && order.cartItems.map((item) => (
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
                                                Quantity: {item.quantity} | Price: {order.currency}{" "}
                                                {item.price}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Total: {order.currency} {item.totalPrice}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminOrders;
