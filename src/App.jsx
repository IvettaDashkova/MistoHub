import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import { ModalProvider } from '/src/contexts/ModalContext';
import isPropValid from '@emotion/is-prop-valid';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TestPage = lazy(() => import('./pages/TestPage/TestPage'));

function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </ModalProvider>
    </StyleSheetManager>
  );
}
export default App;
