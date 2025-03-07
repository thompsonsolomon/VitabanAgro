import React from 'react'
// import Breadcrum from '../../Constants/Bread/Breadcrum'
import "./Contact.css"
import ContactForm from './ContactForm'
// import img from "../../Asset/bg-img/1.jpg"


function Contact() {
    return (
        <div className='bg-white'>
            {/* <Breadcrum tag1="Contact" tag="" /> */}

            {/* <!-- ##### Google Maps Start ##### --> */}
            <div className="map-area mt-[100px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.8171077549521!2d3.2920575433241246!3d6.601426505843048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b904e356329d3%3A0x3738afbe4a337abc!2sPrimal%20Tek%20Plaza!5e1!3m2!1sen!2sng!4v1731967766457!5m2!1sen!2sng"                    // src={img}
                    title="Location"
                    className='Location'
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ width: "100%", height: "50vh", }}
                />
            </div>
            {/* <!-- ##### Google Maps End ##### --> */}


            {/* <!-- ##### Contact Area Start ##### --> */}
            <section className="contact-area">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-content-area">
                                <div className="flex justify-center items-center  flex-wrap gap-[40px]">
                                    <div className="col-12 col-md-4">
                                        <div className="contact-content contact-information">
                                            <h4>Contact</h4>
                                            <p> <a href="mailto:inquiry@vitabanagro.com">Mail to:inquiry@vitabanagro.com</a> </p>
                                            <p><a href="tel:+08035374830"> (+234) 704-1720-309</a> </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="contact-content contact-information">
                                            <h4>Address</h4>
                                            <p>Suite 55, Block A, Primal Tek Plaza, 63/65 Egbeda-Idimu Road,
                                                by Mokola Bus Stop,</p>
                                            <p> Egbeda, Lagos State, Nigeria </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="contact-content contact-information">
                                            <h4>Opening Hours</h4>
                                            <p> Mon - fry: 06.00am - 05.00pm</p>
                                            <p>Saturday:10.00am - 05.00pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ##### Contact Area End ##### --> */}
            <ContactForm />

        </div>

    )
}

export default Contact 