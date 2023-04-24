import React, { useState } from 'react';
import Slider from "react-slick";
import './section4.css'

function Section(props) {
    // const allsame = [
    //     {
    //         productname: "Cashmere Tank + Bag",
    //         newprice:"$98",
    //         oldprice:"$120",
    //         cart:"fa-solid fa-cart-plus",
    //         heart:"fa-regular fa-heart",
    //         search:"fa-solid fa-magnifying-glass-plus"

    //     }
    // ]
    const images = [
        {
            image:"image/latest5.jpg",
            // productabout: allsame
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"

        },
        {
            image:"image/latest6.jpg",
            // productabout: allsame
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest7.jpg",
            // productabout: allsame
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest8.jpg",
            // productabout: allsame
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        }
    ]

    var settings = {
        slidesToShow: 3,
        infinite: true,
  
        autoplay: true,
        autoplaySpeed: 3000
      };
    // const[data,setdata]= useState(images)
    console.log(images);
    return (
        <> 
         <section>
           <div className="container sect4">
            <div className="row">
                <div className="tittle text-center">
                    <h1>You May Like</h1>
                </div>
            <Slider {...settings}>
                
                    {images.map((ele,i)=>{
                        const{image,productname,newprice,oldprice,cart,heart,search}=ele;
                        return(
                            <>
                                <div className='imgdata' key={i}>
                                    <img src={image} />
                                    <h3 className='text-center'>
                                        <a href="#">{productname}</a>
                                    </h3>
                                    <div className="price text-center">
                                        <span>{newprice}</span>
                                        <span><del>{oldprice}</del></span>
                                    </div>
                                    <div className="icons">
                                        <a href="#"  className="text-center"><i class={cart}></i></a>
                                        <a href="#"  className="text-center"><i class={heart}></i></a>
                                        <a href="#"  className="text-center"><i class={search}></i></a>
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