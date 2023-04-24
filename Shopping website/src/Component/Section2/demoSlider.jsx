import React from 'react';
import Slider from "react-slick";
import './demo.css'

function DemoSlider(props) {
    
    var settings = {
        slidesToShow: 3,
        infinite: true,
  
        autoplay: true,
        autoplaySpeed: 3000
      };
    return (
        <>

<div className="container ">
    <div className="row">
        <Slider {...settings}>
          <div className='imgdata '>
            <img src="image/latest1.jpg" className='img-fluid'/>
            <h3  className="text-center">
                <a href="#">Cashmere Tank + Bag</a>
            </h3>
            <div className="price text-center">  
                <span>$98.00</span>
                <span><del>$120.00</del></span>
            </div>
            <div className="icons">
                <a href="#"  className="text-center"><i class="fa-solid fa-cart-plus"></i></a>
                <a href="#" className="text-center"><i class="fa-regular fa-heart"></i></a>
                <a href="#" className="text-center"><i class="fa-solid fa-magnifying-glass-plus"></i></a>
            </div>
          </div>
          <div className='imgdata col-xxl-3 col-xl-3 col-6'>
            <img src="image/latest2.jpg" />
            <h3  className="text-center">
                <a href="#">Cashmere Tank + Bag</a>
            </h3>
            <div className="price text-center">
                <span>$98.00</span>
                <span><del>$120.00</del></span>
            </div>
            <div className="icons">
                <a href="#"  className="text-center"><i class="fa-solid fa-cart-plus"></i></a>
                <a href="#"  className="text-center"><i class="fa-regular fa-heart"></i></a>
                <a href="#"  className="text-center"><i class="fa-solid fa-magnifying-glass-plus"></i></a>
            </div>
          </div>
          <div className='imgdata col-xxl-3 col-xl-3 col-6'>
            <img src="image/latest3.jpg" />
            <h3 className="text-center">
                <a href="#">Cashmere Tank + Bag</a>
            </h3>
            <div className="price text-center">
                <span>$98.00</span>
                <span><del>$120.00</del></span>
            </div>
            <div className="icons">
                <a href="#"  className="text-center"><i class="fa-solid fa-cart-plus"></i></a>
                <a href="#"  className="text-center"><i class="fa-regular fa-heart"></i></a>
                <a href="#"  className="text-center"><i class="fa-solid fa-magnifying-glass-plus"></i></a>
            </div>
          </div>
          <div className='imgdata col-xxl-3 col-xl-3 col-12'>
            <img src="image/latest4.jpg" />
            <h3 className="text-center">
                <a href="#">Cashmere Tank + Bag</a>
            </h3>
            <div className="price text-center">
                <span>$98.00</span>
                <span><del>$120.00</del></span>
            </div>
            <div className="icons">
                <a href="#" className="text-center"><i class="fa-solid fa-cart-plus"></i></a>
                <a href="#" className="text-center"><i class="fa-regular fa-heart"></i></a>
                <a href="#" className="text-center"><i class="fa-solid fa-magnifying-glass-plus"></i></a>
            </div>
          </div>
        </Slider>
        </div>
      </div>
            {/* <div id="demo"  className="carousel slide" data-bs-ride="carousel">


           
            <div  className="carousel-inner">
            <div  className="carousel-item active">
                <img src="image/latest1.jpg" alt="image1"  className="d-block" />
            </div>
            <div  className="carousel-item">
                <img src="image/latest2.jpg" alt="image2"  className="d-block" />
            </div>
            <div  className="carousel-item">
                <img src="image/latest3.jpg" alt="image3"  className="d-block" />
            </div>
            <div  className="carousel-item">
                <img src="image/latest4.jpg" alt="image4"  className="d-block" />
            </div>
            </div>

            
            <button  className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span  className="carousel-control-prev-icon"></span>
            </button>
            <button  className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span  className="carousel-control-next-icon"></span>
            </button>
            </div> */}
        </>
    );
}

export default DemoSlider;