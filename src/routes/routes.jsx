import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/home';
import LoginForm from '../pages/LoginPage/LoginPage';
import SignUpForm from '../pages/SignupPage/SignupPage';
import AcoustiquePage from '../pages/CategoryPage/AcoustiquePage';
import ElectriquePage from '../pages/CategoryPage/ElectriquePage';
import CalssiquePage from '../pages/CategoryPage/ClassiquePage';
import NotFound from '../pages/NotFound/NotFound';
import AddStringPage from '../pages/AddStringPage/AddStringPage';   

const RoutesConfig = () => (
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
);

export default RoutesConfig;