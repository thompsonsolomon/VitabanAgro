import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useUser } from "../../Context/userContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../assets/data/firebase";
import { useNavigate } from "react-router";



export default function PaymentButton({ Amount, Currency, Orders }) {



  const { currentUser } = useUser();

  const config = {
    public_key: "FLWPUBK_TEST-3601e54364c18a848924c00e6fa6e1dd-X",
    tx_ref: Date.now(),
    amount: Amount,
    currency: Currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: currentUser.email,
      // phone_number: "08141342103",
      name: currentUser.displayName,
    },
    customizations: {
      title: "Pay Vitabanagro",
      description:
        `Payment from ${currentUser.displayName} to VitaBanaGro`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const navigate = useNavigate()

  const [PlaceOrder, setPlaceOrder] = useState()
  console.log("Orders_from_payment_button_container " + Orders)
  const Address = Orders.Address
  const cover = Orders.cover
  const amount = Orders.amount
  const quantity = Orders.quantity
  const ToTal_Amount = Orders.ToTal_Amount
  const id = Orders.id
  const Others = Orders.other_Orders
  const isDelivered = false

  console.log(Address, cover, amount, quantity, ToTal_Amount, id)
  const HandlePlaceOrder = async (e) => {
    const current = new Date();
    // By default US English uses 12hr time with AM/PM
    const time = current.toLocaleTimeString("en-US");
    try {
      await addDoc(collection(db, "orders"), {
        Address, cover, amount, quantity, ToTal_Amount, id, time, isDelivered, Others
      });
      navigate("/ordercompleted")
    } catch (error) {
      console.log("error", error.message);
    }
    console.log("success", "Order Added Successfully");
  };

  if (PlaceOrder && PlaceOrder.status === "successful") {
    HandlePlaceOrder()
  }
  console.log("Orders===>" + PlaceOrder)

  return (
    <div className="App">
      <button
        disabled={Currency === "CUR" || Address === "Enter Your Address"}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              setPlaceOrder(response)
              closePaymentModal(); // this will close the modal programmatically
              navigate("/ordercompleted")
            },
            onClose: () => { },
          });
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
