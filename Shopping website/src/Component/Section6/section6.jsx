import React from 'react';
import './section6.css'

function Section(props) {
    const icons = [
        {
            delivery: "image/services1.svg",
            head: "Fast & Free Delivery",
            para: "Free delivery on all orders"
        },
        {
            delivery: "image/services2.svg",
            head: "Secure Payment",
            para: "Free delivery on all orders"
        },
        {
            delivery: "image/services3.svg",
            head: "Money Back Guarantee",
            para: "Free delivery on all orders"
        },
        {
            delivery: "image/services4.svg",
            head: "Online Support",
            para: "Free delivery on all orders"
        }
    ]
    return (
        <>
           <section className='categories-area'>
            <div className="container">
                <div className="row">

                    {icons.map((res,i)=>{
                        const{delivery,head,para}=res;
                        return(
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 col-12 mt-3 icon-bdr">
                                <div className="img-logo text-center">
                                    <img src={delivery} alt="" />
                                </div>
                                <div className="img-about text-center">
                                    <h5>{head}</h5>
                                    <p>{para}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
           </section> 
        </>
    );
}

export default Section;