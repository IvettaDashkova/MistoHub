import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
import { ModalProvider } from '/src/contexts/ModalContext';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </ModalProvider>
  );
}
export default App;
