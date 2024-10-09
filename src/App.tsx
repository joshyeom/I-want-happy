import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/reset.css'
import IWantHappy from './pages/IWantHappy';
import WithLove from './pages/WithLove';
import All from './pages/All';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="i-want-happy" element={<IWantHappy/>} />
        <Route path="work" element={<WithLove/>} />
        <Route path="all" element={<All/>} />
      </Routes>
    </Router>
  );
};

export default App;
