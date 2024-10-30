import React, { useEffect, useState } from 'react'
import "../../assets/Styles/productDetaills.css"
import { Product10 } from '../../assets/images'
import { truncate } from '../../assets/data/data'
import { useParams } from 'react-router'
// import { product } from "../../assets/data/data";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slice'
import { toast } from 'react-toastify'

import { db } from "../../assets/data/firebase";
import {
    collection,
} from "firebase/firestore";

import { query, onSnapshot } from "firebase/firestore";

function ProductDetails() {


    const [AllData, setAllData] = useState([]);
    let StreamArrey = [];
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const q = query(collection(db, "products"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                StreamArrey.push({ ...doc.data(), id: doc.id });
            });
            setAllData(StreamArrey);
            setIsLoading(false);
        });
        return () => unsub();
    }, []);
    console.log(AllData);



    const [see, setSee] = useState(true)
    const params = useParams();
    // const ID = parseInt(params.id)
    const Product = AllData.filter(function (e) {
        return e.id === params.id;
    });

    console.log(Product, params.id)
    const dispatch = useDispatch();
    const addToCart = ({ id, name, price, cover }) => {
        dispatch(cartActions.addToCart({ id, name, price, cover }));
        toast.success("added");
    };

    return (
        <div>
            <section className="ProductDetailscontainer">
                <div className="food-details">
                    {
                        Product && Product.map((data) => (

                            <div key={data.id}>
                                <div className="productDetailsBanner">
                                    <div className="coverImg"
                                        style={
                                            {
                                                backgroundImage: `url(${data.cover})`
                                            }
                                        }
                                    >
                                        <h1 className='productName'>{
                                            data.name ? data.name : "Product Name"
                                        }</h1>
                                    </div>
                                    <div className="product-container_image-Con">
                                        <img src={
                                            data.cover
                                                ? data.cover
                                                : Product10}
                                            alt="" />
                                    </div>

                                </div>
                                <div className="profile-container">
                                    <div>
                                        <p className="text-black">
                                            {
                                                data.desc
                                                    ? truncate(data.desc, see ? 350 : 10000000)
                                                    : "product description"
                                            }
                                            <span className='readMore' onClick={() => setSee(!see)}>{see && data.desc.length >= 351 ? " More" : !see && data.desc.length >= 351 ? "Less" : ""}</span>
                                        </p>
                                    </div>

                                    <div className="sm xd:flex">

                                        <div className="text-black text-sm flex flex-col  w-full mt-4">
                                            <p className="text-xs md:text-base">Price:</p>
                                            <p>${data.price}</p>
                                        </div>
                                        <div className="w-full mt-4">
                                            <button
                                                onClick={() => addToCart({ id: data.id, name: data.name, price: data.price, cover: data.cover })}
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
                            </div>


                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default ProductDetails