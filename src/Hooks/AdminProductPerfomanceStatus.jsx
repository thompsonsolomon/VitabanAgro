import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs, ArcElement, Tooltip, Legend, CategoryScale,
} from "chart.js"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../assets/data/firebase";
ChartJs.register(ArcElement, Tooltip, Legend, CategoryScale)
export const ProductPerformance = () => {
  const [productStats, setProductStats] = useState({});

  useEffect(() => {
    const fetchProductPerformance = async () => {
      // Fetch orders and products collections
      const ordersCollection = collection(db, "orders");
      const productsCollection = collection(db, "products");

      const ordersSnapshot = await getDocs(ordersCollection);
      const productsSnapshot = await getDocs(productsCollection);
      // Map product IDs to product names
      const productMap = {};
      productsSnapshot.forEach((doc) => {
        const id = doc.id
        const {name} = doc.data(); // Assuming `id` is the product ID and `name` is the product name
        productMap[id] = name;
      });

      // Tally sales for each product
      const sales = {};
      ordersSnapshot.forEach((doc) => {
        const { cartItems } = doc.data(); // Assuming orders have `cartItems` array
        cartItems.forEach(({ id: productId, quantity }) => {
          const productName = productMap[productId];
          if (productName) {
            sales[productName] = (sales[productName] || 0) + quantity;
          }
        });
      });

      setProductStats(sales);
    };

    fetchProductPerformance();
  }, []);


  // Prepare data for Pie chart
  const data = {
    labels: Object.keys(productStats),
    datasets: [
      {
        label: "Most-Selling Products",
        data: Object.values(productStats),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg text-gray-700 font-bold mb-4">Product Performance</h2>
      <Pie data={data} options={{ responsive: true }} />
    </div>
  );
};

