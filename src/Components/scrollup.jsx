function ScrollUp() {
    window.addEventListener('scroll', () => {
        const scrollBtn = document.querySelector(".scroll");
        if (window.scrollY > 100) {
            document.querySelector('.scrollup').classList.add('visible');
        } else {
            document.querySelector('.scrollup').classList.remove('visible');
        }
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
    });
    return (
        <section className="scrollup">
            <a href="#" aria-label="scroll to top" className="scroll">
                <i className="fas fa-hand-point-up"></i>
            </a>
        </section>
    );
}

export default ScrollUp;