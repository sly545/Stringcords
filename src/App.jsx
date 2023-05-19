import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/routes';
import Hearder from './components/Header/Header';

function App() {
  return (
    <Router>
      <Hearder />
      <RoutesConfig />
    </Router>
  );
}

export default App;
