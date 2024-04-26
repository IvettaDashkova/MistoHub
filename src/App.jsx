import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
export default App;
