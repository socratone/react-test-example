import { Routes, Route } from 'react-router-dom';
import Basic from './pages/Basic';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/basic">Basic</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/" element={<Basic />} />
      </Routes>
    </div>
  );
}

export default App;
