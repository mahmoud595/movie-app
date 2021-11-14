import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./Layout/NavBar/NavBar";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<Favourite />} /> */}
      </Routes>
    </>
  );
}

export default App;
