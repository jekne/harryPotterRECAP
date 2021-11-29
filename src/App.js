import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Characters from "./Pages/Characters";
import DetailsCharacters from "./Pages/DetailsCharacters";
import Houses from "./Pages/Houses";
import DetailHouses from "./Pages/DetailHouses";
import { NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageWithSelector from "./Pages/PageWithSelector";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route path="/character/:id" element={<DetailsCharacters />} />
        <Route exact path="/houses" element={<Houses />} />
        <Route exact path="/houses/:id" element={<DetailHouses />} />
        <Route exact path="/selector" element={<PageWithSelector />} />
      </Routes>
    </div>
  );
}

export default App;
