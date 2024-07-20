import NavMobile from "./NavMobile";

import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      
      <Nav/>
      {/* <NavMobile /> */}
      
      <div id="home" style={style}>
        <Home/>
      </div>

      <div id="about" style={style}>
        ABOUT
      </div>

      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}

export default App;


const style = {
  height: "100vh"
}