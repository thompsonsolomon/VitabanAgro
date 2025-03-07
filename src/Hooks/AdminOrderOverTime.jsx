import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../assets/data/firebase";
import {
  Chart as ChartJs, ArcElement, Tooltip, Legend, CategoryScale,
  BarElement,
} from "chart.js"
// import { firestore } from "../firebaseConfig";
ChartJs.register(ArcElement, Tooltip,Legend,CategoryScale, BarElement)
export const OrdersOverTime = () => {
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = collection(db, "orders");
      const snapshot = await getDocs(ordersCollection);

      const orderData = {};
      snapshot.forEach((doc) => {
        const { date } = doc.data(); // Assuming orders have a `date` field
        orderData[date] = (orderData[date] || 0) + 1;
      });

      setOrders(orderData);
    };

    fetchOrders();
  }, []);

  const data = {
    labels: Object.keys(orders),
    datasets: [
      {
        label: "Orders per Day",
        data: Object.values(orders),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-LG text-gray-700 font-bold mb-4">Orders Over Time</h2>
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

