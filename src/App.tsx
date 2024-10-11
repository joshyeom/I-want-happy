import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/reset.css'
import IWantHappy from './pages/IWantHappy';
import WithLove from './pages/WithLove';
import All from './pages/All';
import Post from './pages/Post';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="i-want-happy" element={<IWantHappy/>} />
          <Route path="work" element={<WithLove/>} />
          <Route path="all" element={<All/>} />
          <Route path="/post/:url" element={<Post />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
