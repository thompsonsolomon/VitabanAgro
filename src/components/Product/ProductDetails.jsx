import React, { useEffect, useState } from 'react'
import "../../assets/Styles/productDetaills.css"
import { Product10 } from '../../assets/images'
import { FormatCurrency, truncate } from '../../assets/data/data'
import { useNavigate, useParams } from 'react-router'
// import { product } from "../../assets/data/data";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slice'
import { toast } from 'react-toastify'

import { db } from "../../assets/data/firebase";
import {
    collection,
} from "firebase/firestore";

import { query, onSnapshot } from "firebase/firestore";
import { BiArrowBack } from 'react-icons/bi'

function ProductDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams(); // Extract the order ID from URL params
    const [Product, setProduct] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true);

        // Query the Firebase "orders" collection
        const q = query(collection(db, "products"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let foundOrder = null;
            querySnapshot.forEach((doc) => {
                if (doc.id === id) {
                    foundOrder = { ...doc.data(), id: doc.id };
                }
            });
            setProduct(foundOrder);
            setIsLoading(false);
        });

        return () => unsub(); // Clean up the listener
    }, [id]);

    const [see, setSee] = useState(true)

    const dispatch = useDispatch();
    const addToCart = ({ id, name, price, cover }) => {
        dispatch(cartActions.addToCart({ id, name, price, cover }));
        toast.success("added");
    };
    console.log(Product.price)
    const GoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <section className="ProductDetailscontainer">
                <div className="food-details">

                    <div key={Product.id}>
                        <div className="productDetailsBanner">
                            <div className="coverImg"
                                style={
                                    {
                                        backgroundImage: `url(${Product.cover})`
                                    }
                                }
                            >
                                <h1 className='productName'>{
                                    Product.name ? Product.name : "Product Name"
                                }</h1>
                            </div>
                            <div className="product-container_image-Con">
                                <img src={
                                    Product.cover
                                        ? Product.cover
                                        : Product10}
                                    alt="" />
                            </div>

                        </div>
                        <div className="profile-container">
                            <div>
                                <p className="text-black">
                                    {
                                        Product.desc
                                            ? truncate(Product.desc, see ? 350 : 10000000)
                                            : "product description"
                                    }
                                    <span className='readMore' onClick={() => setSee(!see)}>{"Read More"}</span>
                                </p>
                            </div>

                            <div className="sm xd:flex">


                                <div className="w-full mt-4">
                                    <button
                                        onClick={() => GoBack()} className="text-[15px] rounded p-[4px]
                  xd:w-[10%] h-9 ml-auto flex items-center justify-between 
                  bg-[rgb(76,175,80)] text-white shado mb-8"
                                    >
                                        <p className="s:hidden xs:block">Back</p>
                                        <BiArrowBack size={20} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ProductDetails