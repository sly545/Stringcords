import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/Home/home';
import LoginForm from '../pages/LoginPage/LoginPage';
import SignUpForm from '../pages/SignupPage/SignupPage';
import AcoustiquePage from '../pages/CategoryPage/AcoustiquePage';
import ElectriquePage from '../pages/CategoryPage/ElectriquePage';
import CalssiquePage from '../pages/CategoryPage/ClassiquePage';
import NotFound from '../pages/NotFound/NotFound';
import AddStringPage from '../pages/AddStringPage/AddStringPage';


// Déclarations de types communes pour la prop "element"
const elementPropTypes = {
  element: PropTypes.element
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/category/acoustique" element={<AcoustiquePage />} />
        <Route path="/category/electrique" element={<ElectriquePage />} />
        <Route path="/category/classique" element={<CalssiquePage />} />
        <Route path="/Addstring" element={<AddStringPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Appliquer les déclarations de types aux composants
LoginForm.propTypes = elementPropTypes;
SignUpForm.propTypes = elementPropTypes;
Home.propTypes = elementPropTypes;
AcoustiquePage.propTypes = elementPropTypes;
ElectriquePage.propTypes = elementPropTypes;
CalssiquePage.propTypes = elementPropTypes;
NotFound.propTypes = elementPropTypes;
AddStringPage.prototype = elementPropTypes;

export default App;
