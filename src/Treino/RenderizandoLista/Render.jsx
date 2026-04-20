import { people } from "./data.jsx";
import { getImageUrl } from "./utils.jsx";
import './styler.css'

export default function Render() {
    const chemist = people.filter(person => person.profession === 'chemist'
    );
    const listItens = chemist.map(person =>
        <li>
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
        <ul>
            {listItens}
        </ul>
    )
}