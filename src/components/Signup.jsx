import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../assets/data/firebase";

export default function Signup() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Loading, setLoading] = useState(false);

  const HandleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, Email, Password);
      setLoading(false);
      toast.success("User Created");
    } catch (error) {
      toast.error(error.message);
      setEmail("");
      setPassword("");
      setLoading(false);
    }

  }
  return (
      <div className="flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-100 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
          Create New Admin
          </h2>
          <form className="mt-8 space-y-6" onSubmit={HandleSignup}
          >
            <div className="space-y-4">
             
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
             

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={Password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 mt-1 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <a href="/signin">
                <button
                  onClick={HandleSignup}
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-[#4caf50] border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  {
                    Loading ? "Loading" :
                      "Create"
                  }
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
  );
}
