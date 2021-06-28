
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStorage } from './GlobalContext';

import { FormPage } from './pages/FormPage'

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<FormPage />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
