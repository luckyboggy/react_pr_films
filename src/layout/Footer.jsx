function Footer() {

    let year = new Date().getFullYear();

    return (
        <footer className="page-footer indigo darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {year} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }