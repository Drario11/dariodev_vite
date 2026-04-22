import FancyText from "./FancyText"
import InspirationGenerator from "./InspirationGenerator"
import Copyright from "./Copyright"


function AppH() {
    return (
        <section>
            <FancyText title={true} text="Bem vindo" />
            <InspirationGenerator>
                <Copyright year={new Date().getFullYear()} />
            </InspirationGenerator>
        </section>
    )
}

export default AppH