import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from './components/Footer';
import Project from "./pages/Project";



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/KalaiPortfolio/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
