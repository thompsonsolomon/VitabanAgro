import React, { useEffect, useState } from "react";
import { ref, onValue, update } from "firebase/database";
import { database, db } from "../assets/data/firebase";
import { collection, onSnapshot, query } from 'firebase/firestore';


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

    // Toggle delivery status in Firebase
    const toggleStatus = (orderId, currentStatus) => {
        console.log(currentStatus, orderId)
        try {
            const orderRef = ref(database, `orders/${orderId}`);
            const newStatus = !currentStatus;

            // Update the status in Firebase
            update(orderRef, { status: newStatus });
            console.log("done")
            console.log(currentStatus)
        } catch (error) {
            console.log(error)
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
                                <p className="text-lg font-semibold">Order Date: {order.date}</p>
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
                                className={`py-2 px-4 rounded-md text-white ${order.status === true ? "bg-red-500" : "bg-green-500"
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