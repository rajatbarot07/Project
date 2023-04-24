import React from 'react';
import './section2.css'
import Demoslider from './demoSlider'

function Section(props) {
    return (
        <>
           <section>
            <div className="container sect2">
                <div className="row">
                    <div className="col-12">
                        <div className="nav-button d-flex flex-wrap col-12">
                            <div className="nav-tittle col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <h2>Trending This Week</h2>
                            </div>

                            <div className="nav-tabs col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <a href="#" className='active'>Men</a>
                                <a href="#">Women</a>
                                <a href="#">Baby</a>
                                <a href="#">Fashion</a>
                            </div>
                        </div>
                      



                        <Demoslider/>
                    </div>
                </div>
            </div>
           </section> 
        </>
    );
}

export default Section;