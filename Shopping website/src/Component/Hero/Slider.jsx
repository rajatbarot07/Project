import React, { useEffect } from 'react';
import { useState } from 'react';
import './slider.css'
// import './slide.js'

function Home(props) {  
  
  const images = document.getElementById('slider-img')

  var a = 0;

  const prev = ()=>{
    if(a>"-1400")
    {
      a = a-1400;
      images.style.left = a + "px";
    }
  }
      
  return (
        <>
          <section>

            
              <div class="slideshow-container" id='slider-img'>

               
                <div class="mySlides" id='img1'>
                  <img src="image/bg1.jpg"/>
                  <div class="about first-about">
                    <span>Fashion Sale</span>
                    <h1>Minimal Menz Style</h1>
                    <div className="effect">
                      <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                      <a className='btn-1'>SHOP NOW</a>
                    </div>
                  </div>
                </div>

                <div class="mySlides img2" id='img2'>
                  <img src="image/bg2.jpg"/>
                  <div class="about second-about">
                      <span>Fashion Sale</span>
                      <h1>Minimal Womenz Style</h1>
                      <div className="effect">
                        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                        <a className='btn-1'>SHOP NOW</a>
                      </div>
                    </div>
                  </div>
                  
                  <span onClick={prev}><i class="fa-solid fa-chevron-left" ></i></span>
                  <span><i class="fa-solid fa-chevron-right" ></i></span>
            
              </div>     
           
          </section> 
          
           
        </>
    );
}

export default Home;