import ComPuros from "./ComPuros";
import Cup from "./EfeitoSequen";

function Mostar() {
    return (
        <section>
            < ComPuros />
            <div>
                <h2>Xícaras</h2>
                <Cup />
                <Cup />
                <Cup />
            </div>
        </section>
    );
}

export default Mostar