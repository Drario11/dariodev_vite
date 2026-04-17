import img from "../assets/perfil.png"
import "./sobre.css"

export default function Perfil() {
    return (
        <>
            <img
                src={img}
                alt="Perfil"
                className="img"
            />
            <div className="info">
                <ul>
                    <li>Darío</li>
                    <li>44 anos</li>
                    <li>Desenvolvedor Web</li>
                </ul>
            </div>
        </>
    )
}

