import React from "react";
import OwlCarousel from 'react-owl-carousel';


function HomeBanner({ sliderArray }) {
    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        smartSpeed: 400,
        responsive: {
            0: {
                items: 1,
                nav: true,

            }
        },
    };
    console.log(sliderArray)
    return (

        sliderArray && sliderArray.length > 0 ?
            <OwlCarousel items={sliderArray.length}
                className="intro-slider owl-carousel owl-simple owl-nav-inside " {...options}
            >
                {sliderArray.map((item) => (
                    <div key={item.code} className="intro-slide" style={{ backgroundImage: "url(" + item.imgUrl + ")" }}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto offset-lg-3 intro-col">
                                    <h3 className="intro-subtitle">{item.altText}</h3>
                                    <h1 className="intro-title">{item.imgUrl} <br />Latest Model
                                        <span>
                                            <sup className="font-weight-light">from</sup>
                                            <span className="text-primary">$999<sup>,99</sup></span>
                                        </span>
                                    </h1>{/* End .intro-title */}
                                    <a href="category.html" className="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right" />
                                    </a>
                                </div>{/* End .col-auto offset-lg-3 */}
                            </div>{/* End .row */}
                        </div>{/* End .container intro-content */}
                    </div>
                ))}
            </OwlCarousel> :
            <span></span>);
}
export default HomeBanner;