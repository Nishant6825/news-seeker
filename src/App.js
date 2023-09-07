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
        
        <Routes>
          <Route path='https://nishant6825.github.io/news-seeker/' element={<News country={'in'} category={"general"} pageSize={6} apiKey={`e14924ccd91b44688321807adc1d0900`} page={1}/>}></Route>
          <Route exact path="https://nishant6825.github.io/news-seeker/Business" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'business'}/>}/>
          <Route exact path="https://nishant6825.github.io/news-seeker/Entertainment" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'entertainment'}/>}/>
          <Route exact path="https://nishant6825.github.io/news-seeker/Health" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'health'}/>}/>
          <Route exact path="https://nishant6825.github.io/news-seeker/Science" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'science'}/>}/>
          <Route exact path="https://nishant6825.github.io/news-seeker/Sports" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'sports'}/>}/>
          <Route exact path="https://nishant6825.github.io/news-seeker/Technology" element={<News  apiKey={'e14924ccd91b44688321807adc1d0900'} pageSize={6} country={'in'} category={'technology'}/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;