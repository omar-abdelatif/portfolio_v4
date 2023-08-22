import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            document.querySelector('.navbar').classList.add('fixed');
        } else {
            document.querySelector('.navbar').classList.remove('fixed');
        }
    })
    const pages = [
        { "name": 'Home', "url": '/', 'icon': 'fa-solid fa-house me-2', "class": "nav-link" },
        { "name": "Services", "url": "/services", 'icon': 'fa-solid fa-gear me-2', "class": "nav-link" },
        { "name": 'Works', "url": '/works', 'icon': 'fa-solid fa-list-ul me-2', "class": "nav-link" },
        { "name": 'Blog', "url": '/blog', 'icon': 'fa-brands fa-blogger me-2', "class": "nav-link" },
        { "name": "About", "url": "/about", 'icon': 'fa-solid fa-address-book me-2', "class": "nav-link" },
        { "name": 'Contact', "url": '/contact', 'icon': 'fa-solid fa-phone me-2', "class": "nav-link" },
    ]
    return (
        <nav className="navbar navbar-expand-lg p-3">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">
                    <span>
                        Omar
                    </span>
                    <span className="ms-2">
                        Abdelatif
                    </span>
                </Link>
                <button className="btn btn-primary menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Menu</h5>
                        <button type="button" className="fa-solid fa-xmark btn text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto">
                            {pages.map((page,index) => (
                                <li key={index} className="nav-item me-xl-3 me-md-0">
                                    <NavLink className="nav-link px-sm-4" to={page.url}>
                                        <i className={page.icon}></i>
                                        {page.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}