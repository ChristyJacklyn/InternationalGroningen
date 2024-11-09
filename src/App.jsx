// src/App.js or src/App.tsx
// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Footer from './Footer';
import LoginNav from './LoginNav';
import SecondFooter from './secondFooter';
import MainPage from './pages/mainpage';
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
import Business from './pages/doingbusiness';
import Credit from './pages/credit';
import Aboutus from './pages/aboutus';
import Contact from './pages/Contact';
import CityandProvince from './pages/cityandprovince';
import BeforeYouMove from './pages/beforeyoumove';
import Newletter from './pages/newsletter';
import Language from './pages/language';
import { FormDataProvider } from './Components/formDataContext';
import CardDisplayPage from './Components/displayEvent';

function App() {
  return (
    <FormDataProvider>
    <Router>
     <div className="min-h-screen w-full flex flex-col">
    
          <TopLoginNav/>
          <LoginNav/>
            <main className="min-h-screen w-full flex-grow mx-auto">
              <ScrollOnTop/>
              <Routes>
                  <Route path='/' element = {<MainPage/>}/>
                  <Route path='/whygroningen' element = {<WhyGroningen/>}/>
                  <Route path='/whygroningen/citynprovince' element={<CityandProvince/>}/>
                  <Route path='/workingingroningen' element = {<WorkingInGroningen/>}/>
                  <Route path='/workingingroningen/it&techpage' element = {<Itandtech/>}/>
                  <Route path='/workingingroningen/financepage' element = {<Finance/>}/>
                  <Route path='/workingingroningen/energypage' element = {<Energy/>}/>
                  <Route path='/livingingroningen' element = {<LivingInGroningen/>}/>
                  <Route path='/studyingroningen' element = {<StudyInGroningen/>}/>
                  <Route path='/relocating' element = {<Relocating/>}/>
                  <Route path='/relocating/beforeyoumove'element={<BeforeYouMove/>}/>
                  <Route path = "/aboutus" element ={<Aboutus/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/newsletter' element={<Newletter/>}/>
                  <Route path='/business' element={<Business/>}/>
                  <Route path="/resources" element={<Resources/>}/>
                  <Route path="/credit" element={<Credit/>}/>
                  <Route path="/language" element={<Language/>}/>
                  <Route path="/events" element={<CardDisplayPage/>}/>
                 
              </Routes>
            </main>
          <SecondFooter/>
         <Footer/>
    </div>
    </Router>
    </FormDataProvider>
    );
}


export default App;
