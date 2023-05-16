import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from '../pages/Home/home';
import LoginForm from '../pages/LoginPage/LoginPage';
import SignUpForm from '../pages/SignupPage/SignupPage';
import CategoryPage from '../pages/CategoryPage/AcoustiquePage';
import StringPage from '../pages/StringPage/StringPage';
import NotFound from '../pages/NotFound/NotFound';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        <Route path="/strings/:stringId" element={<StringPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;