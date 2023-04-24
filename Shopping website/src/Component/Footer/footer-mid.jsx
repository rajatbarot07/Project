import React from 'react';
import './mid.css'

function footermid(props) {
    return (
        <>
            <footer className='ftr-mid'>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-12 d-flex flex-wrap ftr2">
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-8 col-sm-12 col-12 ftr-img">
                                <img src="image/logo_footer.webp" alt="" />
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 footer-title">
                                <h4>Shop Men</h4>
                                <ul>
                                    <li><a href="#">Clothing Fashion</a></li>
                                    <li><a href="#">Winter</a></li>
                                    <li><a href="#">Summer</a></li>
                                    <li><a href="#">Formal</a></li>
                                    <li><a href="#">Casual</a></li>
                                </ul>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 footer-title">
                                <h4>Shop Women</h4>
                                <ul>
                                    <li><a href="#">Clothing Fashion</a></li>
                                    <li><a href="#">Winter</a></li>
                                    <li><a href="#">Summer</a></li>
                                    <li><a href="#">Formal</a></li>
                                    <li><a href="#">Casual</a></li>
                                </ul>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 footer-title">
                                <h4>Baby Collection</h4>
                                <ul>
                                    <li><a href="#">Clothing Fashion</a></li>
                                    <li><a href="#">Winter</a></li>
                                    <li><a href="#">Summer</a></li>
                                    <li><a href="#">Formal</a></li>
                                    <li><a href="#">Casual</a></li>
                                </ul>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 footer-title">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#">Track Your Order</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Carrier</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom mt-3 text-center">
                            <p>Copyright ©2023 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <span>Colorlib</span></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default footermid;