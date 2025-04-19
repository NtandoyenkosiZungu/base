import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LoginPage from './components/Home/LogIn';
import './App.css';
import SignupPage from './components/Home/SignUp';
import { PrivateRoutes } from './components/Home/ProtectedRoute';
import { AuthContextProvider } from './Contexts/auth/AuthContext';
import { TemplateGalleryProvider } from './Contexts/templateGalleryContext';

function App() {
  return (
    <AuthContextProvider>
      <TemplateGalleryProvider>
      <Router>
        <Routes>
          {/* Route for the login page */}
          <Route path="/" element={<LoginPage />} />

          <Route path='/login' element= {<LoginPage/>}/>

          {/*Route for the sign up page*/}
          <Route path='/signup' element={<SignupPage/>}/>

          {/* Route for the home page */}
          <Route element={<PrivateRoutes/>}>
            <Route path="/home" element={<Home />} />
          </Route>

          {/* Add future routes here */}
        </Routes>
      </Router>
      </TemplateGalleryProvider>
    </AuthContextProvider>
  );
}

export default App;
