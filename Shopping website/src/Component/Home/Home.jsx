import React from 'react';
import Headertop from '../Headers/header_top';
import Headermid from '../Headers/header_mid';
import Headerbottom from '../Headers/header_bottom';
import Slider from '../Hero/Slider'
import Section1 from '../Section1/section1'
import Section2 from '../Section2/section2'
import Section3 from '../Section3/section3'
import Section4 from '../Section4/section4'
import Section5 from '../Section5/section5'
import Section6 from '../Section6/section6'
import FooterTop from '../Footer/footer-top';
import FooterMid from '../Footer/footer-mid';
import { useState, useEffect } from 'react'

function Home(props) {
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
              
            <div>
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

export default Home;