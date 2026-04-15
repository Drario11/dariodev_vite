import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={{ backgroundColor: "#cd5757ff", padding: "20px", borderBottom: "1px solid #ccc" }}>
            <h2>Bem-vindo ao Meu sistema</h2>
            <nav>
                <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header