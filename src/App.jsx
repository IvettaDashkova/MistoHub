import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CoFounders = lazy(() => import('./components/CoFounders/CoFounders'));

function App() {
  return (
    <Routes>
      <Route path="/branch" element={<CoFounders />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
export default App;
