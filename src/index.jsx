import ReactDOM  from "react-dom";
import NavBar from "./NavBar";

function App(){
  return(
    <div>
      <NavBar />
      <Corpo />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'))