import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/routes';
import Hearder from './components/Header/Header';
import Styles from './App.module.css';


function App() {
  return (
    <div className={Styles.app}>
    <Router>
      <Hearder />
      <RoutesConfig />
    </Router>
    </div>
  );
}

export default App;
