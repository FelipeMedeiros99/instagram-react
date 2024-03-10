import Sugestao from "./ComponentesSugestoes/Sugestao"
import Titulo from "./ComponentesSugestoes/Titulo"

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <Titulo />
            <Sugestao nome="bad.vibes.memes" razao='Segue você' />
            <Sugestao nome="chibirdart" razao='Segue você' />
            <Sugestao nome="razoesparaacreditar" razao='Novo no Instagram' />
            <Sugestao nome="adorable_animals" razao='Segue você' />
            <Sugestao nome="smallcutecats" razao='Segue você' />
        </div>
    )
}