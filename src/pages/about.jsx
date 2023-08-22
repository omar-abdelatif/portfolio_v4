import Footer from './../Components/footer';
import Testmonials from './../Components/testmonials';
export default function About() {
    const personalInfo = [
        { "icon": "fa-solid fa-mobile-screen text-white p-3" , "type": "phone", "info": "+201062760141" },
        { "icon": "fa-solid fa-envelope text-white p-3" , "type": "email", "info": "omar.abdelatiif@gmail.ocm" },
        { "icon": "fa-solid fa-location-dot text-white p-3" , "type": "location", "info": "6th October City" },
    ]
    return (
        <div className="wrapper bg-primary rounded w-90 mx-auto m-5">
            <section className="about p-lg-5 p-md-4 p-sm-3">
                <div className="about-title">
                    <h1 className="text-left mt-0 ps-5 mb-0 text-white text-decoration-underline">- About Me -</h1>
                </div>
                <div className="about-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-8">
                                <div className="about-img rounded overflow-hidden mt-lg-5 mt-md-4 mt-sm-3">
                                    <img src="https://placehold.co/150x150" alt="profile" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="about-content mt-lg-5 mt-md-4 mt-sm-3">
                                    <h2 className='text-left text-white text-decoration-underline mb-3'>- Who Am I -</h2>
                                    <p className="desc mb-3 text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas ea sed eos dolores, quasi tempore impedit sequi fuga, perspiciatis aliquid asperiores ipsum iure inventore delectus voluptatem aut molestias nostrum?
                                    </p>
                                    <p className="text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et, excepturi consequuntur, corrupti unde, magni sit voluptatum incidunt atque ab libero fugit labore dolores error. Doloribus ab aliquid voluptatibus labore.
                                    </p>
                                </div>
                                <div className="about-info">
                                    <h2 className='text-left text-white text-decoration-underline mb-3'>- Personal Info -</h2>
                                    <ul className="navbar-nav flex-row">
                                        {personalInfo.map((item,index) => (
                                            <li className="nav-item d-flex me-3 align-items-center me-2" key={index}>
                                                <span className="icon rounded">
                                                    <i className={item.icon}></i>
                                                </span>
                                                <div className="data ms-2">
                                                    <p className='text-white text-decoration-underline'>
                                                        <b>{item.type}</b>
                                                    </p>
                                                    <p className='text-white mb-0'>{item.info}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testmonials/>
            <Footer />
        </div>
    )
}