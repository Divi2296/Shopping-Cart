import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavScrollExample from "./components/Navbar";
import Productdetails from "./components/Productdetails";
import { clothes,electronics } from "./data/data";

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:category/:id" element={<Productdetails />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
