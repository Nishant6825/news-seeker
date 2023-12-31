import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        {/* <Hi/> */}
        
        <Routes>
          <Route path='/' element={<News country={'in'} category={"general"} pageSize={6} apiKey={`e14924ccd91b44688321807adc1d0900`} page={1}/>}></Route>
          <Route exact path="/Business" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'business'}/>}/>
          <Route exact path="/Entertainment" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'entertainment'}/>}/>
          <Route exact path="/Health" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'health'}/>}/>
          <Route exact path="/Science" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'science'}/>}/>
          <Route exact path="/Sports" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'sports'}/>}/>
          <Route exact path="/Technology" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'technology'}/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
