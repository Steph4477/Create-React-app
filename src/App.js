import { Routes, Route } from "react-router-dom";
import './styles/App.scss';
import Header from './components/Header'
import About from './pages/About'
import Accueil from "./pages/Accueil"
import Error from "./pages/Error";
import Logement from "./pages/LogementCart";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
					  <Route path="/" element={<Accueil />} />
					  <Route path="/about" element={<><Header/><About /></>} />
            <Route path="/error" element={<><Header /><Error /></>} />
            <Route path="/logement" element={<><Header /><Logement /></>} />

        </Routes>
      </main>
    </div> 
  )
}

export default App;
