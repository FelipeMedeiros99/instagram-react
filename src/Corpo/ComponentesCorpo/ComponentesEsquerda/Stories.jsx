import Icones from "../Icones"

function Story(props){
    return(
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
    return (
        <div class="stories">
            <Story nome='9gag' />
            <Story nome='meowed' />
            <Story nome='barked' />
            <Story nome='nathanwpylestrangeplanet' />
            <Story nome='wawawicomics' />
            <Story nome="respondeai" />
            <Story nome="filomoderna" />
            <Story nome="memeriagourmet" />
            <Icones classe='setinha' nome='chevron-forward-circle' />
        </div>
    )
}

