import React from 'react';
import './category.css'

function Category(props) {
    const CategoryClick = () =>{
        const inp = document.getElementById('cate-Data');
        // const iconns = document.getElementsByClassName('fa-angle-down');
  
        if (inp.style.display == "block") 
        {
           inp.style.display = "none";
          //  iconns.style.transform = "rotate(180deg)";
        }
        else
        {
          inp.style.display = "block";
          // iconns.style.transform = "rotate(0deg)";
        }
      };
      const TypeClick = () =>{
        const inp = document.getElementById('type-Data');
        // const iconns = document.getElementById('cate-icon');
  
        if (inp.style.display == "block") 
        {
           inp.style.display = "none";
          //  iconns.classList.add('fa-angle-down');
        }
        else
        {
          inp.style.display = "block";
          // iconns.classList.remove('addIcon');
        }
      };
      const SizeClick = () =>{
        const inp = document.getElementById('size-Data');
        // const iconns = document.getElementById('cate-icon');
  
        if (inp.style.display == "block") 
        {
           inp.style.display = "none";
          //  iconns.classList.add('fa-angle-down');
        }
        else
        {
          inp.style.display = "block";
          // iconns.classList.remove('addIcon');
        }
      };
      const ColorClick = () =>{
        const inp = document.getElementById('color-Data');
        // const iconns = document.getElementById('cate-icon');
  
        if (inp.style.display == "block") 
        {
           inp.style.display = "none";
          //  iconns.classList.add('fa-angle-down');
        }
        else
        {
          inp.style.display = "block";
          // iconns.classList.remove('addIcon');
        }
      };
    const CategoryAPI = [
        {
            image:"image/latest5.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest6.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest7.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest8.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest6.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest1.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest2.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest3.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
        {
            image:"image/latest4.jpg",
            productname: "Cashmere Tank + Bag",
            newprice:"$98",
            oldprice:"$120",
            cart:"fa-solid fa-cart-plus",
            heart:"fa-regular fa-heart",
            search:"fa-solid fa-magnifying-glass-plus"
        },
    ]
    
    
    return (
        <>
           <div className="container">
            <div className="row">
                <div className="col-xxl-3 col-xl-3 col-md-3 col-10 border border-1 side-cate">
                    <div className="drop-list" onClick={CategoryClick}>
                        <span>Category</span>
                        <ul className='list' id='cate-Data'>
                            <li><b>Category</b></li>
                            <li>Category 1</li>
                            <li>Category 2</li>
                            <li>Category 3</li>
                            <li>Category 4</li>
                        </ul>
                    </div>

                    <div className="drop-list" onClick={TypeClick}>
                        <span>Type</span>
                        <ul className='list' id='type-Data'>
                            <li><b>Type</b></li>
                            <li>Type 1</li>
                            <li>Type 2</li>
                            <li>Type 3</li>
                            <li>Type 4</li>
                        </ul>
                    </div>

                    <div className="drop-list" onClick={SizeClick}>
                        <span>Size</span>
                        <ul className='list' id='size-Data'>
                            <li><b>Size</b></li>
                            <li>XXL</li>
                            <li>XL</li>
                            <li>LG</li>
                            <li>M</li>
                            <li>SM</li>
                        </ul>
                    </div>

                    <div className="drop-list" onClick={ColorClick}>
                        <span>Color</span>
                        <ul className='list' id='color-Data'>
                            <li><b>Color</b></li>
                            <li>Red</li>
                            <li>Green</li>
                            <li>Orange</li>
                            <li>Black</li>
                        </ul>
                    </div>
                    <div className="generes gen1">
                        <div className="gen-title">
                          <h4>Filter by Genres</h4>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something" />
                          <label class="form-check-label" for="check1">History</label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something" />
                          <label class="form-check-label" for="check1">Horror-Thriller</label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something"/>
                          <label class="form-check-label" for="check1">Love Stories</label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something"/>
                          <label class="form-check-label" for="check1">Science Fiction</label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something"/>
                          <label class="form-check-label" for="check1">Biography</label>
                        </div>
                    </div>  

                    <div className="generes gen2">
                        <div className="gen-title">
                          <h4>Filter by Brand</h4>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something" />
                          <label class="form-check-label" for="check1">Green Publication</label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something" required/>
                          <label class="form-check-label" for="check1">Anondo Publication</label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something"/>
                          <label class="form-check-label" for="check1">Rinku Publication</label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something"/>
                          <label class="form-check-label" for="check1">Sheba Publication</label>
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input generes-inp" id="check1" name="option1" value="something"/>
                          <label class="form-check-label" for="check1">Red Publication</label>
                        </div>


                        
                    </div>   
                 
                </div>
                <div className="col-xxl-9 col-xl-9 col-md-9 d-flex ">
                    <div className="row">
                    {CategoryAPI.map((res,i)=>{
                        const{image,productname,newprice,oldprice,cart,heart,search}=res;
                        return(
                            <div className='col-xxl-4 col-xl-4 col-md-6 col-11 imgdata-cate' key={i}>
                                    <img src={image} />
                                    <h3 className='text-center mt-3'>
                                        <a href="#">{productname}</a>
                                    </h3>
                                    <div className="price text-center mb-3">
                                        <span>{newprice}</span>
                                        <span><del>{oldprice}</del></span>
                                    </div>
                                    <div className="icons-cate">
                                        <a href="#"  className="text-center"><i class={cart}></i></a>
                                        <a href="#"  className="text-center"><i class={heart}></i></a>
                                        <a href="#"  className="text-center"><i class={search}></i></a>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
            </div>
           </div> 
        </>
    );
}

export default Category;