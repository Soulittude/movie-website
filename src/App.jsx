import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const movieNumber = 1;
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
