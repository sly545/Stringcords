import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginPage/LoginPage'; // Votre propre composant LoginForm
import SignUpForm from './pages/SignupPage/SignupPage'; // Votre propre composant SignUpForm
import HomePage from './pages/Home/home';
import Styles from './App.module.css';
import Header from './components/Header/Header';
import AddStringPage from './pages/AddStringPage/AddStringPage';
import AcoustiquePage from './pages/CategoryPage/AcoustiquePage';
import ElectriquePage from './pages/CategoryPage/ElectriquePage';
import CalssiquePage from './pages/CategoryPage/ClassiquePage';
import NotFound from './pages/NotFound/NotFound';
import OneCordPage from './pages/OneCordPage/OneCordPage';

const LayoutWithBackground = ({ children }) => (
 <div className={Styles.app}>
 <Header />
 {children}
 </div>
);

LayoutWithBackground.propTypes = {
 children: PropTypes.node.isRequired,
};

const LayoutWithoutBackground = ({ children }) => (
 <div>
 <Header />
 {children}
 </div>
);

LayoutWithoutBackground.propTypes = {
 children: PropTypes.node.isRequired,
};

function App() {
 return (
 <Router>
 <Routes>
 <Route path="/" element={
 <LayoutWithBackground>
 <LoginForm />
 </LayoutWithBackground>
 } />
 <Route path="/signup" element={
 <LayoutWithBackground>
 <SignUpForm /> 
 </LayoutWithBackground>
 } />
 <Route path="/Home" element={
 <LayoutWithoutBackground>
 <HomePage />
 </LayoutWithoutBackground>
 } />
  <Route path="/Addstring" element={
 <LayoutWithoutBackground>
 <AddStringPage />
 </LayoutWithoutBackground>
 } />
   <Route path="/category/acoustique" element={
 <LayoutWithoutBackground>
 <AcoustiquePage />
 </LayoutWithoutBackground>
 } />

 <Route path="/category/electrique" element={
 <LayoutWithoutBackground>
 <ElectriquePage />
 </LayoutWithoutBackground>
 } />

  <Route path="/category/classique" element={
 <LayoutWithoutBackground>
 <CalssiquePage />
 </LayoutWithoutBackground>
 } />
 
 <Route path="/*" element={
 <LayoutWithoutBackground>
 <NotFound />
 </LayoutWithoutBackground>
 } />



 <Route path="/oneCord" element={
 <LayoutWithoutBackground>
 <OneCordPage />
 </LayoutWithoutBackground>
 } />

  
  


 </Routes>
 </Router>
 );
}

export default App;