import { Routes, Route } from 'react-router-dom';
import React from 'react';
import PrintsDirectoryPage from './pages/PrintsDirectoryPage';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PrintDetailPage from './pages/PrintDetailPage';
import AboutPage from   './pages/AboutPage';


function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='contact' element={<ContactPage/>} />
        <Route path='about' element={<AboutPage />} />
        <Route path='directory' element={<PrintsDirectoryPage />} />
        <Route path='directory/:printId' element={< PrintDetailPage/>} />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
