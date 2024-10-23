import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/reset.css'
import Posts from './pages/Posts';
import All from './pages/All';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:theme" element={<Posts/>} />
          <Route path="all/:url" element={<All/>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
