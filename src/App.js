import { Routes, Route } from "react-router-dom";

import { NavBar } from "./Layout/NavBar/NavBar";
import { Favourites } from "./Pages/Favourites/Favourites";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
