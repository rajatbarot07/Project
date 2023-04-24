import React from 'react';
import './mid.css'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import { useEffect } from 'react';
  

 

function Headermid(props) {

      //  useEffect(()=>{
      //     $('.fa-magnifying-glass').click(()=>{
      //       // alert("hjm")
      //       $('#mydata').slideToggle();
      //     });
      //   })
      
        
        
  


    const handleClick = () =>{
      const inp = document.getElementById('mydata');
      console.log(inp);

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
        
          <header className='hdr1'>
           <div className="container-fluid d-flex flex-wrap">
            <div className="row">
               <div className="col-xxl-12 col-xl-12 col-lg-12 col-12 demo">
               <nav className="navbar navbar-expand-sm  navbar">
                <div className="container-fluid">
                <Link  to='/'><a className="navbar-brand" href="#"><img src="image/logo.png" alt="logo" height={50} width={200}/></a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="spn1">Menu</span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav d-flex flex-wrap dome">
                   
                    <li className="nav-item">
                       <Link className="nav-link text-body" to='/home'>Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link text-body" to='/men'>Men</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link text-body" to='/women'>Women</Link>
                    </li>
                    <li className="nav-item baby-coll">
                       <Link className="nav-link text-body" to='/babycol'>Baby Collection</Link>
                    </li>
                    <li class="nav-item dropdown hvr-drop">
                       <Link className="nav-link text-body dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" to='/pages'>Page</Link>
 
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li className='drop-space'> <Link className="nav-link text-body " to='/droplogin'>Login</Link></li>
                        <li className='drop-space'> <Link className="nav-link text-body " to='/dropcart'>Cart</Link></li>
                        <li className='drop-space'> <Link className="nav-link text-body " to='/dropproduct'>Product Details</Link></li>
                        <li className='drop-space'> <Link className="nav-link text-body" to='/dropcheck'>Product Check</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown hvr-drop">
                       <Link className="nav-link text-body"   to='/blog'>Blog</Link>
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li className='drop-space'> <Link className="nav-link text-body " to='/blog'>Blog</Link></li>
                        <li className='drop-space'> <Link className="nav-link text-body " to='/element'>Element</Link></li>
                        <li className='drop-space'> <Link className="nav-link text-body " to='/blogdetails'>Blog Details</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link text-body " to='/contact'>Contact</Link>
                    </li>
                    
                    

                      
                      
                    </ul>
                    </div>
                </div>
                </nav>
               </div>
            </div>
            <div className="icons-head mt-4 col-lg-2 col-12">
            <i className="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
            <input className='hello' type="search" placeholder='Search Here' id='mydata'/>
            <Link to='/login'><i className="fa-regular fa-user"></i></Link>
            <Link to='/cart'><i className="fa-solid fa-cart-shopping icon-dark">
              <span>1</span>
            </i></Link>
          </div> 
            </div>            
          </header>
          

         
      
        
        </>
    );
}

export default Headermid;