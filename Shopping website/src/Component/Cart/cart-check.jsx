import React from 'react';
import { useState, useEffect } from 'react';
import './cart-check.css';


const countries = [
    {
        name:'India',value:'IN',cities:['Delhi','Gujarat','Rajasthan']
    },
    {
        name:'England',value:'ENG',cities:['Manchester','Birmingham','Liverpool']
    },
    {
        name:'Bangladesh',value:'BG',cities:['Dhaka','Chittagong','Khulna']
    }
]

function Cartcheck(props) {
    const[count,setcount]=useState(1)

    const plusClick=()=>{
        setcount(count+1)
    }
    const minusClick=()=>{
        setcount(count-1)
    }

    useEffect(()=>{
            const price1 = document.getElementById('product1').value;
            console.log(price1);
            const quanti1 = document.getElementById('quant1').value;
            console.log(quanti1);
            var total1 = price1*quanti1;
            document.getElementById('tt1').innerHTML= + total1;
        })

    useEffect(()=>{
            const price2 = document.getElementById('product2').value;
            console.log(price2);
            const quanti2 = document.getElementById('quant2').value;
            console.log(quanti2);
            const total2 = price2*quanti2;
            document.getElementById('tt2').innerHTML= + total2;
        }) 
        
    useEffect(()=>{
          const sub1 = document.getElementById('tt1').innerHTML;
          console.log(sub1);
          const sub2 = document.getElementById('tt2').innerHTML;
          console.log(sub2);
          const subtotal = parseInt(sub1) + parseInt(sub2);
          document.getElementById('subttl').innerHTML = "$" +subtotal;
    })
    
   

    const[country,setCountry]=useState({name:"",value:"",cities:[]})
    return (
        <>
           <section className='cart-area'>
            <div className="container">
              <div className="row">
                <div className="table-responsive demo">
                    <table className="table">
                        <thead>
                            <tr className='tr-row'>
                                <th className=''>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='tr-row'>
                                <td>Product Name</td>
                                <td><input type="hidden" value={58.00} id="product1" />$58.00</td>
                                <td>
                                    <span onClick={()=>{setcount(count-1)}}><i className="fa-solid fa-minus"></i></span>
                                    <input type="text" id='quant1' value={count}/>
                                    <span onClick={()=>{setcount(count+1)}}><i className="fa-solid fa-plus"></i></span>
                                </td>
                                <td>$<span id='tt1' ></span></td>
                            </tr>
                            <tr className='tr-row'>
                                <td>Product Name</td>
                                <td><input type="hidden" value={70.00} id="product2" />$70.00</td>
                                <td>
                                    <span onClick={()=>{setcount(count-1)}}><i className="fa-solid fa-minus"></i></span>
                                    <input type="text" id='quant2' value={count}/>
                                    <span onClick={()=>{setcount(count+1)}}><i className="fa-solid fa-plus"></i></span>
                                </td>
                                <td>$<span id='tt2'></span></td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <a href="#" className='btn btn-cart'>Update Cart</a>
                                </td>
                                <td></td>
                               
                                <td>
                                    <a href="#" className='btn btn-cart'>Close Coupon</a>
                                </td>
                                <td></td>
                            </tr>

                            <tr className='tr-row'>
                                <td></td>
                                <td></td>
                                <td><h5>Subtotal</h5></td>
                                <td className='sub'><p id='subttl'></p></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="shipping-box">
                        <h5>Shipping</h5>
                        <div className="rates">
                            <ul>
                                <li>Flat Rate: $5.00<input type="radio" /></li>
                                <li>Free Shipping<input type="radio" /></li>
                                <li>Flat Rate: $10.00<input type="radio" /></li>
                                <li>Local Delivery: $2.00<input type="radio" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="country">
                         {/* 1st Dropdown */}
                        <select 
                          name="country" 
                          value={country} 
                          onChange={(e)=>{
                            console.log(e.target.value)
                            setCountry(e.target.value)
                        }}>
                            {
                               countries.map((item,i)=>{
                                return <option key={i} value={i}>{item.name}</option>;

                               })
                            }
                        </select>
                         
                        {/* 2nd Dropdown */}
                         
                         <select value={country}>
                            {countries[country].cities.map((item,i)=>{
                                    return <option key={i} value={i}>{item}</option>
                                  
                                })}
                        </select> 
                    </div>
                    
                </div>
              </div>
            </div> 
           </section> 
        </>
    );
}

export default Cartcheck;