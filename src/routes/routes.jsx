import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';

// Importe les composants avec lazy loading
const Home = lazy(() => import('../pages/Home/home'));
const LoginForm = lazy(() => import('../pages/LoginPage/LoginPage'));
const SignUpForm = lazy(() => import('../pages/SignupPage/SignupPage'));
const AcoustiquePage = lazy(() => import('../pages/CategoryPage/AcoustiquePage'));
const ElectriquePage = lazy(() => import('../pages/CategoryPage/ElectriquePage'));
const CalssiquePage = lazy(() => import('../pages/CategoryPage/ClassiquePage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const AddStringPage = lazy(() => import('../pages/AddStringPage/AddStringPage'));

// Déclarations de types communes pour la prop "element"
const elementPropTypes = {
  element: PropTypes.element
};

const RoutesConfig = () => (
  <Suspense fallback={<div>Loading...</div>}>
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
  </Suspense>
);

// Appliquer les déclarations de types aux composants
LoginForm.propTypes = elementPropTypes;
SignUpForm.propTypes = elementPropTypes;
Home.propTypes = elementPropTypes;
AcoustiquePage.propTypes = elementPropTypes;
ElectriquePage.propTypes = elementPropTypes;
CalssiquePage.propTypes = elementPropTypes;
NotFound.propTypes = elementPropTypes;
AddStringPage.propTypes = elementPropTypes;

export default RoutesConfig;
