import { Routes, Route } from 'react-router-dom';
import Basic from './pages/Basic';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import Async from './pages/Async';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/basic">Basic</MainNavItem>
        <MainNavItem to="/async">Async</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/async" element={<Async />} />
        <Route path="*" element={<Basic />} />
      </Routes>
    </div>
  );
}

export default App;
