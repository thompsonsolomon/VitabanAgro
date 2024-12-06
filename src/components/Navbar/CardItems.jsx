import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {   } from "react-toastify";
import { cartActions } from "../../redux/slice";
import { FormatCurrency } from "../../assets/data/data";


const CardItems = ({
  key,
  id,
  item,
  name,
  price,
  cover,
  quantity,
  openCard,
  totalPrice,
}) => {

  const dispatch = useDispatch();
  
  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };
  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };


  return (
    <div key={id} className="p-4 bg">
      <div className="flex text-black justify-between items-start">
        <div className=" relative  w-[30%] ">
          <img src={cover} alt="" />
          <button
            className=" absolute top-0 hover:bg-[#0000004c] 
          w-full 
          h-full items-center 
          flex justify-center"
          >
            {/* <FaTimes className=" bg-white rounded-full p-1" size={25} /> */}
          </button>
        </div>
        <div className="w-[63%] text-black">
          <div>
            <p>{name}</p>
            <label className=" text-xs" htmlFor="">
              Unit Price:{FormatCurrency(price)}
            </label>
          </div>
          <div className="">
            <div className=" w-[60%] md:w-[50%] p-2 bg-black py-[2px] flex justify-between rounded text-white mr-1  ">
              <button  onClick={incCartitems}>
                <AiOutlinePlus />
              </button>
              <button>{quantity}</button>
              <button  onClick={descCartitems}>
                <AiOutlineMinus />
              </button>
            </div>
            <div> Total-item: {FormatCurrency(totalPrice)}</div>
            {/* <div> Total-item: {Math.round(`${totalPrice}`)}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
