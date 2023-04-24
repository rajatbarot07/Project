import React from 'react';
import './top.css'

function Headertop(props) {
    return (
        <>
        <header className='border-bottom head'>
          <div className="container-fluid">
           <div className="row d-flex">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-6 h-left">
                <ul className=' d-flex flex-row mt-3'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12 h-right d-flex">
                <ul className=' d-flex flex-row mt-3 order-list'>
                    <li><a href="#">My Wishlist</a></li>
                    <li><a href="#">Track Your Order</a></li>
                </ul>
                <ul className=' d-flex flex-row mt-3 header-social'>
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
            </div>
            
           </div>
          </div>
        </header>     
        </>
    );
}

export default Headertop;