import Acoes from "./ComponentesFundo/Acoes"
import Curtidas from "./ComponentesFundo/Curtidas"
const Fundo = (props) => {
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas curtida_principal={props.curtida_principal} quantidade_de_curtidas={props.quantidade_de_curtidas}/>
        </div>
    )
}


export default Fundo