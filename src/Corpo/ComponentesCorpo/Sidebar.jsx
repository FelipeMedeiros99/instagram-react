import Usuario from "./ComponentesSidebar/Usuario"
import Sugestoes from "./ComponentesSidebar/Sugestoes"
import Links from "./ComponentesSidebar/Links"
import Copyright from "./ComponentesSidebar/Copyright"

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario classe='usuario' nome='catanacomics' /> 
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    )
}