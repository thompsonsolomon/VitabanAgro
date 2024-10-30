import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../assets/data/firebase";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Phone, setPhone] = useState("")
  const [Password, setPassword] = useState("")
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const phoneNumber = parseInt(Phone)
    try {
      const res = await createUserWithEmailAndPassword(auth, Email, Password);

      await updateProfile(res.user, {
        displayName: Name,
        phoneNumber
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        email: Email,
        name: Name,
        contact: Phone,
        RegisteredDate: new Date().getDate(),
        RegisteredTime: new Date().getTime(),
      });


      setLoading(false);
      toast.success("logged in");
      navigate("/");
      window.location.href = "/"
    } catch (error) {
      toast.error(error.message);
      setEmail("");
      setPassword("");
      setLoading(false);
    }

    console.log(Email, Password);

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <form className="mt-8 space-y-6" onSubmit={HandleSignup}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                id="name"
                name="name"
                type="tet"
                autoComplete="name"
                required
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
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
                htmlFor="pnumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="pnumber"
                name="number"
                type="number"
                autoComplete="number"
                required
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
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

          <div className="xs:flex space-y-3 sm:space-y-0 items-center justify-between">
            <div className="flex  items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4  bg-white border-gray-300 rounded focus:ring-green-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm text-black">
              Already have an account? <a href="/signin">Login</a>
            </div>

          </div>

          <div>
            <a href="/signin">
              <button
                onClick={HandleSignup}
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-[#45c429] border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {
                  Loading ? "..." :
                    "Sign Up"
                }
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
