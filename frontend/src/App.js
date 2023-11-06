import Home from "./Components/Home";
import Report from "./Components/Report";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
