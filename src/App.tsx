import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { PrivateRoutes } from './components/Home/ProtectedRoute';
import { AuthContextProvider } from './Contexts/auth/AuthContext';
import { MainContextProvider } from './Contexts/MainFunctionContext';

import { LoadingFallback } from './components/Extra/LoadingFallback';

// Lazy load components
const Home = lazy(() => import('./components/Home/Home'));
const LoginPage = lazy(() => import('./components/Home/LogIn'));
const SignupPage = lazy(() => import('./components/Home/SignUp'));
const HeroSection = lazy(() => import('./components/pages/HeroSection'));

function App() {
  
  useEffect(() => {
    const defaultTemplate = localStorage.getItem('template') || 'Template-One';
    localStorage.setItem('template', defaultTemplate);
  }, []);

  return (
    <>


    <AuthContextProvider>
        <Router>
            <Routes>
              {/* Route For Hero Section */}

            <Route path='/' element={
              <Suspense fallback={<LoadingFallback />}>
                <HeroSection />
              </Suspense>
            } />
              
             {/* Route for the login page */}
              <Route path='/login' element={
                <Suspense fallback={<LoadingFallback/>}>
                  <LoginPage/>
                </Suspense>
              } />
              <Route path='/signup' element={
                <Suspense fallback={<LoadingFallback/>}>
                  <SignupPage/>
                </Suspense>
              } />
              
              {/* Route for the home page */}
              <Route element={<PrivateRoutes />}>
                <Route path="/home" element={
                <Suspense fallback={<LoadingFallback/>}>
                  <MainContextProvider>
                    <Home/>
                  </MainContextProvider>
                </Suspense>
                } />
              </Route>
            </Routes>
        </Router>
    </AuthContextProvider>
    </>
  );
}

export default App;
