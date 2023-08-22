import { useState } from "react";
import Footer from './../Components/footer';

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const data = [
            `Name:${name}`,
            `E-mail Address:${email}`,
            `Phone Number: ${phone}`,
            `Subject: ${subject}`,
            "",
            `body: ${message}`,
        ]
        console.log(data)
    }
    const infos = [
        {
            'class': 'location',
            'icon': 'fa fa-map-marker',
            'data': '6th October City'
        },
        {
            'class': 'phone',
            'icon': 'fas fa-mobile-alt ',
            'data': '+201062760141'
        },
        {
            'class': 'email',
            'icon': 'far fa-envelope',
            'data': 'omar.abdelatiif@gmail.com'
        }
    ]
    return (
        <div className="wrapper bg-primary rounded w-90 mx-auto m-5">
            <section className="contact p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-title">
                                <h1 className="text-center text-white text-decoration-underline text-lg-5 text-md-4 text-sm-3">I Want to Hear from You</h1>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="address-info mt-lg-5 mt-md-4 mt-sm-3">
                                <div className="address-title">
                                    <h2 className="text-white text-decoration-underline text-lg-4 text-md-3 text-sm-2">Contact Us</h2>
                                </div>
                                <div className="address-content text-left text-white mt-lg-5 mt-md-4 mt-sm-3">
                                    {infos.map((info, index) => (
                                        <p className={`${info.class} mb-3 d-flex align-items-center`} key={index}>
                                            <div className="icon p-3 me-3 rounded bg-info text-center">
                                                <i className={`${info.icon}`} aria-hidden="true"></i>
                                            </div>
                                            {info.data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form mt-3">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" className="form-control mb-3" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                                    <input type="email" className="form-control mb-3" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                    <input type="text" className="form-control mb-3" onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
                                    <input type="tel" className="form-control mb-3" onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
                                    <textarea className="form-control mb-3" onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows={4} required ></textarea>
                                    <button type="submit" className="btn btn-success w-100">
                                        <b>Send Email</b>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}