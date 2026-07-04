import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MotionBackground from "./components/MotionBackground";
import Hero from "./components/Hero";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <MotionBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;