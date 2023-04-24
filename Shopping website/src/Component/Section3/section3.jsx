import React from 'react';
import Slider from "react-slick";
import { useState } from 'react';
import './section3.css'

function Section(props) {
    const Testimonial = [
        {
            heading: "Customer Testimonial",
            para: "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
            image: "image/founder-img.png",
            name: "Petey Cruiser",
            about:"Designer at Colorlib"
        },
        {
            heading: "Customer Testimonial",
            para: "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
            image: "image/founder-img.png",
            name: "Petey Cruiser",
            about:"Designer at Colorlib"
        },
        {
            heading: "Customer Testimonial",
            para: "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
            image: "image/founder-img.png",
            name: "Petey Cruiser",
            about:"Designer at Colorlib"
        }
    ]

    var settings = {
        slidesToShow: 1,
        infinite: true,
        autoplaySpeed: 3000
      };

    const[test,settest] = useState(Testimonial)
    console.log(test);
    return (
        <>
           <section className=' test-bg'>
            <div className="container text-center">
                <div className="row">
                <Slider {...settings}>
                      {test.map((res,i)=>{
                        const{heading,para,image,name,about}=res;
                        return(
                            <>
                             <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" key={i}>
                              <div className="heading-found">
                                <h1>{heading}</h1>
                                <p>{para}</p>
                              </div>

                              <div className="founder text-center">
                                 <div className="found-img">
                                    <img src={image} alt=""/>
                                 </div>
                                 <div className="found-name">
                                    <span>{name}</span>
                                    <p>{about}</p>
                                 </div>
                              </div>
                             </div>
                            </>
                        )
                      })}
                   </Slider>
                </div>
            </div>
           </section> 
        </>
    );
}

export default Section;