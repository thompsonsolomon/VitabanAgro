import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../../redux/slice";
import { Link } from "react-router-dom";
import { FormatCurrency, Truncate } from "../../assets/data/data";

const ProductCard = ({ id, name, price, cover, description }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
    toast.success("Added to cart");
  };


  return (
    <div className="bg-white rounded-lg width-full w-[250px]  shadow-md p-4 transition duration-300 hover:shadow-lg">
      <Link to={`/products/${id}`} className="block">
        <img
          src={cover}
          alt={name}
          className="w-full h-48 object-cover rounded-md"
        />
      </Link>
      <div>

        <div className=" flex items-center justify-between  mt-3">
          <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
          <button
            onClick={addToCart}
            className="mt-3 flex items-center justify-center gap-2 w-[40px] bg-[#16a34a] text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            <AiOutlineShoppingCart size={18} />
          </button>
        </div>

        <div>
          <p className="text-gray-600 text-sm ">{Truncate(description)}</p>
        </div>

        <div className="flex items-center justify-between mt-4">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <defs>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#16a34a", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#0f9d58", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path fill="url(#greenGradient)" d="M12 2C10.4 2 8.9 2.7 7.9 4H5c-.6 0-1 .4-1 1s.4 1 1 1h.6L3.2 9.4C3.1 9.6 3 9.8 3 10v8c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-8c0-.2-.1-.4-.2-.6L18.4 6H19c.6 0 1-.4 1-1s-.4-1-1-1h-2.9c-1-1.3-2.5-2-4.1-2zM7.5 10h9c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5h-9c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5zm4.5 1c-1.7 0-3 1.3-3 3h2c0-.6.4-1 1-1s1 .4 1 1c0 1-1.5 1.2-2.2 1.6C9.5 15.9 9 16.4 9 17h6c0-.7-.5-1.3-1.3-1.7-.7-.4-2.2-.6-2.2-1.6 0-.6.4-1 1-1s1 .4 1 1h2c0-1.7-1.3-3-3-3z" />
          </svg>
          <p className="text-lg font-bold text-green-600"> {"# "}{FormatCurrency(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
