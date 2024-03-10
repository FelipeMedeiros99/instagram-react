import Esquerda from "./ComponentesCorpo/Esquerda"
import Sidebar from "./ComponentesCorpo/Sidebar"

export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    )
}