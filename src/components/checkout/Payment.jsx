// import React, { Fragment, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./payment.css";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../assets/data/firebase";
// import CardItems from "../Navbar/CardItems";
// import { useSelector } from "react-redux";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { toast } from "react-toastify";

// export default function Payment() {

//   const cartItems = useSelector((state) => state.cart.itemsList);
//   const itemLists = useSelector((state) => state.cart.itemsList);
//   const Currency = useSelector((state) => state.cartType.cartType);
//   const navigate = useNavigate()


//   console.log(typeof cartItems)
//   let total = 0;
//   itemLists.forEach((item) => {
//     total += item.totalPrice;
//   });
//   const [Address, setAddress] = useState("");
//   const [Email, setEmail] = useState("")
//   const [Name, setName] = useState("")
//   const [Phone, setPhone] = useState("")
//   const [Loading, setLoading] = useState(false)
//   const config = {
//     public_key: "FLWPUBK_TEST-3601e54364c18a848924c00e6fa6e1dd-X",
//     tx_ref: Date.now(),
//     amount: total,
//     currency: Currency,
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: Email && Email,
//       phone_number: Phone && Phone,
//       name: Name && Name,
//     },
//     customizations: {
//       title: "Pay Vitabanagro",
//       description:
//         `Payment from ${Name && Name} to VitaBanaGro`,
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   };
//   const handleFlutterPayment = useFlutterwave(config);
//   const HandlePlaceOrder = async (e) => {
//     const current = new Date();
//     // By default US English uses 12hr time with AM/PM
//     const time = current.toLocaleTimeString("en-US");
//     const date = current.toDateString("en-US")
//     const OrderStatus = false
//     try {
//       await addDoc(collection(db, "orders"), {
//         cartItems, time,totalPrice:total, 
//         Name, Email, Phone, Address, Currency, date, status: OrderStatus
//       });
//       console.log("success", "Order Added Successfully");
//     } catch (error) {
//       console.log("error", error.message);
//     }
//   };

//   const HandlePlaceorder = async () => {

//     try {
//       setLoading(true)
//       if (!Name || !Email || !Phone || !Address || !Currency || total === 0) {
//         toast("Fill in all delivery details and select Currency")
//         setLoading(false)
//       } else {
//         handleFlutterPayment({
//           callback: (response) => {
//             closePaymentModal(); // this will close the modal programmatically
//           },
//           onClose: () => { 
//             navigate("/ordercompleted")
//           },
//         });
//         await HandlePlaceOrder()
//         navigate("/ordercompleted")
//       }

//     } catch (error) {
//       setLoading(false)
//       toast.error(error.message)
//     }

//   }
//   return (
//     <div className="payment">
//       <div className="paymentContainer">
//         <h1>
//           Checkout (<Link to="/checkout">{cartItems?.length} items</Link>)
//         </h1>
//         <div className="mt-[30px]">
//           <div className="checkoutPageContainer flex items-start justify-between min-h-screen bg-white">
//             <div className="paymentSection mr-5  w-full min-w-md p-8 space-y-8 ">
//               <div className="paymentT itle mt-3">
//                 <div className="block text-[2em]  text-gray-900">Products</div>
//               </div>
//               <div className="payment__items">
//                 {total ? (
//                   <div className=" space-y-3 ">
//                     {cartItems.map((item) => (
//                       <CardItems
//                         key={item.id}
//                         id={item.id}
//                         cover={item.cover}
//                         name={item.name}
//                         price={item.price}
//                         quantity={item.quantity}
//                         totalPrice={item.totalPrice}
//                       />
//                     ))}
//                   </div>
//                 ) : (
//                   <p className=" text-center text-xl font-bold">
//                     Your cart is empty
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <div className="block text-[2em]  text-gray-900">you will be paying with {Currency}</div>
//                 <button
//                   className="w-full px-4 py-2 text-sm font-medium text-white bg-[#45c429] border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                   onClick={() => {
//                     HandlePlaceorder()
//                   }}
//                 >
//                   {Loading ? "Loading " :
//                     "Pay Now"
//                   }
//                 </button>
//               </div>
//             </div>
//             <div className="w-full min-w-md p-8 space-y-8 bg-gray-100 shadow-lg rounded-lg">
//               <form className="mt-3 space-y-6"
//               >
//                 <div className="block text-[2em]  text-gray-900">Delivery Details</div>
//                 <div className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Full Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="tet"
//                       autoComplete="name"
//                       required
//                       value={Name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Email address
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       required
//                       value={Email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="pnumber"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Phone Number
//                     </label>
//                     <input
//                       id="pnumber"
//                       name="number"
//                       type="number"
//                       autoComplete="number"
//                       required
//                       value={Phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="address"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Delivery Address
//                     </label>
//                     <input
//                       id="address"
//                       name="address"
//                       type="text"
//                       autoComplete="address"
//                       required
//                       value={Address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./payment.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../assets/data/firebase";
import CardItems from "../Navbar/CardItems";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PaystackButton } from "react-paystack";

export default function Payment() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const itemLists = useSelector((state) => state.cart.itemsList);
  const Currency = useSelector((state) => state.cartType.cartType);
  const navigate = useNavigate();

  let total = 0;
  itemLists.forEach((item) => {
    total += item.totalPrice;
  });

  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Loading, setLoading] = useState(false);

  // const publicKey = "pk_test_c475747d64897e53ad10325ad3a8cf138129e9f7"; // Replace with your Paystack public key
  const publicKey = "pk_live_8fc6c6ef1ec68fde448f2f793234d5406dd97249"; // Replace with your Paystack public key
  const handleSuccess = async (reference) => {
    // Save order to Firestore
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    const date = current.toDateString("en-US");
    const OrderStatus = false;

    try {
      await addDoc(collection(db, "orders"), {
        cartItems,
        time,
        totalPrice: total,
        Name,
        Email,
        Phone,
        Address,
        Currency,
        date,
        status: OrderStatus,
        paymentRef: reference.reference,
      });
      toast.success("Order Added Successfully");
      navigate("/ordercompleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClose = () => {
    toast.info("Payment closed. Try again if you wish to complete the purchase.");
  };

  const componentProps = {
    email: Email,
    amount: total * 100, // Paystack expects amount in kobo (for NGN)
    metadata: {
      name: Name,
      phone: Phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: handleSuccess,
    onClose: handleClose,
    currency: Currency,
  };

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout">{cartItems?.length} items</Link>)
        </h1>
        <div className="mt-[30px]">
          <div className="checkoutPageContainer flex items-start justify-between min-h-screen bg-white">
            <div className="paymentSection mr-5  w-full min-w-md p-8 space-y-8 ">
              <div className="paymentT itle mt-3">
                <div className="block text-[2em]  text-gray-900">Products</div>
              </div>
              <div className="payment__items">
                {total ? (
                  <div className=" space-y-3 ">
                    {cartItems.map((item) => (
                      <CardItems
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}
                      />
                    ))}
                  </div>
                ) : (
                  <p className=" text-center text-xl font-bold">
                    Your cart is empty
                  </p>
                )}
              </div>
              <div>
                <div className="block text-[2em]  text-gray-900">You will be paying with {Currency}</div>
                <PaystackButton
                  {...componentProps}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-[#45c429] border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="w-full min-w-md p-8 space-y-8 bg-gray-100 shadow-lg rounded-lg">
              <form className="mt-3 space-y-6">
                <div className="block text-[2em]  text-gray-900">Delivery Details</div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="pnumber" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="pnumber"
                      name="number"
                      type="number"
                      required
                      value={Phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Delivery Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={Address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
