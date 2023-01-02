import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faCode);

function App() {
  return (
    <Routes>
      <Route index element={ <Main /> } />
    </Routes>

  );
}

export default App;
