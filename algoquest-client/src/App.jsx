import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GamePage from "./pages/Gamepage";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Routes>
      <Navbar />
      {/* <Route path="/" element={<Login />} />
      <Route path="/game" element={<GamePage />} /> */}
      <Footer/>
    </Routes>
  );
}

export default App;