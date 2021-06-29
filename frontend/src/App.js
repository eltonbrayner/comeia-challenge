import { BrowserRouter } from 'react-router-dom';
import { GlobalStorage } from './GlobalContext';

import { MainContent } from './pages';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <MainContent />
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
