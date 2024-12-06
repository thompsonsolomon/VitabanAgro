import React, { useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../../redux/slice";
import { Link } from "react-router-dom";
import { FormatCurrency } from "../../assets/data/data";
// import { AddToCart } from "../../Hooks/HandleAddToCart";

const ProductCart = ({ key, id, name, price, cover }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
    toast.success("added");
    // AddToCart({ id, name, price, cover })
  };


  return (
    <div
      className="bg-white md:h-auto xd:h-auto p-4 rounded-lg  
        transition-all ease-in-out duration-[1s] shadow-xl"
      id="product"
      key={id}
    >
      <div className="sm xd:flex items-top flex-col">
        <Link to={`/products/${id}`}>
          <div className="xd:w-[100%]">
            <img
              className="w-[100%] xxs:object-cover h-[40vh] md:h-[30vh] xd:h-[35vh]"
              src={cover}
              alt=""
            />
          </div>



        </Link>
        <div className="text-black text-sm flex flex-col  w-full mt-4">
          <p className="text-xs md:text-base">{name}</p>
          <p>Amount:
            <span>{
              FormatCurrency(price)
            }
            </span>
              </p>
        </div>
        <div className="w-full mt-4">
          <button
            onClick={addToCart}
            className="text-[15px] rounded p-[4px] w-full 
                  xd:w-[50%] h-9 ml-auto flex items-center justify-between 
                  bg-[rgb(76,175,80)] text-white shado"
          >
            <p className="s:hidden xs:block">Add</p>
            <AiOutlinePlusCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
