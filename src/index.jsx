import ReactDOM  from "react-dom";
import NavBar from "./NavBar/NavBar";
import Corpo from "./Corpo/Corpo";
function App(){
  return(
    <div>
      <NavBar />
      <Corpo />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'))