export default function Usuario(props) {
    return (
        <div class={props.classe}>
            <img src={`assets/img/${props.nome}.svg`} />
            <div class="texto">
                <strong>props.nome</strong>
                Catana
            </div>
        </div>
    )
}