import { Routes, Route } from 'react-router-dom';
import Basic from './pages/Basic';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import Async from './pages/Async';
import Event from './pages/Event';
import BlurEvent from './pages/BlurEvent';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/basic">Basic</MainNavItem>
        <MainNavItem to="/async">Async</MainNavItem>
        <MainNavItem to="/event">Event</MainNavItem>
        <MainNavItem to="/blur_event">BlurEvent</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/async" element={<Async />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blur_event" element={<BlurEvent />} />
        <Route path="*" element={<Basic />} />
      </Routes>
    </div>
  );
}

export default App;
