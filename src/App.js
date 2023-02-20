import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import HomeScreen from './components/HomeScreen';
import Navbar from './components/Navbar.js';

function App() {
return (
<>
<Router>
<Navbar />
<Routes>
<Route path="/" element={<HomeScreen />} exact />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Router>
</>
);
}

export default App;
