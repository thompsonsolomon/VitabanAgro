import React, { useEffect, useState } from "react";
import { db } from "../../assets/data/firebase";
import {
  collection,
} from "firebase/firestore";
import { query, onSnapshot } from "firebase/firestore";
import { product } from "../../assets/data/data";
import ProductCart from "./ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { cartTypeActions } from "../../redux/slice";
// import ProductCategory from "./ProductCategory";
// import { useSelector } from "react-redux";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
  const Currency = useSelector((state) => state.cartType.cartType);
  // const newArray = product.filter(function (e) {
  //   return e.category === cartItems;
  // });


  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    //const results = product.filter((loc) =>
    const results = AllData.filter((loc) =>

      loc.name.toLowerCase().includes(keyword)
    );
    setSearchTerm(keyword);
    setSearchResults(results);
  };
  const dispatch = useDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState("NGN")
  const handleChangeCurrency = (e) => {
    setSelectedCurrency(e.target.value)
    dispatch(cartTypeActions.setCartType({ title: e.target.value }));
  }

  console.log(selectedCurrency)
  console.log(AllData)


  return (
    <div className="max-w-7xl mx-auto px-4">


      <div className="flex gap-3  items-start justify-between">
        <input
          className="w-[50%]
           px-3 bg-white py-2 
           my-5 text-gray-900
          border border-gray-300
           rounded-md shadow-sm 
          focus:ring-2 focus:ring-green-500
          focus:border-green-500 sm:text-sm"
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleSearch}
        />

        <select value={selectedCurrency} id="currency"
          className="w-[10%] selecte
                      px-3 bg-white py-2 
                      my-5 text-gray-900
                      border border-gray-300
                      rounded-md shadow-sm 
                      focus:ring-2 focus:ring-green-500
                    focus:border-green-500 sm:text-sm"
          onChange={handleChangeCurrency}
        >
          <option value="NGN">NGN</option>
        
        </select>
      </div>
      {
        isLoading ? <div>Loading...</div> :
          <div>
            {
              searchResults.length === 0 ?
                <div>
                  <div className="grid bg-white grid-cols-2 finalS lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {/* {AllData.map((item) => ( */}                    {
                      // product.map((item) => {  
                      AllData.map((item) => {
                        const price = item.price.find(price => price.currency === Currency)?.value
                        return (
                          <ProductCart
                            key={item.id}
                            id={item.id}
                            cover={item.cover}
                            name={item.name}
                            price={price}
                            quantity={item.qty}
                            totalPrice={item.totalPrice}
                            description={item.desc}

                          />
                        )
                      })
                    }
                  </div>
                </div>
                :

                <div>
                  <span className="CartType">{searchResults.length} Product{"(s)"} Found </span>
                  <div className="grid bg-white grid-cols-2 finalS lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {
                      searchResults.map((item) => {
                        const price = item.price.find(price => price.currency = Currency)?.value
                        return (
                          <ProductCart
                            key={item.id}
                            id={item.id}
                            cover={item.cover}
                            name={item.name}
                            price={price}
                            quantity={item.qty}
                            totalPrice={item.totalPrice}
                            description={item.desc}
                          />
                        )
                      })
                    }
                  </div>
                </div>
            }

          </div>}
    </div>
  );
};

export default Product;
