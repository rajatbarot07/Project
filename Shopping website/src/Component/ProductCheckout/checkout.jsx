import React from 'react';
import './checkout.css'

function Checkout(props) {
  const CountryClick = () =>{
    const inp = document.getElementById('cate-Data');

    if (inp.style.display == "block") 
    {
       inp.style.display = "none";
    }
    else
    {
      inp.style.display = "block";
    }
  };

  const DistrictClick = () =>{
    const inp = document.getElementById('dist-Data');

    if (inp.style.display == "block") 
    {
       inp.style.display = "none";
    }
    else
    {
      inp.style.display = "block";
    }
  };
    return (
        <>
        <section className='check-area'>
           <div className="container">
             <div className="row">
              <div className="col-xxl-12">
                <div className="check-title">
                    <h2>Returning Customer? 
                        <a href="#"> Click here to login</a>
                    </h2>
                </div>
                <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the
                   Billing & Shipping section.
                </p>

                <form action="#" className='row contact-form'>
                    <div className="col-xxl-6 col-sm-12 col-12">
                      <input type="text" className='form-control unamecheck' id='unamecheck' placeholder='Username or Email'/>
                    </div>
                    <div className="col-xxl-6 col-sm-12 col-12">
                      <input type="text" className='form-control' id='pwdcheck' placeholder='Password'/>
                    </div>
                    <div className="col-xxl-12 col-sm-12 col-12 check-demo">
                      <button className='btn btn-log'>Login</button>
                      <input type="checkbox" id='checkbox' className='check-acc'/>
                      <label htmlFor="name">Create an account?</label>
                    </div>
                </form>
              </div>
              <div className="col-xxl-12 col-sm-12 col-12 coupon-area">
                  <div className="check-title">
                    <h2>Have a coupon? 
                        <a href="#"> Click here to enter your code</a>
                    </h2>
                  </div>
                  <input type="text" placeholder='Enter coupon code' className='form-control coup-code'/>
                  <button className='btn btn-log coup-btn'>Apply Coupon</button>
              </div>

              <div className="col-xxl-12 col-sm-12 col-12 billing-area">
                <div className="row">
                  <div className="col-xxl-8 col-sm-12 col-12">
                    <h3>Billing Details</h3>
                    <form action="#" className='row'>
                      <div className="col-xxl-6 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='First name' className='form-control'/>
                      </div>
                      <div className="col-xxl-6 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='Last name' className='form-control'/>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='Company name' className='form-control'/>
                      </div>
                      <div className="col-xxl-6 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='Phone number' className='form-control'/>
                      </div>
                      <div className="col-xxl-6 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='Email Address' className='form-control'/>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                          <div className="drop-list" onClick={CountryClick}>
                            <span>Country</span>
                            <ul className='list' id='cate-Data'>
                                <li><b>Country</b></li>
                                <li>Country 1</li>
                                <li>Country 2</li>
                                <li>Country 3</li>
                                <li>Country 4</li>
                            </ul>
                          </div>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='Address line 01' className='form-control'/>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='Address line 02' className='form-control'/>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='Town/City' className='form-control'/>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                            <div className="drop-list" onClick={DistrictClick}>
                              <span>District</span>
                              <ul className='list' id='dist-Data'>
                                  <li><b>District</b></li>
                                  <li>District 1</li>
                                  <li>District 2</li>
                                  <li>District 3</li>
                                  <li>District 4</li>
                              </ul>
                            </div>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                        <input type="text" placeholder='Postcode/ZIP' className='form-control'/>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                        <input type="checkbox"  class="form-check-input"/>
                        <label htmlFor="name">Create an account?</label>
                      </div>
                      <div className="col-xxl-12 col-sm-12 col-12 form-group">
                      <h3>Shipping Details</h3>
                      <input type="checkbox"  class="form-check-input"/>
                      <label htmlFor="name">Ship to a different address?</label>
                      <textarea class="form-control" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-xxl-4 col-sm-12 col-12">
                    <div className="order-box">
                      <h2>Your Order</h2>
                      <ul className='list'>
                        <li><a href="#">Product <span>Total</span></a></li>
                        <li><a href="#">Fresh Blackberry
                         <span className='middle'>x 02</span>
                         <span className='last'>$720</span>
                         </a></li>
                        <li><a href="#">Fresh Tomatoes
                         <span className='middle'>x 02</span>
                         <span className='last'>$720</span>
                         </a></li>
                        <li><a href="#">Fresh Brocoli
                        <span className='middle'>x 02</span>
                         <span className='last'>$720</span>
                        </a></li>
                      </ul>

                      <ul className='list list2'>
                        <li><a href="#">SUBTOTAL <span>$2160.00</span></a></li>
                        <li><a href="#">SHIPPING <span>Flat Rate: $50.00</span></a></li>
                        <li><a href="#">TOTAL <span>$2210.00</span></a></li>
                      </ul>

                      <div className="pay-item">
                        <input type="radio"  class="form-check-input"/>
                        <label htmlFor="name">CHECK PAYMENTS</label>
                        <p> Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </p>
                        <input type="radio"  class="form-check-input"/>
                        <label htmlFor="name">PAYPAL</label>
                        <p> Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </p>
                      </div>

                      <div className="conditions">
                        <input type="checkbox"  class="form-check-input"/>
                        <label htmlFor="name">I’ve read and accept the <a href="#"> terms & conditions*</a></label>
                      </div>
                      <div className="pay-btn">
                      <button className='btn btn-log payment-btn'>Proceed to Paypal</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             </div>  
           </div> 
        </section>   
        </>
    );
}

export default Checkout;