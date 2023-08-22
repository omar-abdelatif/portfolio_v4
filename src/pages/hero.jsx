export default function Hero() {
    const socials = [
        { "name": 'Facebook', "href": '#', "class": 'btn btn-primary', "icon": 'fa-brands fa-facebook' },
        { "name": 'Whatsapp', "href": '#', "class": 'btn btn-success ms-3', "icon": 'fa-brands fa-whatsapp' },
        { "name": 'Linkedin', "href": '#', "class": 'btn btn-dark ms-3', "icon": 'fa-brands fa-linkedin' },
        { "name": 'Github', "href": '#', "class": 'btn btn-secondary ms-3', "icon": 'fa-brands fa-github' },
        { "name": 'Telegram', "href": '#', "class": 'btn btn-info ms-3', "icon": 'fa-brands fa-telegram' },
    ]
    return (
        <section className="hero-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-img mt-5 text-center">
                            <img src="https://placehold.co/400" className="rounded-circle" alt="hero-img" />
                        </div>
                        <div className="hero-info text-center mt-5">
                            <div className="hero-title text-white mt-4 mb-4">
                                <h4 className="mb-0">
                                    <b> &#10100; &#34; {"FullStack Devloper"}  &#34; &#10101; </b>
                                </h4>
                            </div>
                            <div className="social">
                                {socials.map(links => (
                                    <a href={links.href} key={links.name} aria-label="social link" className={links.class}>
                                        <i className={links.icon}></i>
                                    </a>
                                ))}
                            </div>
                            <div className="cv mt-4 mb-2">
                                <a href="/" className="btn btn-primary">Download Cv</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}