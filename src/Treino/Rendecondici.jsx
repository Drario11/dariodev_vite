function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✅</li>
    }
    return <li className="item">{name} ❌</li>
}
/*
    return (
        <li className="item">
            {name} {isPacked ? '✅' : '❌'}
        </li>
    );

    Essa expressão é chamada de operador ternário. É uma forma curta de escrever uma expressão condicional.
    Sintaxe: condicao ? valor_se_verdadeiro : valor_se_falso
    
*/

export default function PackingList() {
    return (
        <section>
            <ul>
                <Item
                    name="Traja Espacial"
                    isPacked={true}
                />
                <Item
                    name="Capacete com folha dourada"
                    isPacked={false}
                />
                <Item
                    name="Foto de tamanho passaporte"
                    isPacked={true}
                />
                <Item
                    name="Mapa do sistema solar"
                    isPacked={true}
                />
            </ul>
        </section>
    );
}
