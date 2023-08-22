import Footer from './../Components/footer';
export default function Services() {
    const services = [
        {
            "img": "https://placehold.co/400",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sapiente iusto adipisci, error ea eius nam blanditiis. Numquam ducimus culpa pariatur porro minus aut cumque id odio, tempora labore quis!",
        },
        {
            "img": "https://placehold.co/400",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sapiente iusto adipisci, error ea eius nam blanditiis. Numquam ducimus culpa pariatur porro minus aut cumque id odio, tempora labore quis!",
        },
        {
            "img": "https://placehold.co/400",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sapiente iusto adipisci, error ea eius nam blanditiis. Numquam ducimus culpa pariatur porro minus aut cumque id odio, tempora labore quis!",
        },
        {
            "img": "https://placehold.co/400",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sapiente iusto adipisci, error ea eius nam blanditiis. Numquam ducimus culpa pariatur porro minus aut cumque id odio, tempora labore quis!",
        },
    ]
    return (
        <div className="wrapper bg-primary rounded w-90 mx-auto m-5">
            <section className="services p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="services-title mb-lg-5 mb-md-4 mb-sm-3 mb-xs-4">
                                <h1 className="text-left ps-lg-5 text-lg-5 text-md-4 text-sm-3 text-white text-decoration-underline">- Services That I Provide -</h1>
                            </div>
                            <div className="services-content">
                                <div className="row">
                                    {services.map((service, index) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                            <div className="service-item mb-md-3 mb-sm-4 mb-xs-3">
                                                <div className="service-img">
                                                    <img src={service.img} alt="test-img" className="img-fluid" />
                                                </div>
                                                <div className="service-content">
                                                    <p className="p-3 text-white mb-0">{service.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}