const Topo = (props) => {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${props.nome_imagem}.svg`} />
                {props.nome_imagem}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

export default Topo