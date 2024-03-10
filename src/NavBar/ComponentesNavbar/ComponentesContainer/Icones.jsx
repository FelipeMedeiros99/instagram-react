export default function Icones(){
    let nomes = ["paper-plane-outline", "compass-outline", "compass-outline", "person-outline"]
    return(
        <div class="icones">    
            {nomes.map(nome =>(<ion-icon name={nome}></ion-icon>))}
        </div>
    )
}
