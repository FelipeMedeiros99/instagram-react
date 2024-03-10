import Icones from "../../../Ferramentas/Icones"

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${props.nome}.svg`} />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}


export default function Stories() {
    let nomes = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', "respondeai", "filomoderna", "memeriagourmet"]
    return (
        <div class="stories">
            {nomes.map(nome => (<Story nome={nome} />))}
            <Icones classe='setinha' nome='chevron-forward-circle' />
        </div>
    )
}

