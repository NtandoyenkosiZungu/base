import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LoginPage from './components/Home/LogIn';
import './App.css';
import SignupPage from './components/Home/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />

        {/*Route for the sign up page*/}
        <Route path='/signup' element={<SignupPage/>}/>

        {/* Route for the home page */}
        <Route path="/home" element={<Home />} />

        {/* Add future routes here */}
      </Routes>
    </Router>
  );
}

export default App;
