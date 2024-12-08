import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Tourism from './pages/Tourism';
import TajMahalPage from './TouristPlaces/Tajmahal';
import Jaipur from './TouristPlaces/Jaipur';
import GoldenTemple from './TouristPlaces/GoldenTemple';
import Leh from './TouristPlaces/Leh';
import Manali from './TouristPlaces/Manali';
import Reshikesh from './TouristPlaces/Reshikesh';
import Jaisalmer from './TouristPlaces/Jaisalmer';
import Gaya from './TouristPlaces/Gaya';
import Backwater from './TouristPlaces/Backwater';
import Munnar from './TouristPlaces/Munnar';
import Calendar from './pages/Calendar';
import Temples from './pages/Temples';
import UserDashboard from './pages/UserDashboard';
import Dance from './pages/Dance';
import ModernIndia from './pages/ModernIndia';
import FeedbackPage from './pages/feedback';
import IndianArtForms from './pages/IndianArtForms';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: '20px' }}> {/* Adjusted spacing to remove ScrollerBar effect */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/tajmahal" element={<TajMahalPage />} />
          <Route path="/jaipur" element={<Jaipur />} />
          <Route path="/goldentemple" element={<GoldenTemple />} />
          <Route path="/lehladakh" element={<Leh />} />
          <Route path="/manali" element={<Manali />} />
          <Route path="/reshikesh" element={<Reshikesh />} />
          <Route path="/jaisalmer" element={<Jaisalmer />} />
          <Route path="/gaya" element={<Gaya />} />
          <Route path="/backwater" element={<Backwater />} />
          <Route path="/munnar" element={<Munnar />} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/temples" element={<Temples/>} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/dance" element={<Dance/>} />
          <Route path="/modernindia" element={<ModernIndia/>} />
          <Route path="/feedback" element={<FeedbackPage/>} />
          <Route path="/indianartforms" element={<IndianArtForms/>} />





        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
