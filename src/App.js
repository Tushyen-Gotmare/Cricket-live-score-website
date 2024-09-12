import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LiveScores from './components/LiveScores';
import Tournaments from './components/Tournaments';
import Home from './components/Homee'; // Assuming there's a home page
import Footer from './components/Footer';
import MultiStepForm from './components/MultiStepForm';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<LiveScores />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/register" element={<MultiStepForm />} /> {/* New Registration Route */}
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
