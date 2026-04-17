import img from "../assets/perfil.png"


const person = {
    name: 'Dario junior Nascimento da Silva',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TooList() {
    return (
        <div style={person.theme}>
            <h2 style={{ color: person.theme.color }}>
                Todos os santos do céu
            </h2>

            <img className="img"
                src={img}
                alt="Perfil"
            />
            <ul>
                <li>javaScript entre chaves no</li>
                <li>Idade: 44 anos</li>
                <li>Profissão: Desenvolvedor Web</li>
            </ul>
        </div>
    )
}