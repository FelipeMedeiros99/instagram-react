import Sugestao from "./ComponentesSugestoes/Sugestao"
import Titulo from "./ComponentesSugestoes/Titulo"

export default function Sugestoes() {
    let sugestoes = [{ nome: "bad.vibes.memes", razao: 'Segue você' },
                    { nome: "chibirdart", razao: 'Segue você' },
                    { nome: "razoesparaacreditar", razao: 'Novo no Instagram' },
                    { nome: "adorable_animals", razao: 'Segue você' },
                    { nome: "smallcutecats", razao: 'Segue você' }]

    return (
        <div class="sugestoes">
            <Titulo />
            {sugestoes.map(sugestao=>(<Sugestao nome={sugestao.nome} razao={sugestao.razao}/>))}
        </div>
    )
}