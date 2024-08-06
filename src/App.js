import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      
      <Nav/>
      
      <div id="home">
        <Home/>
      </div>

      <div id="about" style={{ height: "100vh"}}>
        ABOUT
      </div>

      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}

export default App;

