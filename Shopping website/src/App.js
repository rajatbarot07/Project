import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import Headertop from './Component/Headers/header_top'
import Headermid from './Component/Headers/header_mid';
import Headerbottom from './Component/Headers/header_bottom';
import Slider from './Component/Hero/Slider'
import Section1 from './Component/Section1/section1'
import Section2 from './Component/Section2/section2'
import Section3 from './Component/Section3/section3'
import Section4 from './Component/Section4/section4'
import Section5 from './Component/Section5/section5'
import Section6 from './Component/Section6/section6'
import FooterTop from './Component/Footer/footer-top';
import FooterMid from './Component/Footer/footer-mid';
import BackToTop from './Component/BackToTop/backtotop'

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
      <>
      {loading ?(
        <div class="loader mx-auto"></div>  
      ):(
        <div className="App">
        <BackToTop/>
        <Headertop/>
        <Headermid/>
        <Headerbottom/>
        <Slider/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <FooterTop/>
        <FooterMid/>
       
      </div>
      )}
      
    </>
  );
}

export default App;
