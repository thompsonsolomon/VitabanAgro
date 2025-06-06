import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../assets/data/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function Signin() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      setLoading(false);
      toast.success("logged in");
      navigate("/admin");
    } catch (error) {
      toast.error(error.message);
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign in
        </h2>
        <form className="mt-8 space-y-6"
          onSubmit={HandleLogin}

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
                className="w-full px-3 bg-white py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <a href="/">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-[#45c429] border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {Loading ? "Loading " : "Log in"}
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
