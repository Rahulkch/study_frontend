// import "./components/Signup"
// import "./components/Login"
// import Signup from "./components/Signup";
// import { Route,Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import Electric from "./components/Electric";
// import Details from './components/Details'
// import Complain from "./components/Complain";
// import Dumy from "./components/Dumy";
import { Route,Routes } from "react-router-dom";

import React from 'react';
import Home from './components/Home'
// import { Route } from 'react-router-dom';
import Input from './components/Input';
import Display from "./components/Display";
function App() {
  return (
     <>
       
     <Routes>
     <Route path="/" element={<Home/>}></Route>
      <Route path="/inp" element={<Input/>}></Route>
      <Route path="/dis" element={<Display/>}></Route>
     </Routes>
     </>
  );
}

export default App;