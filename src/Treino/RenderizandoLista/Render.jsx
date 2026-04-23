import { people } from "./data";
import { getImageUrl } from "./utils";
import estilos from './styler.module.css'

export default function Render() {
    const chemist = people.filter(person => person.profession === 'chemist'
    );
    const listItens = chemist.map(person =>
        // CORREÇÃO (Aviso do Console): O React exige que cada item gerado dentro de um .map() tenha uma propriedade "key" única.
        // Sem isso, aquele aviso vermelho "Each child in a list should have a unique 'key' prop" aparece no console.
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {' ' + person.accomplishment}
            </p>
        </li>
    )
    return (
        <ul className={estilos.listaCientistas}>
            {listItens}
        </ul>
    )
}