import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./payment.css";
// import { db } from "../../firebase";
// import { addDoc, collection } from "firebase/firestore";
import CardItems from "../Navbar/CardItems";
import { useSelector } from "react-redux";
import PaymentButton from "./PaymentButton";
import { useUser } from "../../Context/userContext";
import CurrencyConverter from "../../Hooks/CurrencyConverter";

export default function Payment() {

  const cartItems = useSelector((state) => state.cart.itemsList);
  const itemLists = useSelector((state) => state.cart.itemsList);

  console.log(cartItems)
  let total = 0;
  itemLists.forEach((item) => {
    total += item.totalPrice;
  });

  const { currentUser } = useUser();

  console.log(cartItems)
  console.log(typeof (cartItems))



  const [selectedCurrency, setSelectedCurrency] = useState("CUR")
  const handleChangeCurrency = (e) => {
    setSelectedCurrency(e.target.value)
  }

  const { convertedAmount, error, convertCurrency } = CurrencyConverter();
  // convertCurrency(total, 'USD', selectedCurrency);
  convertCurrency(Number(total ? total : 1000), selectedCurrency);
  // convertCurrency(300,  'NGN');



  const [Address, setAddress] = useState("Enter Your Address");
  let Orders = {}
  cartItems.forEach((order) => {
    Orders = {
      Address,
      cover: order.cover,
      amount: order.price,
      quantity: order.quantity,
      ToTal_Amount: order.totalPrice,
      id: order.id,
      other_Orders: JSON.stringify(cartItems)
    }
  })


  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout">{cartItems?.length} items</Link>)
        </h1>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address:</h3>
          </div>
          <div className="paymentAddress">
            <p> {currentUser?.email}</p>
            <p>{Address}</p>

          </div>
          <div className="paymentAddress">
            <input type="text" placeholder="Change Location"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}

            />
          </div>
        </div>

        <div className="paymentSection">
          <div className="paymentT itle">
            <h3>Review items and delivery:</h3>
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
        </div>
      </div>
      <div className="paymentSection">
        <div className="paymentTitle">
          <h3>Payment Method:</h3>
        </div>
        <div className="paymentDetails">
          {/* <form action="/" method="POST" onSubmit={handleSubmit}> */}


          <div className="paymentPriceCon">
            <h3>Order Total: <p>${Math.round(`${total}`)}</p></h3>
            <label htmlFor="currency">Select Currrency: </label>
            <select value={selectedCurrency} id="currency"
              onChange={handleChangeCurrency}
            >
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>

            <div>

              {convertedAmount && (
                <p>Converted Amount: {convertedAmount.toFixed(2)} {selectedCurrency}</p>
              )}
            </div>

            <PaymentButton
              //  Amount={Math.round(`${total}`)} 
              Amount={convertedAmount}
              Orders={Orders}
              Currency={selectedCurrency}
            />
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
