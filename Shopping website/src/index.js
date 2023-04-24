import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap5/src/css/bootstrap.min.css'
import 'bootstrap5/src/js/bootstrap.bundle.min.js'
// import 'jQuery/lib/node-jquery'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from './Component/Home/Home';
import Men from './Component/Men/men'
import Women from './Component/Women/women'
import BabyCollection from './Component/BabyColl/baby collection'
import Page from './Component/Pages/pages'
import DropCart from './Component/Pages/dropcart'
import DropLogin from './Component/Pages/droplogin'
import DropProduct from './Component/Pages/dropproduct'
import DropCheck from './Component/Pages/dropcheck'
import Blog from './Component/Blog/blog'
import Contact from './Component/Contact/contact'
import Login from './Component/Login&Signup/login'
import Signup from './Component/Login&Signup/signup'
import Cart from './Component/Cart/cart'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
        <Routes>
        
            <Route path='/' element={<App/>}></Route>
            <Route path='/home' element={<Home/>}></Route> 
            <Route path='/men' element={<Men/>}></Route>
            <Route path='/women' element={<Women/>}></Route>
            <Route path='/babycol' element={<BabyCollection/>}></Route>
            <Route path='/pages' element={<Page/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/droplogin' element={<DropLogin/>}></Route>
            <Route path='/dropcart' element={<DropCart/>}></Route>
            <Route path='/dropproduct' element={<DropProduct/>}></Route>
            <Route path='/dropcheck' element={<DropCheck/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
