import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
          <Footer />  {/* <-- Add footer here */}
    </>
  );
}

export default App;
