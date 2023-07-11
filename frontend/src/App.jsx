/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tarifs from "./pages/Tarifs";
import Horaire from "./pages/Horaire";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/horaire" element={<Horaire />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
