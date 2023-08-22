function getCurrentYear() {
    const today = new Date();
    return today.getFullYear();
}
export default function Footer() {
    const currentYear = getCurrentYear();
    return (
        <footer className="text-center p-4">
            <p className="mb-0">
                © {currentYear} All Rights Reserved by
                <a href="https://www.facebook.com/omar.elmalek.5" className="text-decoration-none ms-2 bold" target="blank">Omar Abdelatif</a>
            </p>
        </footer>
    )
}