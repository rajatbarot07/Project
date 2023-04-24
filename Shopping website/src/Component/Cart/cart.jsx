import React, { useState } from 'react';
import { useEffect } from 'react';
import Headerbottom from '../Headers/header_bottom';
import Headermid from '../Headers/header_mid';
import Headertop from '../Headers/header_top';
import Carthead from './carthead';
import CartCheck from './cart-check'
import FooterTop from '../Footer/footer-top';
import FooterMid from '../Footer/footer-mid';

function Cart(props) {
    // const[quantity,setquantity]= useState(1)
    // // console.log(quantity);
    

    // const inc = ()=>{
    //     setquantity(quantity+1)
    // }

    // const dec = ()=>{
    //     if(quantity>1){
    //         setquantity(quantity-1)
    //     }
       
        
    // }
        // const total=()=>{
        //     const price = document.querySelector('#prc');
        //     setquantity(quantity*price)
        // }
        // total();

   
    // console.log(price);
    // useEffect(()=>{
    //     const price = 58;
    //     console.log(price);
    //     const quanti = document.getElementById('quant').value;
    //     console.log(quanti);
    //     const total = price*quanti;
    //     document.getElementById('ttl').innerHTML=total
    // })
 
    
    // 
    return (
        <>
          <Headertop/>
          <Headermid/>
          <Headerbottom/>
          <Carthead/>
          <CartCheck/>
          <FooterTop/>
          <FooterMid/>
        </>
    );
}

export default Cart;


{/* <table border={1}>
                    <td>
                        <th>Product</th>                       
                        <tr>Cloths</tr>
                        <tr>Shoes</tr>
                    </td>
                    <td>
                        <th>Price</th>
                        <tr><span id='prc'>45</span></tr>
                        {/* <tr><span id='prc'>180</span></tr> 
                    </td>
                    <td>
                        <th>Quantity</th>
                        <tr>
                            <input type="text" id='quant' value={quantity}/>
                            <span onClick={inc}><i class="fa-solid fa-plus"></i></span>   
                            <span onClick={dec}><i class="fa-solid fa-minus"></i></span>
                        </tr>
                        <tr><input type="text" id='quant' /></tr>
                    </td>

                    <td>
                        <th>total</th>
                        <p id='ttl'></p>
                        {/* <tr><input type="text" id='ttl' /></tr>
                        <tr><input type="text" id='ttl' /></tr> 
                    </td>
                    </table> */}