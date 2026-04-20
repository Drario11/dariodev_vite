function Recipe({ drinkes }) {
    return (
        <ol >
            <li>Ferva {drinkes} xícaras de água</li>
            <li>Adicione {drinkes} colheres de chá de folhas de chá {0.5 * drinkes}</li>
            <li>Adicione {0.5 * drinkes} Xícara de leite para fever a gosto</li>
            <li>Adoce a gosto</li>
            <li>Sirva</li>
        </ol>
    )
}

export default function App() {
    return (
        <section>
            <h2> Receita de chai com Especiarias</h2>
            <h3>Para duas xícaras</h3>
            <Recipe drinkes={2} />
            <h3>Para quatro xícaras</h3>
            <Recipe drinkes={4} />
        </section>
    );
}
