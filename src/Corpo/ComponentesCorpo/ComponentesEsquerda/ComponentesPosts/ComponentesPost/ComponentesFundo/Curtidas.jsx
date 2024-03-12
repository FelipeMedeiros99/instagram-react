const Curtidas = (props) => {
    return (
        <div class="curtidas">
            <img src={`assets/img/${props.curtida_principal}.svg`} />
            <div class="texto">
                Curtido por <strong>{props.curtida_principal}</strong> e <strong>outras {props.quantidade_de_curtidas} pessoas</strong>
            </div>
        </div>
    )
}

export default Curtidas