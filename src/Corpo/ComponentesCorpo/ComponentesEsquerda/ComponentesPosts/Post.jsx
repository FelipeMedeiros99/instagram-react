import Topo from './ComponentesPost/Topo'
import Conteudo from './ComponentesPost/Conteudo';
import Fundo from './ComponentesPost/Fundo';
// parametros necessarios: nome_imagem; 
const Post = (props) => {
    return (
        <div class="post">
            <Topo nome_imagem={props.nome_imagem}/>
            <Conteudo nome_imagem_principal={props.nome_imagem_principal} />
            <Fundo 
                curtida_principal={props.curtida_principal}
                quantidade_de_curtidas={props.quantidade_de_curtidas} />
        </div>
    );
}

export default Post