
import React, { useState, useEffect } from "react";
import { auth, db } from "../assets/data/firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import CreateFileLink from "./CreateFileLink";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        id: "",
        name: "",
        cover: "",
        desc: "",
        qty: 1,
        price: [
            { currency: "usd", value: "" },
            { currency: "ngn", value: "" },
            { currency: "eur", value: "" },
        ],
    });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch products from Firebase
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
            const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(productsData);
        });
        return () => unsubscribe();
    }, []);

    // Handle form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handlePriceChange = (index, value) => {
        const updatedPrices = [...form.price];
        updatedPrices[index].value = value;
        setForm({ ...form, price: updatedPrices });
    };

    // Handle submit
    const handleSubmit = async (e) => {
        console.log(form)
        e.preventDefault();
        if (!form.name || !form.cover || !form.desc) {
            alert("All fields are required!");
            return;
        }

        try {
            if (isEditing) {
                // Update product
                const productDoc = doc(db, "products", form.id);
                console.log(form.id)
                await updateDoc(productDoc, { ...form });
                alert("Product updated successfully!");
            } else {
                // Add new product
                await addDoc(collection(db, "products"), { ...form, qty: parseInt(form.qty) });
                alert("Product added successfully!");
            }
            resetForm();
        } catch (error) {
            console.error("Error: ", error);
            alert("An error occurred. Please try again.");
        }
    };

    // Delete product
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await deleteDoc(doc(db, "products", id));
                alert("Product deleted successfully!");
            } catch (error) {
                console.error("Error: ", error);
                alert("Failed to delete product.");
            }
        }
    };

    // Reset form
    const resetForm = () => {
        setForm({
            //   id: "",
            name: "",
            cover: "",
            desc: "",
            qty: 1,
            price: [
                { currency: "usd", value: "" },
                { currency: "ngn", value: "" },
                { currency: "eur", value: "" },
            ],
        });
        setIsEditing(false);
    };

    // Edit product
    const handleEdit = (product) => {
        setForm(product);
        setIsEditing(true);
    };
    const [isCreatingFile, setisCreatinFile] = useState(false)

    return (
        <div className="p-8 bg-gray-100">
            <div className="flex justify-end align-center">
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setisCreatinFile(!isCreatingFile)}
                >
                    {isCreatingFile ? "Cancle" : "Create"}
                </button>
                {
                    isCreatingFile &&
                    <CreateFileLink />
                }
            </div>
            <h1 className="text-2xl font-bold mb-6">Manage Products</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded mb-6">
                <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Product" : "Add New Product"}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Product Name"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="url"
                        name="cover"
                        value={form.cover}
                        onChange={handleInputChange}
                        placeholder="Image URL"
                        className="border p-2 rounded"
                        required
                    />
                    <textarea
                        name="desc"
                        value={form.desc}
                        onChange={handleInputChange}
                        placeholder="Product Description"
                        className="border p-2 rounded"
                        required
                    ></textarea>
                    {/* <input
            type="number"
            name="qty"
            value={form.qty}
            onChange={handleInputChange}
            placeholder="Quantity"
            className="border p-2 rounded"
            min="1"
          /> */}
                    {form.price.map((price, index) => (
                        <div key={index}>
                            <label className="block text-sm font-medium">
                                {price.currency.toUpperCase()} Price:
                            </label>
                            <input
                                type="number"
                                value={price.value}
                                onChange={(e) => handlePriceChange(index, e.target.value)}
                                placeholder={`Price in ${price.currency.toUpperCase()}`}
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {isEditing ? "Update Product" : "Add Product"}
                </button>
                {isEditing && (
                    <button
                        type="button"
                        onClick={resetForm}
                        className="mt-4 ml-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                )}
            </form>

       

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 shadow rounded">
                        <img src={product.cover} alt={product.name} className="w-full h-48 object-cover rounded" />
                        <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                        <p className="text-gray-600">{product.desc}</p>
                        <p className="text-gray-800 mt-2">Qty: {product.qty}</p>
                        {/* <ul className="text-gray-700 mt-2">
              {product.price.map((p, index) => (
                <li key={index}>
                  {p.currency.toUpperCase()}: {p.value}
                </li>
              ))}
            </ul> */}
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => handleEdit(product)}
                                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageProducts;