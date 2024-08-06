import { useMediaQuery } from "react-responsive";

import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";

function App() {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="App">
      
      
      <div id="HOME">
        {!isMobile && <Nav/>}
        <Home/>
      </div>

      <div id="ABOUT" style={{ height: "100vh"}}>
        {isMobile && <Nav/>}
        ABOUT
      </div>

      <div id="CONTACT">
        <Contact />
      </div>

    </div>
  );
}

export default App;

