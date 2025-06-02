import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import { PrivateRoutes } from './components/Home/ProtectedRoute';
import { AuthContextProvider } from './Contexts/auth/AuthContext';
import { TemplateGalleryProvider } from './Contexts/templateGalleryContext';
import { MainContextProvider } from './Contexts/MainFunctionContext';

// Lazy load components
const Home = lazy(() => import('./components/Home/Home'));
const LoginPage = lazy(() => import('./components/Home/LogIn'));
const SignupPage = lazy(() => import('./components/Home/SignUp'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <MainContextProvider>
    <AuthContextProvider>
      <TemplateGalleryProvider>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Route for the login page */}
              <Route path="/" element={<LoginPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              
              {/* Route for the home page */}
              <Route element={<PrivateRoutes />}>
                <Route path="/home" element={<Home />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </TemplateGalleryProvider>
    </AuthContextProvider>
    </MainContextProvider>
  );
}

export default App;
