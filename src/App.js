import './App.css';
import Sidebar from './components/Sidebar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Play from './pages/Play'
import Practice from './pages/Practice';
import FingerSpell from './pages/FingerSpell';
import GuessHandSign from './pages/GuessHandSign';
import SpellHandSign from './pages/SpellHandSign';
import FourPicOneWord from './pages/FourPicOneWord'
import Page404 from './pages/Page404';


function App() {

  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/guess-hand-sign" element={<GuessHandSign />} />
          <Route path="/finger-spell" element={<FingerSpell />} />
          <Route path="/spell-hand-sign" element={<SpellHandSign />} />
          <Route path="/4-pic-1-word" element={<FourPicOneWord />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
    </div>
  );
}

export default App;
