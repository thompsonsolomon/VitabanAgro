import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../assets/data/firebase";

export const OrderStatusDistribution = () => {
  const [statusCounts, setStatusCounts] = useState({});

  useEffect(() => {
    const fetchStatuses = async () => {
      const ordersCollection = collection(db, "orders");
      const snapshot = await getDocs(ordersCollection);

      const statusData = {};
      snapshot.forEach((doc) => {
        const { status } = doc.data(); // Assuming orders have a `status` field
        statusData[status] = (statusData[status] || 0) + 1;
      });

      setStatusCounts(statusData);
    };

    fetchStatuses();
  }, []);

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Order Status Distribution",
        data: Object.values(statusCounts),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg text-gray-700 font-bold mb-4">Order Status Distribution</h2>
      <Pie data={data} options={{ responsive: true }} />
    </div>
  );
};
