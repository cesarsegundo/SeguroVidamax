export default function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">Seguros Azteca</div>
            <div className="menu">
                <a href="#">Inicio</a>
                <a className="navbar-active" href="#">Nuestros seguros</a>
                <a href="#">Centro de ayuda</a>
                <a href="#">Pólizas</a>
            </div>
        </div>
    )
}