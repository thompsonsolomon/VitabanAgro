import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Logo } from "../../assets/images";

const Foot = () => {
  return (
    <footer className="bg-white-900 text-black py-10">
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About Section */}
        <div>
          {/* <h1 className="text-3xl font-bold text-[#4caf50] mb-4">AgriMarket</h1> */}
          <img src={Logo} alt="logo" />

          <p className="text-sm text-black">
            Your one-stop solution for quality agricultural products. Delivering nature's best to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg text-black font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-black">
            <li>
              <a href="#" className="hover:text-green-400">Home</a>
            </li>
           
            <li>
              <a href="#" className="hover:text-green-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">Contact</a>
            </li>
          </ul>
        </div>



        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 <b>Address</b>:Primal Tek Plaza, Egbeda-Idimu Road, Mokola Bus Stop Lagos, Nigeria
            </li>
            <li>📞 <b>Phone</b>:<a href="tel:+07041720309"> (+234) 704-1720-309</a></li>
            <li>📞 <b>Phone</b>:<a href="tel:+09122822074"> (+234) 912-2822-074</a></li>
            <li>📧 <b>Email</b>:<a href="mailto:inquiry@vitabanagro.com">inquiry@vitabanagro.com</a> </li>
          </ul>
        </div>


        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/YpBDZrnhZLz7MFRC/"
              className="p-3 rounded-full bg-[#4caf50] text-green-900 hover:bg-green-500 hover:text-white "
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-[#4caf50] text-green-900 hover:bg-green-500 hover:text-white "
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/vitabanagro/profilecard/?igsh=dHg3em42anZhdHp2"
              className="p-3 rounded-full bg-[#4caf50] text-green-900 hover:bg-green-500 hover:text-white "
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-[#4caf50] text-green-900 hover:bg-green-500 hover:text-white "
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; 2024 Vitaban Agro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Foot;