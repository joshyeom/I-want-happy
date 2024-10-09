import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/reset.css'
import IWantHappy from './pages/IWantHappy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="i-want-happy" element={<IWantHappy/>} />
      </Routes>
    </Router>
  );
};

export default App;
