import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/slice';
import { toast } from 'react-toastify';
import { db } from '../../assets/data/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { FormatCurrency, truncate } from '../../assets/data/data';
import { Product10 } from '../../assets/images';

function ProductDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [seeMore, setSeeMore] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Currency = useSelector((state) => state.cartType.cartType);

    useEffect(() => {
        setIsLoading(true);
        const q = query(collection(db, "products"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let foundProduct = null;
            querySnapshot.forEach((doc) => {
                if (doc.id === id) {
                    foundProduct = { ...doc.data(), id: doc.id };
                }
            });
            setProduct(foundProduct);
            setIsLoading(false);
        });
        return () => unsub();
    }, [id]);

    const addToCart = () => {
        if (product) {
            dispatch(cartActions.addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                cover: product.cover,
            }));
            toast.success("Added to cart");
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-600">
                Loading...
            </div>
        );
    }

    // ✅ FIX: Correct currency comparison (===) and fallback if not found
    const matchedPrice = product?.price?.find(p => p.currency === Currency);
    const Price = matchedPrice?.value || 0;

    return (
        <div className="p-6 pt-[100px] lg:px-20 bg-grey-100">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-white bg-green-500 px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
                <BiArrowBack size={24} className="mr-2" /> Back
            </button>

            {product && (
                <section className="mt-6 bg-white shadow-lg rounded-xl overflow-hidden">
                    <div
                        className="relative h-80 bg-cover bg-center justify-end flex items-start p-6"
                        style={{ backgroundImage: `url(${product.cover || Product10})` }}
                    >
                        <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md shadow-lg">
                            {product.name || "Product Name"}
                        </h1>
                    </div>

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='flex items-center justify-center absolute top-[65dvh] left-[200px] max-md:left-[100px] transform -translate-x-1/2'>
                            <img src={product.cover || Product10} alt={product.name} className="w-40 h-40 rounded-full shadow-md max-md:w-20 max-md:h-20"/>
                        </div>
                        <div className="flex flex-col mt-[60px] justify-between">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {product.desc ? truncate(product.desc, seeMore ? 10000000 : 350) : "No description available."}
                                {
                                    product.desc && product.desc.length > 350 && (
                                        <span
                                            className="text-blue-500 cursor-pointer ml-2 font-semibold"
                                            onClick={() => setSeeMore(!seeMore)}
                                        >
                                            {seeMore ? "Show Less" : "Read More"}
                                        </span>
                                    )
                                }
                            </p>
                            <div className="mt-6 flex flex-col gap-4">
                                <p className="text-3xl font-semibold text-gray-900">
                                    {Currency} {FormatCurrency(Price)}
                                </p>
                                <button
                                    onClick={addToCart}
                                    className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-green-700 transition-all duration-300"
                                >
                                    <AiOutlinePlusCircle size={24} className="mr-2" /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default ProductDetails;
