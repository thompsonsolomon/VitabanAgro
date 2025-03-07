import React from "react";
import "./ProductCartegory.css";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import { useDispatch } from "react-redux";
import { cartTypeActions } from "../../redux/slice";
function ProductCategory({ data }) {
  const [cart, setCart] = useLocalStorage('productCart', "All");
  const [cartegory] = useLocalStorage('productCart', "All");
  const dispatch = useDispatch();

  const SelectCartType = (title) => {
    setCart(title)
    dispatch(cartTypeActions.setCartType({ title }));
    // toast.success("added");
    // AddToCart({ id, name, price, cover })
  };
  return (
    <div className="CardContainer">
      <div className="cardWrapper">
        <div className="cardHead">Shop our Top Category </div>
        <div className="card-element_Container">
          {data && data.map((item) => (
            <div className="Cards" onClick={() => SelectCartType(item.title)}>
              <div className="cardImage">
                <img src={item.cover} alt="productCartegory" className={item.title === cart ? "blur" : " "} />
              </div>
              <div className="cardTitle">{item.title}</div>
              <div className={item.title === cart ? "cardDescUP" : " cardDesc"}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
