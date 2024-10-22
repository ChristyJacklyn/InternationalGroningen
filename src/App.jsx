// src/App.js or src/App.tsx
// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Footer from './Footer';
import LoginNav from './LoginNav';
import Events from './pages/Events';
import SecondFooter from './secondFooter';
import MainPage from './pages/mainpage';
import Connect from './pages/Connect';
import Resources from './pages/ResourcesPage';
import ScrollOnTop from './Components/scrollOnTop';
import TopLoginNav from './toploginNav';
import WhyGroningen from './pages/whygronigenPage';
import Relocating from './pages/RelocatingPage';
import WorkingInGroningen from './pages/workinginGroningen';
import Itandtech from './pages/it&tech';
import Finance from './pages/finance';
import Energy from './pages/Energy';
import LivingInGroningen from './pages/livinginGroningen';
import StudyInGroningen from './pages/studyingroningen';

function App() {
  return (

    <Router>
     <div className="min-h-screen w-full flex flex-col">
          <TopLoginNav/>
          <LoginNav/>
            <main className="min-h-screen w-full flex-grow mx-auto">
              <ScrollOnTop/>
              <Routes>
                  <Route path='/' element = {<MainPage/>}/>
                  <Route path='/whygroningen' element = {<WhyGroningen/>}/>
                  <Route path='/workingingroningen' element = {<WorkingInGroningen/>}/>
                  <Route path='/it&techpage' element = {<Itandtech/>}/>
                  <Route path='/financepage' element = {<Finance/>}/>
                  <Route path='/energypage' element = {<Energy/>}/>
                  <Route path='/livingingroningen' element = {<LivingInGroningen/>}/>
                  <Route path='/studyingroningen' element = {<StudyInGroningen/>}/>
                  <Route path='/relocating' element = {<Relocating/>}/>
                  <Route path = "/events" element ={<Events/>}/>
                  <Route path='/connect' element={<Connect/>}/>
                  <Route path="/resources" element={<Resources/>}/>
              </Routes>
            </main>
          <SecondFooter/>
         <Footer/>
    </div>
    </Router>
    );
}


export default App;
