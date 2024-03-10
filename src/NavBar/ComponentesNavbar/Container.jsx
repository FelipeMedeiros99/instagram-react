import Logo from "./ComponentesContainer/Logo"
import LogoMobile from "./ComponentesContainer/LogoMobile"
import InstagramMobile from "./ComponentesContainer/InstagramMobile"
import Pesquisa from "./ComponentesContainer/Pesquisa"
import Icones from "./ComponentesContainer/Icones"
import IconesMobile from "./ComponentesContainer/IconesMobile"


export default function Container(){
    return(
        <div class="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    )
}

