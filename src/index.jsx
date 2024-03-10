import ReactDOM  from "react-dom";
import NavBar from "./NavBar/NavBar";
import Corpo from "./Corpo/Corpo";
import FundoMobile from "./FundoMobile";


function App(){
  return(
    <div>
      <NavBar />
      <Corpo />
      <FundoMobile />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'))