import React from 'react';
import Headerbottom from '../Headers/header_bottom';
import Headermid from '../Headers/header_mid';
import Headertop from '../Headers/header_top';
import Head from '../ProductCheckout/checkhead'
import Checkout from '../ProductCheckout/checkout';
import FooterTop from '../Footer/footer-top';
import FooterMid from '../Footer/footer-mid';

function Dropcheck(props) {
    return (
        <>
        <Headertop/>
        <Headermid/>
        <Headerbottom/>
        <Head/>
        <Checkout/>
        <FooterTop/>
        <FooterMid/>
        </>
    );
}

export default Dropcheck;