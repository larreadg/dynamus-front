import { Routes, Route } from 'react-router-dom'
import Main from '../components/main/Main';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Main/>} />
    </Routes>
  );
}

export default AppRoutes
