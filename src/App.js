import './styles/Index.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './pages/About';
import Accueil from "./pages/Accueil";
import Error from "./pages/Error";
import LogementCart from "./pages/LogementCart";

export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<><Header/><About /></>} />
          <Route path="/logement/:id" element={<><Header /><LogementCart /></>} />
          <Route path="/error" element={<><Header /><Error /></>} />
        </Routes>
    </div> 
  )
}



