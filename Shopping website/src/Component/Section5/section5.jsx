import React from 'react';
import './section5.css'

function Section(props) {
    const news = [
        {
            image: "image/blog1.jpg",
            tips: "Fashion Tips",
            heading: "What Curling Irons Are The Best Ones",
            para: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
            read: "Read More"
        },
        {
            image: "image/blog2.jpg",
            tips: "Fashion Tips",
            heading: "Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes",
            para: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
            read: "Read More"
        },
        {
            image: "image/blog3.jpg",
            tips: "Fashion Tips",
            heading: "What Curling Irons Are The Best Ones",
            para: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
            read: "Read More"
        }
    ]
    return (
        <>
        <section className='home-blog'>
            <div className="container">
                <div className="row">

                    <div className="tittle text-center">
                        <h1>Latest News</h1>
                    </div>
                    
                        {news.map((res,i)=>{
                            const{image,tips,heading,para,read}=res;
                            return(
                                <>
                                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-6 col-12 news-main">
                                    <div className="images">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="content-news">
                                        <span>{tips}</span>
                                        <h4>{heading}</h4>
                                        <p>{para}</p>
                                        <a href="#">{read}</a>
                                    </div>
                                  </div>
                                </>
                            )
                        })}
                    
                </div>
            </div>
            </section>
        </>
    );
}

export default Section;