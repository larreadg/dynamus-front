import { Routes, Route } from 'react-router-dom'
import LandingPage from '../LandingPage'
import TrabajaConNosotros from '../TrabajaConNosotros'


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
    </Routes>
  );
}

export default MainRoutes