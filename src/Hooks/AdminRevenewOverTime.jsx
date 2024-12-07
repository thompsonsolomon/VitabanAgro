
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import {
  Chart as ChartJs, ArcElement, Tooltip, Legend, CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
} from "chart.js"
import { db } from "../assets/data/firebase";
ChartJs.register(ArcElement, Tooltip,Legend,CategoryScale, PointElement, LineElement,LinearScale )
export const RevenueOverTime = () => {
  const [revenue, setRevenue] = useState({});

  useEffect(() => {
    const fetchRevenue = async () => {
      const ordersCollection = collection(db, "orders");
      const snapshot = await getDocs(ordersCollection);

      const revenueData = {};
      snapshot.forEach((doc) => {
        const { date, totalPrice } = doc.data(); // Assuming orders have `date` and `totalPrice` fields
        revenueData[date] = (revenueData[date] || 0) + totalPrice;
      });

      setRevenue(revenueData);
    };

    fetchRevenue();
  }, []);


  const data = {
    labels: Object.keys(revenue),
    datasets: [
      {
        label: "Revenue per Day",
        data: Object.values(revenue),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-LG text-gray-700 font-bold mb-4">Revenue Over Time</h2>
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};
