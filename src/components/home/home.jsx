import { React, useState, useEffect } from "react"
import axios from 'axios';
import HomeBanner from "./components/banner";
import LoginForm from "../common/login-form";
import { PATH } from "../../constants/API"
import Header from "../common/header";
function Home() {   
    const [sliderLoading, setSliderLoading] = useState(true);
    const [sliderArray, setSliderArray] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    useEffect(async () => {

        setSliderLoading(true);
        try {
            const response = await axios.get(PATH.API_ROOT_URL + PATH.API_MEDIA + "/type/Slider");
            setSliderArray(response.data.mediaList);
        } catch (error) {
            console.error(error.message);
        }
        setSliderLoading(false);


    }, []);
    useEffect(async () => {

        setCategoriesLoading(true);
        try {
            const response = await axios.get(PATH.API_ROOT_URL + PATH.API_CATALOG + "/categories");
            setCategories(response.data);
        } catch (error) {
            console.error(error.message);
        }
        setCategoriesLoading(false);


    }, []);

    return (
        <div>
            <Header categories={categories}/>
            <div className="page-wrapper">
                <main className="main">
                    <div className="intro-slider-container">
                        {sliderLoading ? <span className="slider-loader"></span> : 
                        <HomeBanner sliderArray={sliderArray} />}
                    </div>
                    <div className="mb-4" />{/* End .mb-2 */}
                    <div className="container">
                        <h2 className="title text-center mb-2">Khám phá danh mục phổ biến</h2>{/* End .title */}
                        <div className="cat-blocks-container">
                            <div className="row">
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="category.html" className="cat-block">
                                        <figure>
                                            <span>
                                                <img src="assets/images/demos/demo-13/cats/1.jpg" alt="Category image" />
                                            </span>
                                        </figure>
                                        <h3 className="cat-block-title">Computer &amp; Laptop</h3>{/* End .cat-block-title */}
                                    </a>
                                </div>{/* End .col-sm-4 col-lg-2 */}
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="category.html" className="cat-block">
                                        <figure>
                                            <span>
                                                <img src="assets/images/demos/demo-13/cats/2.jpg" alt="Category image" />
                                            </span>
                                        </figure>
                                        <h3 className="cat-block-title">Lighting</h3>{/* End .cat-block-title */}
                                    </a>
                                </div>{/* End .col-sm-4 col-lg-2 */}
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="category.html" className="cat-block">
                                        <figure>
                                            <span>
                                                <img src="assets/images/demos/demo-13/cats/3.jpg" alt="Category image" />
                                            </span>
                                        </figure>
                                        <h3 className="cat-block-title">Smart Phones</h3>{/* End .cat-block-title */}
                                    </a>
                                </div>{/* End .col-sm-4 col-lg-2 */}
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="category.html" className="cat-block">
                                        <figure>
                                            <span>
                                                <img src="assets/images/demos/demo-13/cats/4.jpg" alt="Category image" />
                                            </span>
                                        </figure>
                                        <h3 className="cat-block-title">Televisions</h3>{/* End .cat-block-title */}
                                    </a>
                                </div>{/* End .col-sm-4 col-lg-2 */}
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="category.html" className="cat-block">
                                        <figure>
                                            <span>
                                                <img src="assets/images/demos/demo-13/cats/5.jpg" alt="Category image" />
                                            </span>
                                        </figure>
                                        <h3 className="cat-block-title">Cooking</h3>{/* End .cat-block-title */}
                                    </a>
                                </div>{/* End .col-sm-4 col-lg-2 */}
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="category.html" className="cat-block">
                                        <figure>
                                            <span>
                                                <img src="assets/images/demos/demo-13/cats/6.jpg" alt="Category image" />
                                            </span>
                                        </figure>
                                        <h3 className="cat-block-title">Furniture</h3>{/* End .cat-block-title */}
                                    </a>
                                </div>{/* End .col-sm-4 col-lg-2 */}
                            </div>{/* End .row */}
                        </div>{/* End .cat-blocks-container */}
                    </div>{/* End .container */}
                    <div className="mb-2" />{/* End .mb-2 */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="banner banner-overlay">
                                    <a href="#">
                                        <img src="assets/images/demos/demo-13/banners/banner-1.jpg" alt="Banner" />
                                    </a>
                                    <div className="banner-content">
                                        <h4 className="banner-subtitle text-white"><a href="#">Weekend Sale</a></h4>{/* End .banner-subtitle */}
                                        <h3 className="banner-title text-white"><a href="#">Lighting <br />&amp; Accessories <br /><span>25% off</span></a></h3>{/* End .banner-title */}
                                        <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
                                    </div>{/* End .banner-content */}
                                </div>{/* End .banner */}
                            </div>{/* End .col-lg-3 */}
                            <div className="col-sm-6 col-lg-3 order-lg-last">
                                <div className="banner banner-overlay">
                                    <a href="#">
                                        <img src="assets/images/demos/demo-13/banners/banner-3.jpg" alt="Banner" />
                                    </a>
                                    <div className="banner-content">
                                        <h4 className="banner-subtitle text-white"><a href="#">Smart Offer</a></h4>{/* End .banner-subtitle */}
                                        <h3 className="banner-title text-white"><a href="#">Anniversary <br />Special <br /><span>15% off</span></a></h3>{/* End .banner-title */}
                                        <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
                                    </div>{/* End .banner-content */}
                                </div>{/* End .banner */}
                            </div>{/* End .col-lg-3 */}
                            <div className="col-lg-6">
                                <div className="banner banner-overlay">
                                    <a href="#">
                                        <img src="assets/images/demos/demo-13/banners/banner-2.jpg" alt="Banner" />
                                    </a>
                                    <div className="banner-content">
                                        <h4 className="banner-subtitle text-white d-none d-sm-block"><a href="#">Amazing Value</a></h4>{/* End .banner-subtitle */}
                                        <h3 className="banner-title text-white"><a href="#">Clothes Trending <br />Spring Collection 2019 <br /><span>from $12,99</span></a></h3>{/* End .banner-title */}
                                        <a href="#" className="banner-link">Discover Now <i className="icon-long-arrow-right" /></a>
                                    </div>{/* End .banner-content */}
                                </div>{/* End .banner */}
                            </div>{/* End .col-lg-6 */}
                        </div>{/* End .row */}
                    </div>{/* End .container */}
                    <div className="mb-3" />{/* End .mb-3 */}
                    <div className="bg-light pt-3 pb-5">
                        <div className="container">
                            <div className="heading heading-flex heading-border mb-3">
                                <div className="heading-left">
                                    <h2 className="title">Hot Deals Products</h2>{/* End .title */}
                                </div>{/* End .heading-left */}
                                <div className="heading-right">
                                    <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="hot-all-link" data-toggle="tab" href="#hot-all-tab" role="tab" aria-controls="hot-all-tab" aria-selected="true">All</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="hot-elec-link" data-toggle="tab" href="#hot-elec-tab" role="tab" aria-controls="hot-elec-tab" aria-selected="false">Electronics</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="hot-furn-link" data-toggle="tab" href="#hot-furn-tab" role="tab" aria-controls="hot-furn-tab" aria-selected="false">Furniture</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="hot-clot-link" data-toggle="tab" href="#hot-clot-tab" role="tab" aria-controls="hot-clot-tab" aria-selected="false">Clothes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="hot-acc-link" data-toggle="tab" href="#hot-acc-tab" role="tab" aria-controls="hot-acc-tab" aria-selected="false">Accessories</a>
                                        </li>
                                    </ul>
                                </div>{/* End .heading-right */}
                            </div>{/* End .heading */}
                            <div className="tab-content tab-content-carousel">
                                <div className="tab-pane p-0 fade show active" id="hot-all-tab" role="tabpanel" aria-labelledby="hot-all-link">
                                    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                          &quot;nav&quot;: false, 
                                          &quot;dots&quot;: true,
                                          &quot;margin&quot;: 20,
                                          &quot;loop&quot;: false,
                                          &quot;responsive&quot;: {
                                              &quot;0&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;480&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;768&quot;: {
                                                  &quot;items&quot;:3
                                              },
                                              &quot;992&quot;: {
                                                  &quot;items&quot;:4
                                              },
                                              &quot;1280&quot;: {
                                                  &quot;items&quot;:5,
                                                  &quot;nav&quot;: true
                                              }
                                          }
                                      }">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$251.99</span>
                                                    <span className="old-price">Was $290.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 2 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Electronics</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$179.99</span>
                                                    <span className="old-price">Was $199.99</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$3.050.00</span>
                                                    <span className="old-price">Was $3.200.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothes</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$240.00</span>
                                                    <span className="old-price">Was $310.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Electronics</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$1699.99</span>
                                                    <span className="old-price">Was $1999.99</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 10 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Appliances</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    $399.00
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 12 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                    </div>{/* End .owl-carousel */}
                                </div>{/* .End .tab-pane */}
                                <div className="tab-pane p-0 fade" id="hot-elec-tab" role="tabpanel" aria-labelledby="hot-elec-link">
                                    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                          &quot;nav&quot;: false, 
                                          &quot;dots&quot;: true,
                                          &quot;margin&quot;: 20,
                                          &quot;loop&quot;: false,
                                          &quot;responsive&quot;: {
                                              &quot;0&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;480&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;768&quot;: {
                                                  &quot;items&quot;:3
                                              },
                                              &quot;992&quot;: {
                                                  &quot;items&quot;:4
                                              },
                                              &quot;1280&quot;: {
                                                  &quot;items&quot;:5,
                                                  &quot;nav&quot;: true
                                              }
                                          }
                                      }">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothes</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$240.00</span>
                                                    <span className="old-price">Was $310.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$251.99</span>
                                                    <span className="old-price">Was $290.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 2 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Electronics</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$179.99</span>
                                                    <span className="old-price">Was $199.99</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$3.050.00</span>
                                                    <span className="old-price">Was $3.200.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Electronics</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$1699.99</span>
                                                    <span className="old-price">Was $1999.99</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 10 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                    </div>{/* End .owl-carousel */}
                                </div>{/* .End .tab-pane */}
                                <div className="tab-pane p-0 fade" id="hot-furn-tab" role="tabpanel" aria-labelledby="hot-furn-link">
                                    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                          &quot;nav&quot;: false, 
                                          &quot;dots&quot;: true,
                                          &quot;margin&quot;: 20,
                                          &quot;loop&quot;: false,
                                          &quot;responsive&quot;: {
                                              &quot;0&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;480&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;768&quot;: {
                                                  &quot;items&quot;:3
                                              },
                                              &quot;992&quot;: {
                                                  &quot;items&quot;:4
                                              },
                                              &quot;1280&quot;: {
                                                  &quot;items&quot;:5,
                                                  &quot;nav&quot;: true
                                              }
                                          }
                                      }">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$3.050.00</span>
                                                    <span className="old-price">Was $3.200.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Electronics</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$1699.99</span>
                                                    <span className="old-price">Was $1999.99</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 10 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Appliances</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    $399.00
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 12 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothes</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$240.00</span>
                                                    <span className="old-price">Was $310.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$251.99</span>
                                                    <span className="old-price">Was $290.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 2 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Electronics</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$179.99</span>
                                                    <span className="old-price">Was $199.99</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                    </div>{/* End .owl-carousel */}
                                </div>{/* .End .tab-pane */}
                                <div className="tab-pane p-0 fade" id="hot-clot-tab" role="tabpanel" aria-labelledby="hot-clot-link">
                                    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                          &quot;nav&quot;: false, 
                                          &quot;dots&quot;: true,
                                          &quot;margin&quot;: 20,
                                          &quot;loop&quot;: false,
                                          &quot;responsive&quot;: {
                                              &quot;0&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;480&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;768&quot;: {
                                                  &quot;items&quot;:3
                                              },
                                              &quot;992&quot;: {
                                                  &quot;items&quot;:4
                                              },
                                              &quot;1280&quot;: {
                                                  &quot;items&quot;:5,
                                                  &quot;nav&quot;: true
                                              }
                                          }
                                      }">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$251.99</span>
                                                    <span className="old-price">Was $290.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 2 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$3.050.00</span>
                                                    <span className="old-price">Was $3.200.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothes</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$240.00</span>
                                                    <span className="old-price">Was $310.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Electronics</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$179.99</span>
                                                    <span className="old-price">Was $199.99</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                    </div>{/* End .owl-carousel */}
                                </div>{/* .End .tab-pane */}
                                <div className="tab-pane p-0 fade" id="hot-acc-tab" role="tabpanel" aria-labelledby="hot-acc-link">
                                    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                          &quot;nav&quot;: false, 
                                          &quot;dots&quot;: true,
                                          &quot;margin&quot;: 20,
                                          &quot;loop&quot;: false,
                                          &quot;responsive&quot;: {
                                              &quot;0&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;480&quot;: {
                                                  &quot;items&quot;:2
                                              },
                                              &quot;768&quot;: {
                                                  &quot;items&quot;:3
                                              },
                                              &quot;992&quot;: {
                                                  &quot;items&quot;:4
                                              },
                                              &quot;1280&quot;: {
                                                  &quot;items&quot;:5,
                                                  &quot;nav&quot;: true
                                              }
                                          }
                                      }">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Appliances</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    $399.00
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 12 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$251.99</span>
                                                    <span className="old-price">Was $290.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 2 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Electronics</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$1699.99</span>
                                                    <span className="old-price">Was $1999.99</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 10 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Furniture</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$3.050.00</span>
                                                    <span className="old-price">Was $3.200.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div>{/* End .product-action-vertical */}
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div>{/* End .product-action */}
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothes</a>
                                                </div>{/* End .product-cat */}
                                                <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">$240.00</span>
                                                    <span className="old-price">Was $310.00</span>
                                                </div>{/* End .product-price */}
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>{/* End .rating-container */}
                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{ background: '#b58555' }}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{ background: '#93a6b0' }}><span className="sr-only">Color name</span></a>
                                                </div>{/* End .product-nav */}
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                    </div>{/* End .owl-carousel */}
                                </div>{/* .End .tab-pane */}
                            </div>{/* End .tab-content */}
                        </div>{/* End .container */}
                    </div>{/* End .bg-light pt-5 pb-5 */}
                    <div className="mb-3" />{/* End .mb-3 */}
                    <div className="container electronics">
                        <div className="heading heading-flex heading-border mb-3">
                            <div className="heading-left">
                                <h2 className="title">Electronics</h2>{/* End .title */}
                            </div>{/* End .heading-left */}
                            <div className="heading-right">
                                <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="elec-new-link" data-toggle="tab" href="#elec-new-tab" role="tab" aria-controls="elec-new-tab" aria-selected="true">New</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="elec-featured-link" data-toggle="tab" href="#elec-featured-tab" role="tab" aria-controls="elec-featured-tab" aria-selected="false">Featured</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="elec-best-link" data-toggle="tab" href="#elec-best-tab" role="tab" aria-controls="elec-best-tab" aria-selected="false">Best Seller</a>
                                    </li>
                                </ul>
                            </div>{/* End .heading-right */}
                        </div>{/* End .heading */}
                        <div className="tab-content tab-content-carousel">
                            <div className="tab-pane p-0 fade show active" id="elec-new-tab" role="tabpanel" aria-labelledby="elec-new-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Appliances</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $399.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 12 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-top">Top</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-7.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Laptops</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $1,199.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-8.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Audio</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $79.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Tablets</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $899.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#edd2c8' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#eaeaec' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-10.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Cell Phone</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">$350.00</span>
                                                <span className="old-price">Was $410.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#eaeaec' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane p-0 fade" id="elec-featured-tab" role="tabpanel" aria-labelledby="elec-featured-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Tablets</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $899.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#edd2c8' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#eaeaec' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-10.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Cell Phone</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $899.99
                                                <span className="new-price">$350.00</span>
                                                <span className="old-price">Was $410.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#eaeaec' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-8.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Audio</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $79.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-top">Top</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-7.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Laptops</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $1,199.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane p-0 fade" id="elec-best-tab" role="tabpanel" aria-labelledby="elec-best-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-top">Top</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-7.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Laptops</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $1,199.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-8.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Audio</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $79.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Appliances</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $399.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 12 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-10.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Cell Phone</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $899.99
                                                <span className="new-price">$350.00</span>
                                                <span className="old-price">Was $410.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#eaeaec' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Tablets</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $899.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#edd2c8' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#eaeaec' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                        </div>{/* End .tab-content */}
                    </div>{/* End .container */}
                    <div className="mb-3" />{/* End .mb-3 */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner banner-overlay banner-overlay-light">
                                    <a href="#">
                                        <img src="assets/images/demos/demo-13/banners/banner-4.jpg" alt="Banner" />
                                    </a>
                                    <div className="banner-content">
                                        <h4 className="banner-subtitle d-none d-sm-block"><a href="#">Spring Sale is Coming</a></h4>{/* End .banner-subtitle */}
                                        <h3 className="banner-title"><a href="#">All Smart Watches <br />Discount <br /><span className="text-primary">15% off</span></a></h3>{/* End .banner-title */}
                                        <a href="#" className="banner-link banner-link-dark">Discover Now <i className="icon-long-arrow-right" /></a>
                                    </div>{/* End .banner-content */}
                                </div>{/* End .banner */}
                            </div>{/* End .col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="banner banner-overlay">
                                    <a href="#">
                                        <img src="assets/images/demos/demo-13/banners/banner-5.png" alt="Banner" />
                                    </a>
                                    <div className="banner-content">
                                        <h4 className="banner-subtitle text-white  d-none d-sm-block"><a href="#">Amazing Value</a></h4>{/* End .banner-subtitle */}
                                        <h3 className="banner-title text-white"><a href="#">Headphones Trending <br />JBL Harman <br /><span>from $59,99</span></a></h3>{/* End .banner-title */}
                                        <a href="#" className="banner-link">Discover Now <i className="icon-long-arrow-right" /></a>
                                    </div>{/* End .banner-content */}
                                </div>{/* End .banner */}
                            </div>{/* End .col-lg-6 */}
                        </div>{/* End .row */}
                    </div>{/* End .container */}
                    <div className="mb-1" />{/* End .mb-1 */}
                    <div className="container furniture">
                        <div className="heading heading-flex heading-border mb-3">
                            <div className="heading-left">
                                <h2 className="title">Furniture</h2>{/* End .title */}
                            </div>{/* End .heading-left */}
                            <div className="heading-right">
                                <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="furn-new-link" data-toggle="tab" href="#furn-new-tab" role="tab" aria-controls="furn-new-tab" aria-selected="true">New</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="furn-featured-link" data-toggle="tab" href="#furn-featured-tab" role="tab" aria-controls="furn-featured-tab" aria-selected="false">Featured</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="furn-best-link" data-toggle="tab" href="#furn-best-tab" role="tab" aria-controls="furn-best-tab" aria-selected="false">Best Seller</a>
                                    </li>
                                </ul>
                            </div>{/* End .heading-right */}
                        </div>{/* End .heading */}
                        <div className="tab-content tab-content-carousel">
                            <div className="tab-pane p-0 fade show active" id="furn-new-tab" role="tabpanel" aria-labelledby="furn-new-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-11.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Tables</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Block Side Table/Trolley</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $229.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 12 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#e2e2e2' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-12.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Sofas</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Roots Sofa Bed</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $1,199.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-13.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Lighting</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Carronade Large Suspension Lamp</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">$892.00</span>
                                                <span className="old-price">Was $939.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#dddad5' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#825a45' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-14.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Chairs</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Wingback Chair</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $210.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '40%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#999999' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#cc9999' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-15.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Chairs</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Flow Slim Armchair</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">$737,00</span>
                                                <span className="old-price">Was $820.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#877666' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane p-0 fade" id="furn-featured-tab" role="tabpanel" aria-labelledby="furn-featured-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-13.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Lighting</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Carronade Large Suspension Lamp</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">$892.00</span>
                                                <span className="old-price">Was $939.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#dddad5' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#825a45' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-14.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Chairs</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Wingback Chair</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $210.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '40%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#999999' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#cc9999' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-11.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Tables</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Block Side Table/Trolley</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $229.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 12 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#e2e2e2' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-15.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Chairs</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Flow Slim Armchair</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">$737,00</span>
                                                <span className="old-price">Was $820.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#877666' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-12.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Sofas</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Roots Sofa Bed</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $1,199.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane p-0 fade" id="furn-best-tab" role="tabpanel" aria-labelledby="furn-best-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-12.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Sofas</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Roots Sofa Bed</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $1,199.99
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-13.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Lighting</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Carronade Large Suspension Lamp</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">$892.00</span>
                                                <span className="old-price">Was $939.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#dddad5' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#825a45' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-14.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Chairs</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Wingback Chair</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $210.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '40%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#999999' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#cc9999' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-15.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Chairs</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Flow Slim Armchair</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">$737,00</span>
                                                <span className="old-price">Was $820.00</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#877666' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                        </div>{/* End .tab-content */}
                    </div>{/* End .container */}
                    <div className="mb-3" />{/* End .mb-3 */}
                    <div className="container clothing ">
                        <div className="heading heading-flex heading-border mb-3">
                            <div className="heading-left">
                                <h2 className="title">Clothing &amp; Apparel</h2>{/* End .title */}
                            </div>{/* End .heading-left */}
                            <div className="heading-right">
                                <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="clot-new-link" data-toggle="tab" href="#clot-new-tab" role="tab" aria-controls="clot-new-tab" aria-selected="true">New</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="clot-featured-link" data-toggle="tab" href="#clot-featured-tab" role="tab" aria-controls="clot-featured-tab" aria-selected="false">Featured</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="clot-best-link" data-toggle="tab" href="#clot-best-tab" role="tab" aria-controls="clot-best-tab" aria-selected="false">Best Seller</a>
                                    </li>
                                </ul>
                            </div>{/* End .heading-right */}
                        </div>{/* End .heading */}
                        <div className="tab-content tab-content-carousel">
                            <div className="tab-pane p-0 fade show active" id="clot-new-tab" role="tabpanel" aria-labelledby="clot-new-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-16.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Shoes</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Beige faux suede runner  trainers</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $64.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 12 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-17.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Accessories</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Black boucle check scarf</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $36.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-18.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">T-Shirts</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Red stripe tie front shirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $56.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#dddad5' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#825a45' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-19.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Bags</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Triple compartment  cross body bag</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $64.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#f1f1f1' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-20.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Shirts</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Oxford grandad shirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $44.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 3 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#b8b8b8' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#ebebeb' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane p-0 fade" id="clot-featured-tab" role="tabpanel" aria-labelledby="clot-featured-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-18.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">T-Shirts</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Red stripe tie front shirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $56.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#dddad5' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#825a45' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-19.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Bags</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Triple compartment  cross body bag</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $64.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#f1f1f1' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-16.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Shoes</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Beige faux suede runner  trainers</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $64.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 12 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-20.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Shirts</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Oxford grandad shirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $44.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 3 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#b8b8b8' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#ebebeb' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-17.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Accessories</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Black boucle check scarf</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $36.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane p-0 fade" id="clot-best-tab" role="tabpanel" aria-labelledby="clot-best-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                      &quot;nav&quot;: false, 
                                      &quot;dots&quot;: true,
                                      &quot;margin&quot;: 20,
                                      &quot;loop&quot;: false,
                                      &quot;responsive&quot;: {
                                          &quot;0&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;480&quot;: {
                                              &quot;items&quot;:2
                                          },
                                          &quot;768&quot;: {
                                              &quot;items&quot;:3
                                          },
                                          &quot;992&quot;: {
                                              &quot;items&quot;:4
                                          },
                                          &quot;1280&quot;: {
                                              &quot;items&quot;:5,
                                              &quot;nav&quot;: true
                                          }
                                      }
                                  }">
                                    <div className="product">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-17.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Accessories</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Black boucle check scarf</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $36.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 10 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-20.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Shirts</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Oxford grandad shirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $44.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 3 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#b8b8b8' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#ebebeb' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-19.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Bags</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Triple compartment  cross body bag</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $64.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#f1f1f1' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-13/products/product-18.jpg" alt="Product image" className="product-image" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">T-Shirts</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Red stripe tie front shirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $56.00
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 6 Reviews )</span>
                                            </div>{/* End .rating-container */}
                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{ background: '#dddad5' }}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{ background: '#825a45' }}><span className="sr-only">Color name</span></a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                        </div>{/* End .tab-content */}
                    </div>{/* End .container */}
                    <div className="mb-3" />{/* End .mb-3 */}
                    <div className="container">
                        <h2 className="title title-border mb-5">Shop by Brands</h2>{/* End .title */}
                        <div className="owl-carousel mb-5 owl-simple" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 30,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;420&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;600&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;900&quot;: {
                                      &quot;items&quot;:5
                                  },
                                  &quot;1024&quot;: {
                                      &quot;items&quot;:6
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:6,
                                      &quot;nav&quot;: true,
                                      &quot;dots&quot;: false
                                  }
                              }
                          }">
                            <a href="#" className="brand">
                                <img src="assets/images/brands/1.png" alt="Brand Name" />
                            </a>
                            <a href="#" className="brand">
                                <img src="assets/images/brands/2.png" alt="Brand Name" />
                            </a>
                            <a href="#" className="brand">
                                <img src="assets/images/brands/3.png" alt="Brand Name" />
                            </a>
                            <a href="#" className="brand">
                                <img src="assets/images/brands/4.png" alt="Brand Name" />
                            </a>
                            <a href="#" className="brand">
                                <img src="assets/images/brands/5.png" alt="Brand Name" />
                            </a>
                            <a href="#" className="brand">
                                <img src="assets/images/brands/6.png" alt="Brand Name" />
                            </a>
                            <a href="#" className="brand">
                                <img src="assets/images/brands/7.png" alt="Brand Name" />
                            </a>
                        </div>{/* End .owl-carousel */}
                    </div>{/* End .container */}
                    <div className="cta cta-horizontal cta-horizontal-box bg-primary">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-2xl-5col">
                                    <h3 className="cta-title text-white">Join Our Newsletter</h3>{/* End .cta-title */}
                                    <p className="cta-desc text-white">Subcribe to get information about products and coupons</p>{/* End .cta-desc */}
                                </div>{/* End .col-lg-5 */}
                                <div className="col-3xl-5col">
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-white-2" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                                            </div>{/* .End .input-group-append */}
                                        </div>{/* .End .input-group */}
                                    </form>
                                </div>{/* End .col-lg-7 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>{/* End .cta */}
                </main>{/* End .main */}
            </div>{/* End .page-wrapper */}
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
            {/* Mobile Menu */}
            <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
            <div className="mobile-menu-container mobile-menu-light">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close" /></span>
                    <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                    </form>
                    <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
                            <nav className="mobile-nav">
                                <ul className="mobile-menu">
                                    <li className="active">
                                        <a href="index.html">Home</a>
                                        <ul>
                                            <li><a href="index-1.html">01 - furniture store</a></li>
                                            <li><a href="index-2.html">02 - furniture store</a></li>
                                            <li><a href="index-3.html">03 - electronic store</a></li>
                                            <li><a href="index-4.html">04 - electronic store</a></li>
                                            <li><a href="index-5.html">05 - fashion store</a></li>
                                            <li><a href="index-6.html">06 - fashion store</a></li>
                                            <li><a href="index-7.html">07 - fashion store</a></li>
                                            <li><a href="index-8.html">08 - fashion store</a></li>
                                            <li><a href="index-9.html">09 - fashion store</a></li>
                                            <li><a href="index-10.html">10 - shoes store</a></li>
                                            <li><a href="index-11.html">11 - furniture simple store</a></li>
                                            <li><a href="index-12.html">12 - fashion simple store</a></li>
                                            <li><a href="index-13.html">13 - market</a></li>
                                            <li><a href="index-14.html">14 - market fullwidth</a></li>
                                            <li><a href="index-15.html">15 - lookbook 1</a></li>
                                            <li><a href="index-16.html">16 - lookbook 2</a></li>
                                            <li><a href="index-17.html">17 - fashion store</a></li>
                                            <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
                                            <li><a href="index-19.html">19 - games store</a></li>
                                            <li><a href="index-20.html">20 - book store</a></li>
                                            <li><a href="index-21.html">21 - sport store</a></li>
                                            <li><a href="index-22.html">22 - tools store</a></li>
                                            <li><a href="index-23.html">23 - fashion left navigation store</a></li>
                                            <li><a href="index-24.html">24 - extreme sport store</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="category.html">Shop</a>
                                        <ul>
                                            <li><a href="category-list.html">Shop List</a></li>
                                            <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                            <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                            <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                            <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                            <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                            <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                            <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="#">Lookbook</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="product.html" className="sf-with-ul">Product</a>
                                        <ul>
                                            <li><a href="product.html">Default</a></li>
                                            <li><a href="product-centered.html">Centered</a></li>
                                            <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                            <li><a href="product-gallery.html">Gallery</a></li>
                                            <li><a href="product-sticky.html">Sticky Info</a></li>
                                            <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                            <li><a href="product-fullwidth.html">Full Width</a></li>
                                            <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li>
                                                <a href="about.html">About</a>
                                                <ul>
                                                    <li><a href="about.html">About 01</a></li>
                                                    <li><a href="about-2.html">About 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                                <ul>
                                                    <li><a href="contact.html">Contact 01</a></li>
                                                    <li><a href="contact-2.html">Contact 02</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="faq.html">FAQs</a></li>
                                            <li><a href="404.html">Error 404</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Classic</a></li>
                                            <li><a href="blog-listing.html">Listing</a></li>
                                            <li>
                                                <a href="#">Grid</a>
                                                <ul>
                                                    <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                    <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                    <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                    <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Masonry</a>
                                                <ul>
                                                    <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                    <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                    <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                    <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Mask</a>
                                                <ul>
                                                    <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                                    <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Single Post</a>
                                                <ul>
                                                    <li><a href="single.html">Default with sidebar</a></li>
                                                    <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                                    <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="elements-list.html">Elements</a>
                                        <ul>
                                            <li><a href="elements-products.html">Products</a></li>
                                            <li><a href="elements-typography.html">Typography</a></li>
                                            <li><a href="elements-titles.html">Titles</a></li>
                                            <li><a href="elements-banners.html">Banners</a></li>
                                            <li><a href="elements-product-category.html">Product Category</a></li>
                                            <li><a href="elements-video-banners.html">Video Banners</a></li>
                                            <li><a href="elements-buttons.html">Buttons</a></li>
                                            <li><a href="elements-accordions.html">Accordions</a></li>
                                            <li><a href="elements-tabs.html">Tabs</a></li>
                                            <li><a href="elements-testimonials.html">Testimonials</a></li>
                                            <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                                            <li><a href="elements-portfolio.html">Portfolio</a></li>
                                            <li><a href="elements-cta.html">Call to Action</a></li>
                                            <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>{/* End .mobile-nav */}
                        </div>{/* .End .tab-pane */}
                        <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                            <nav className="mobile-cats-nav">
                                <ul className="mobile-cats-menu">
                                    <li><a className="mobile-cats-lead" href="#">Daily offers</a></li>
                                    <li><a className="mobile-cats-lead" href="#">Gift Ideas</a></li>
                                    <li><a href="#">Beds</a></li>
                                    <li><a href="#">Lighting</a></li>
                                    <li><a href="#">Sofas &amp; Sleeper sofas</a></li>
                                    <li><a href="#">Storage</a></li>
                                    <li><a href="#">Armchairs &amp; Chaises</a></li>
                                    <li><a href="#">Decoration </a></li>
                                    <li><a href="#">Kitchen Cabinets</a></li>
                                    <li><a href="#">Coffee &amp; Tables</a></li>
                                    <li><a href="#">Outdoor Furniture </a></li>
                                </ul>{/* End .mobile-cats-menu */}
                            </nav>{/* End .mobile-cats-nav */}
                        </div>{/* .End .tab-pane */}
                    </div>{/* End .tab-content */}
                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
                    </div>{/* End .social-icons */}
                </div>{/* End .mobile-menu-wrapper */}
            </div>{/* End .mobile-menu-container */}
            <LoginForm></LoginForm>
            <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="row no-gutters bg-white newsletter-popup-content">
                            <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                                <div className="banner-content text-center">
                                    <img src="assets/images/popup/newsletter/logo.png" className="logo" alt="logo" width={60} height={15} />
                                    <h2 className="banner-title">get <span>25<light>%</light></span> off</h2>
                                    <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products.</p>
                                    <form action="#">
                                        <div className="input-group input-group-round">
                                            <input type="email" className="form-control form-control-white" placeholder="Your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit"><span>go</span></button>
                                            </div>{/* .End .input-group-append */}
                                        </div>{/* .End .input-group */}
                                    </form>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                        <label className="custom-control-label" htmlFor="register-policy-2">Do not show this popup again</label>
                                    </div>{/* End .custom-checkbox */}
                                </div>
                            </div>
                            <div className="col-xl-2-5col col-lg-5 ">
                                <img src="assets/images/popup/newsletter/img-1.jpg" className="newsletter-img" alt="newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Home;