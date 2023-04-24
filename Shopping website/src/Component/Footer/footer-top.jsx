import React from 'react';
import './top.css'

function footertop(props) {
    return (
        <>
           <footer className='ftr-top'>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 col-xl-12 d-flex flex-wrap ftr1">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-12 col-12 subs-content">
                            <h3>Subscribe Newsletter</h3>
                            <p>Subscribe newsletter to get 5% on all products.</p>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-8 col-sm-12 col-12 subs-inp">
                            <form action="#">
                                <input type="text" placeholder='Enter your email' />
                                <button>Subscribe</button>
                            </form>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-12 subs-icon">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
           </footer> 
        </>
    );
}

export default footertop;