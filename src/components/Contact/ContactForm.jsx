import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../assets/data/firebase";
import { toast } from "react-toastify";
// import CustomAlert from "../../Helpers/Alert";

function ContactForm() {
  const [Fullname, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  const SendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const current = new Date();
      // By default US English uses 12hr time with AM/PM
      const time = current.toLocaleTimeString("en-US");
      if (Fullname && Message !== "") {
        await addDoc(collection(db, "Contact"), {
          Fullname,
          Email,
          Phone,
          Message,
          time,
        });
        toast.success("Message Sent ")
        // CustomAlert("success", "Message Sent Thank You");
        setEmail("");
        setFullName("");
        setMessage("");
        setPhone("");
      } else {
        toast("Pls Write A Message")
        // CustomAlert("error", "Pls Write a message  ");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error occured pls login to chat admin")
      // CustomAlert("error", "Error Occured");
      // setError("error Occured")
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="contact-form section-padding-0-100" id="donate">
        <div className="max-w-7xl mx-auto px-4">
          <div className="row">
            {/* <!-- Section Heading --> */}
            <div className="col-12">
              <div className="w-full bg-red flex justify-center items-center flex-col mb-5">
                <h2 className="  text-gray-900 text-[30px]">Leave A Message</h2>
                <p className=" text-gray-900">
                  Your email address will not be published. Required fields are
                  marked.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Contact Form Area --> */}
          <div className="flex justify-center mb-6 w-full">
            <form onSubmit={SendMessage} className="w-full">
              <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 ">
                <div className="col-12 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name*:</label>
                    <input
                      type="text"
                      required
                      className="
                      w-full 
                      px-5 bg-white py-4 
                      my-5 text-gray-900
                      border border-gray-300
                      rounded-md shadow-sm 
                      focus:ring-2 focus:ring-green-500
                    focus:border-green-500 sm:text-sm"                          
                      id="contact-name"
                      placeholder="Full Name"
                      name="name"
                      value={Fullname}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="contact-email">Email*:</label>
                    <input
                      type="email"
                      required
                      className="w-full
           px-5 bg-white py-4 
           my-5 text-gray-900
          border border-gray-300
           rounded-md shadow-sm 
          focus:ring-2 focus:ring-green-500
          focus:border-green-500 sm:text-sm"                          id="contact-email"
                      placeholder="info@dcg.org"
                      value={Email}
                      name="emai"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="form-group">
                    <label htmlFor="contact-number">Phone*:</label>
                    <input
                      type="number"
                      required
                      className="w-full
           px-5 bg-white py-4 
           my-5 text-gray-900
          border border-gray-300
           rounded-md shadow-sm 
          focus:ring-2 focus:ring-green-500
          focus:border-green-500 sm:text-sm"                          id="contact-number"
                      placeholder="(+12) 123 456 7910"
                      value={Phone}
                      name="number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

              </div>

              <div className="w-[100%]">
                <div className="form-group w-full">
                  <label htmlFor="message">Message*:</label>
                  <textarea
                    className="w-full h-[150px]
           px-3 bg-white py-2 
           my-5 text-gray-900
          border border-gray-300
           rounded-md shadow-sm 
          focus:ring-2 focus:ring-green-500
          focus:border-green-500 sm:text-sm"                          name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    value={Message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 width-full flex justify-center text-white text-center">
                <button className="bg-[#4caf50] py-2 px-4 rounded-full flex items-center" type="submit">
                  {Loading ? "Loading" : "Submit Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
