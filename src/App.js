import "./App.css";
import Home from "./components/Home";
import Locations from "./components/Locations";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/locations" Component={Locations} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
