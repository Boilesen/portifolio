import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "./Components/Hero";
import "./Img/Ambiente.jpg";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar className="d-inline p-2 bg-primary text-red" />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default App;
