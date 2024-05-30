import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ModalProvider } from '/src/contexts/ModalContext';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TestPage = lazy(() => import('./pages/TestPage/TestPage'));

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </ModalProvider>
  );
}
export default App;
