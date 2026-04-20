import { Link } from 'react-router-dom'

export default function MenuTreino() {
    return (
        <header style={{ background: '#855454ff', padding: '20px', color: 'white' }}>
            <h2>Menu de Treinos</h2>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
                    <li><Link to="/treino" style={{ color: 'white' }}>Redicionamento condicional</Link></li>
                    <li><Link to="/treino/Render" style={{ color: 'white' }}>Renderizando Lista</Link></li>
                    <li><Link to="/treino/Mostar" style={{ color: 'white' }}>Componentes Puros</Link></li>

                </ul>
            </nav>
        </header>
    )
}