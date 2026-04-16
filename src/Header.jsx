import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={{ background: '#cd5757', padding: '20px', color: 'white' }}>
            <h2>Bem-vindo ao Meu sistema</h2>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
                    <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
                    <li><Link to="/sobre" style={{ color: 'white' }}>Sobre</Link></li>
                    <li><Link to="/contato" style={{ color: 'white' }}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header