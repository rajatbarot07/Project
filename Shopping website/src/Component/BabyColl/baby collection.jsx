import React from 'react';
import Headertop from '../Headers/header_top';
import Headermid from '../Headers/header_mid';
import Headerbottom from '../Headers/header_bottom';
import Category from '../Category/category';
import Head from '../Category/head';
import Footertop from '../Footer/footer-top';
import Footermid from '../Footer/footer-mid';
import { useState, useEffect } from 'react'

function Men(props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
    return (
        <>
            {loading ?(
              <div class="loader mx-auto"></div>  
             ):(
                <div>
                <Headertop/>
                <Headermid/>
                <Headerbottom/>
                <Head/>
                <Category/> 
                <Footertop/>
                <Footermid/>
                </div>
                )}
        </>
    );
}

export default Men;