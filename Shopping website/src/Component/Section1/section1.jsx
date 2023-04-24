import React from 'react';
import ImageAPI from './api'
import { useState } from 'react';
import './section1.css'

function Section(props) {
    const[imgdata,setimgdata] = useState(ImageAPI)
    console.log(imgdata);
    return (
        <>
            <section className='sect1'>
               <div className="container">
                <div className="row">
                    {imgdata.map((ele,i)=>{
                        const{image,name,shop}=ele;
                        return(
                            <>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-6 col-12 mt-3 myshadow" key={i}>
                                <div className="images">
                                 <img src={image} alt="" />
                                </div>
                                <div className='heading'>
                                 <h4><a href="#" >{name}</a></h4>
                                 <a href="#" className='browse-btn'>{shop}</a>
                                </div>
                              </div>                            
                            </>
                        )
                    })}
                </div>
               </div>
            </section> 
        </>
    );
}

export default Section;