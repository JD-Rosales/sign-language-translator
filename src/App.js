import './App.css';
import Sidebar from './components/Sidebar'
import { Routes, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from './pages/Home'
import Play from './pages/Play'
import Practice from './pages/Practice';


function App() {

  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
    </div>
  );
}

export default App;
