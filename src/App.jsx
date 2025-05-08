import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
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
import ForgottenPassword from "./components/ForgottenPassword";
import OrdersPage from "./components/Orders";
import Contact from "./components/Contact/Contact";
import ManageProducts from "./Hooks/AdminAddProduct";
import Admin from "./components/Admin";
import OrderDetails from "./components/OrderDetails";

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
    if (cartItems && cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(savedCart);
  }, []);

  const { currentUser } = useUser();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route index element={<OurProduct />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/home" element={< Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/orders" element={currentUser ? <OrdersPage /> : <Signin />} />
          <Route path="/ordercompleted" element={<OrderCompleted />} />
          <Route path="/addproduct" element={currentUser ? <ManageProducts /> : <Signin />} />
          <Route path="/admin" element={currentUser ? <Admin /> : <Signin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<OurProduct />} />
        </Route>
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