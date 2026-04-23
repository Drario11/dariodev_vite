import * as React from "react";
import quotes from "./quotes";
import FancyText from "./FancyText";
import inspirations from "./inspirations";
import Color from "./Color";

export default function InspirationGenerator({ children }) {
    // 1. ESTADO INDEPENDENTE PARA AS CITAÇÕES (QUOTES)
    // Criamos uma "memória" (useState) apenas para controlar o botão de cima.
    const [quoteIndex, setQuoteIndex] = React.useState(0);
    const quote = quotes[quoteIndex]; // Lemos a frase usando o número guardado acima.
    // A função 'next' altera APENAS o 'quoteIndex' (Não mexe no botão de baixo).
    const next = () => setQuoteIndex((quoteIndex + 1) % quotes.length);
    
    // 2. ESTADO INDEPENDENTE PARA AS CORES (INSPIRATIONS)
    // Criamos uma SEGUNDA "memória" (useState) separada para controlar o botão de baixo.
    const [inspirationIndex, setInspirationIndex] = React.useState(0);
    const inspiration = inspirations[inspirationIndex]; // Lemos a cor usando o novo número.
    // A função 'nextt' altera APENAS o 'inspirationIndex' (Não mexe no botão de cima).
    const nextt = () => setInspirationIndex((inspirationIndex + 1) % inspirations.length);


    return (
        // Abaixo seria dois botãos com mesma funcionalidade de chamar um quote ou uma cor
        // ou um quote OU uma cor, mas com estilos diferentes cada um.
        <>
            <p> You inspiration quote is:</p>
            <FancyText text={quote} />
            <button onClick={next}>Nova inspiração</button>
            {children}

            <p>tour inspirational {inspiration.type} is:</p>
            {inspiration.type === 'quote'
                ? <FancyText text={inspiration.value} />
                : <Color value={inspiration.value} />}
            <button onClick={nextt}>Nova inspiração</button>
            {children}


        </>

    );
}