import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  // Router,
  // Routes,w
  // BrowserRouter,
} from "react-router-dom";
import "./assets/Styles/Style.css"
import Layout from "./Layouts/RootLayout";
import Home from "./components/Home";
import OurProduct from "./components/OurProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Aboutus from "./components/Aboutus";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import ProductDetails from "./components/Product/ProductDetails";
import Payment from "./components/checkout/Payment";
import { useUser } from "./Context/userContext";
import OrderCompleted from "./components/OrderCompleted";

function App() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const itemLists = useSelector((state) => state.cart.itemsList);
  const [items, setItems] = useState([cartItems]);

  let total = 0;
  itemLists.forEach((item) => {
    total += item.totalPrice;
  });
  useEffect(() => {
    // Save cart data to local storage whenever the 'items' state changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(savedCart);
  }, []);


  const { currentUser } = useUser();
  // const currentUser = null;




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={currentUser ? <Layout /> : <Navigate to="/Signup" />}
        >
          <Route index element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/our-products" element={<OurProduct />} />
          <Route path="/our-products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/ordercompleted" element={<OrderCompleted />} />
        </Route>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;