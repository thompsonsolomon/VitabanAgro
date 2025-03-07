import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '../Context/userContext';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../assets/data/firebase';
import OrderTable from '../Hooks/OrderTable';
import ReactToPrint from 'react-to-print';

const OrdersPage = () => {
  const { currentUser } = useUser();
  const [AllData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Store a separate ref for each order
  const refs = useRef({});

  // useEffect(() => {
  //   setIsLoading(true);
  //   const q = query(collection(db, 'orders'));
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     const StreamArray = [];
  //     querySnapshot.forEach((doc) => {
  //       StreamArray.push({ ...doc.data(), id: doc.id });
  //     });
  //     setAllData(StreamArray);
  //     setIsLoading(false);
  //   });
  //   return () => unsub();
  // }, []);

  // const orders = AllData.filter((order) => order.buyerId === currentUser.uid);
  // const cartItems = useSelector((state) => state.cart.itemsList);

  // cartItems, time,
  //       Name, Email, Phone, Address, Currency
  const orders = [{
    id: 0,
    name: "WOOD CHARCOAL",
    amount: 9.0,
    quantity: 1,
    category: "farm",
    Address: "test",
    cover: "https://671f70e8354d4a00cfe2ed4e--vitabanagro.netlify.app/assets/product3-5e438662.jpg",
    ToTal_Amount: 9.0,
    desc: "We supply sustainably Sourced Timber, wood charcoal is a versatile and valuable fuel source that is valued for its high heat output, long burn time, and absorbent properties. Whether used for cooking, heating, or industrial purposes, charcoal is an important part of many cultures and industries around the world. When using wood charcoal, be sure to choose high-quality charcoal and use it in a safe and responsible manner.",
  },
  {
    id: 1,
    name: "WOOD CHARCOAL",
    amount: 9.0,
    quantity: 1,
    category: "farm",
    Address: "test",
    cover: "https://671f70e8354d4a00cfe2ed4e--vitabanagro.netlify.app/assets/product3-5e438662.jpg",
    ToTal_Amount:9.0 ,
    desc: "We supply sustainably Sourced Timber, wood charcoal is a versatile and valuable fuel source that is valued for its high heat output, long burn time, and absorbent properties. Whether used for cooking, heating, or industrial purposes, charcoal is an important part of many cultures and industries around the world. When using wood charcoal, be sure to choose high-quality charcoal and use it in a safe and responsible manner.",
  },
  ]
  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>

      {isLoading && <div className="text-center text-lg">Loading...</div>}

      {orders && orders.length > 0 ? (
        orders.map((order) => {
          // Create or retrieve a ref for this specific order
          if (!refs.current[order.id]) {
            refs.current[order.id] = React.createRef();
          }
          return (
            <div key={order.id} className="mb-8 bg-white shadow-md rounded-lg p-6">
              <OrderTable ref={refs.current[order.id]} order={order} />

              <div>
                <a href="/addproduct">
                <button
                    type="button"
                    className="mt-4 mb-5 ml-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Products

                </button>
                    </a>
            </div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-lg">No orders found.</div>
      )}
    </div>
  );
};

export default OrdersPage;
