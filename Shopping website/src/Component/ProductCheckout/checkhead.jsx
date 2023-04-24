import React from 'react';
import '../Category/head.css'

function Head(props) {
    return (
        <>
          <header className='cat1'>
          <div className="container">
           <div className="row">
            <div className="col-xxl-12 col-12 cat2">
                <h1>Checkout</h1>
                <ul>
                    <li className='head-1'><a href="#">Home</a></li>
                    <li className='cont head-1'><a href="#">Checkout</a></li>
                </ul>
            </div>
           </div>
          </div>
          </header>  
        </>
    );
}

export default Head;