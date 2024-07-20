import NavMobile from "./NavMobile";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <NavMobile />
      
      <div id="home" style={style}>
        HOME PAGE
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