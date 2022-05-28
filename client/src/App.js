import React from 'react';
import Topbar from './components/Topbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';

import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import MainNav from './components/MainNav';

const App = () => {
  return (
    <BrowserRouter>
    <Topbar/>
    <MainNav/>
    <Routes>
    <Route extact path='/' element={<HomeScreen/>}></Route>
     <Route extact path='/about' element={<About/>}></Route>
   <Route extact path='/contact' element={<Contact/>}></Route>
   <Route extact path='/policy' element={<Policy/>}></Route>
  
</Routes>

    </BrowserRouter>
  )
}

export default App;
