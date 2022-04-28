/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react"
import axios from 'axios';
import { NavLink, useParams } from "react-router-dom";
import { PATH } from "../../constants/API"
import Header from "../common/header";
import { useKeycloak } from "@react-keycloak/web";

function Category() {
    const categoryCode = useParams();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [category, setCategory] = useState(undefined);
    const [categoryLoading, setCategoryLoading] = useState(true);
    const [productPage, setProductPage] = useState(undefined);
    const [productPageLoading, setProductPageLoading] = useState(true);
    useEffect(
        () => {
            async function fetchData() {
                // You can await here
                setCategoriesLoading(true);
                try {
                    const response = await axios.get(PATH.API_ROOT_URL + PATH.API_CATALOG + "/categories");
                    setCategories(response.data);
                } catch (error) {
                    console.error(error.message);
                }
                setCategoriesLoading(false);
            }
            fetchData();
        }, []);
    useEffect(
        () => {
            async function fetchData() {
                // You can await here
                setCategoryLoading(true);
                try {
                    const response = await axios.get(PATH.API_ROOT_URL + PATH.API_CATALOG + "/categories/" + categoryCode.id);
                    setCategory(response.data);
                    console.log(response.data)
                } catch (error) {
                    console.error(error.message);
                }
                setCategoryLoading(false);
            }
            fetchData();
        }, [categoryCode.id]);
    useEffect(
        () => {
            async function fetchData() {
                // You can await here
                setProductPageLoading(true);
                try {
                    const response = await axios.get(PATH.API_ROOT_URL + PATH.API_CATALOG + "/products/category/" + categoryCode.id);
                    setProductPage(response.data);
                    console.log(response.data)
                } catch (error) {
                    console.error(error.message);
                }
                setProductPageLoading(false);
            }
            fetchData();
        }, [categoryCode.id]);

    return (
        <div>
            <div className="page-wrapper">
                <Header categories={categories}></Header>
                <main className="main">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{category != null ? category.name : ""}</li>
                            </ol>
                        </div>{/* End .container */}
                    </nav>{/* End .breadcrumb-nav */}
                    <div className="page-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-xl-4-5col">
                                    <div className="category-banners-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: false,
                                    &quot;responsive&quot;: {
                                        &quot;768&quot;: {
                                            &quot;nav&quot;: true
                                        }
                                    }
                                }">
                                        <div className="banner banner-poster">
                                            <a href="#">
                                                <img src="/assets/images/demos/demo-13/banners/banner-7.jpg" alt="Banner" />
                                            </a>
                                            <div className="banner-content banner-content-right">
                                                <h3 className="banner-subtitle"><a href="#">Amazing Value</a></h3>{/* End .banner-subtitle */}
                                                <h2 className="banner-title"><a href="#">High Performance 4K TVs</a></h2>{/* End .banner-title */}
                                                <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
                                            </div>{/* End .banner-content */}
                                        </div>{/* End .banner */}
                                        <div className="banner banner-poster">
                                            <a href="#">
                                                <img src="/assets/images/demos/demo-13/banners/banner-8.jpg" alt="Banner" />
                                            </a>
                                            <div className="banner-content">
                                                <h3 className="banner-subtitle"><a href="#">Weekend Deal</a></h3>{/* End .banner-subtitle */}
                                                <h2 className="banner-title"><a href="#">Apple &amp; Accessories</a></h2>{/* End .banner-title */}
                                                <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
                                            </div>{/* End .banner-content */}
                                        </div>{/* End .banner */}
                                    </div>{/* End .owl-carousel */}
                                    <div className="mb-3" />{/* End .mb-3 */}
                                    <div className="owl-carousel owl-simple owl-nav-align" data-toggle="owl" data-owl-options="{
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
                                            &quot;items&quot;:6,
                                            &quot;nav&quot;: true, 
                                            &quot;dots&quot;: false
                                        }
                                    }
                                }">
                                        <a href="#" className="brand">
                                            <img src="/assets/images/brands/2.png" alt="Brand Name" />
                                        </a>
                                        <a href="#" className="brand">
                                            <img src="/assets/images/brands/3.png" alt="Brand Name" />
                                        </a>
                                        <a href="#" className="brand">
                                            <img src="/assets/images/brands/4.png" alt="Brand Name" />
                                        </a>
                                        <a href="#" className="brand">
                                            <img src="/assets/images/brands/5.png" alt="Brand Name" />
                                        </a>
                                        <a href="#" className="brand">
                                            <img src="/assets/images/brands/6.png" alt="Brand Name" />
                                        </a>
                                        <a href="#" className="brand">
                                            <img src="/assets/images/brands/1.png" alt="Brand Name" />
                                        </a>
                                        <a href="#" className="brand">
                                            <img src="/assets/images/brands/2.png" alt="Brand Name" />
                                        </a>
                                    </div>{/* End .owl-carousel */}
                                    <div className="mb-3 mb-lg-5" />{/* End .mb-3 mb-lg-5 */}
                                    <div className="cat-blocks-container">
                                        <div className="row">
                                            {category != null && category.subCategories != null ? category.subCategories.map((item) => (
                                                <div className="col-6 col-md-4 col-lg-3">
                                                    <NavLink to={"/category/" + item.code} className="cat-block">
                                                        <figure>
                                                            <span>
                                                                {item.mediaList != null && item.mediaList.length > 0 &&
                                                                    <img src={item.mediaList[0].imgUrl} alt={item.mediaList[0].altText} />}
                                                            </span>
                                                        </figure>
                                                        <h3 className="cat-block-title">{item.name}</h3>
                                                    </NavLink>
                                                </div>
                                            )) : <div></div>}
                                        </div>{/* End .row */}
                                    </div>{/* End .cat-blocks-container */}
                                    <div className="mb-2" />{/* End .mb-2 */}
                                    <h2 className="title title-border">Featured Items</h2>{/* End .title */}
                                    <div className="owl-carousel owl-simple owl-nav-top carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: true, 
                                    &quot;dots&quot;: false,
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
                                        &quot;1200&quot;: {
                                            &quot;items&quot;:4
                                        }
                                    }
                                }">
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <a href="product.html">
                                                    <img src="/assets/images/demos/demo-13/products/product-7.jpg" alt="Product image" className="product-image" />
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
                                                    <img src="/assets/images/demos/demo-13/products/product-8.jpg" alt="Product image" className="product-image" />
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
                                                    <img src="/assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" className="product-image" />
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
                                                    <img src="/assets/images/demos/demo-13/products/product-10.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .product-body */}
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <figure className="product-media">
                                                <span className="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="/assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
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
                                    <div className="mb-4" />{/* End .mb-4 */}
                                    <div className="toolbox">
                                        <div className="toolbox-left">
                                            <div className="toolbox-info">
                                                {productPage != null ? "Tổng cộng " + productPage.totalItems + " mặt hàng" : ""}
                                            </div>{/* End .toolbox-info */}
                                        </div>{/* End .toolbox-left */}
                                        <div className="toolbox-right">
                                            <div className="toolbox-sort">
                                                <label htmlFor="sortby">Sort by:</label>
                                                <div className="select-custom">
                                                    <select name="sortby" id="sortby" className="form-control">
                                                        <option value="popularity" selected="selected">Most Popular</option>
                                                        <option value="rating">Most Rated</option>
                                                        <option value="date">Date</option>
                                                    </select>
                                                </div>
                                            </div>{/* End .toolbox-sort */}
                                        </div>{/* End .toolbox-right */}
                                    </div>{/* End .toolbox */}
                                    <div className="products mb-3">
                                        <div className="row">
                                            <div className="col-6 col-md-4 col-xl-3">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <span className="product-label label-new">New</span>
                                                        <a href="product.html">
                                                            <img src="/assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .col-sm-6 col-md-4 col-xl-3 */}
                                            <div className="col-6 col-md-4 col-xl-3">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <span className="product-label label-top">Top</span>
                                                        <a href="product.html">
                                                            <img src="/assets/images/demos/demo-13/products/product-7.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .col-sm-6 col-md-4 col-xl-3 */}
                                            <div className="col-6 col-md-4 col-xl-3">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <a href="product.html">
                                                            <img src="/assets/images/demos/demo-13/products/product-8.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .col-sm-6 col-md-4 col-xl-3 */}
                                            <div className="col-6 col-md-4 col-xl-3">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <span className="product-label label-new">New</span>
                                                        <a href="product.html">
                                                            <img src="/assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .col-sm-6 col-md-4 col-xl-3 */}
                                            <div className="col-6 col-md-4 col-xl-3">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <span className="product-label label-sale">Sale</span>
                                                        <a href="product.html">
                                                            <img src="/assets/images/demos/demo-13/products/product-10.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .col-sm-6 col-md-4 col-xl-3 */}
                                            <div className="col-6 col-md-4 col-xl-3">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <span className="product-label label-new">New</span>
                                                        <a href="product.html">
                                                            <img src="/assets/images/demos/demo-13/products/product-11.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .col-sm-6 col-md-4 col-xl-3 */}
                                            <div className="col-6 col-md-4 col-xl-3">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <a href="product.html">
                                                            <img src="/assets/images/demos/demo-13/products/product-12.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .col-sm-6 col-md-4 col-xl-3 */}
                                            <div className="col-6 col-md-4 col-xl-3">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <span className="product-label label-sale">Sale</span>
                                                        <a href="product.html">
                                                            <img src="/assets/images/demos/demo-13/products/product-13.jpg" alt="Product image" className="product-image" />
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
                                            </div>{/* End .col-sm-6 col-md-4 col-xl-3 */}
                                        </div>{/* End .row */}
                                    </div>{/* End .products */}
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                                                    <span aria-hidden="true"><i className="icon-long-arrow-left" /></span>Prev
                                                </a>
                                            </li>
                                            {/* {productPage != null ? productPage. } */}
                                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item-total">of 2</li>
                                            <li className="page-item">
                                                <a className="page-link page-link-next" href="#" aria-label="Next">
                                                    Next <span aria-hidden="true"><i className="icon-long-arrow-right" /></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>{/* End .col-lg-9 */}
                                <aside className="col-lg-3 col-xl-5col order-lg-first">
                                    <div className="sidebar sidebar-shop">
                                        <div className="widget widget-categories">
                                            <h3 className="widget-title">{category != null ? category.name : ""}</h3>{/* End .widget-title */}
                                            <div className="widget-body">
                                                <div className="accordion" id="widget-cat-acc">
                                                    {category != null && category.subCategories != null ?
                                                        category.subCategories.map((item) => (
                                                            <div className="acc-item">
                                                                {item.subCategories && item.subCategories.length > 0 ?
                                                                    <a className="collapsed" role="button" data-toggle="collapse" href={"#"+item.code} aria-expanded="false" aria-controls={item.code}>
                                                                        {item.name}
                                                                    </a> :
                                                                    <NavLink to={"/category/" + item.code}>
                                                                        {item.name}
                                                                    </NavLink>}
                                                                {item.subCategories && item.subCategories.length > 0 ?
                                                                    <div id={item.code} className="collapse show" data-parent="#widget-cat-acc">
                                                                        <div className="collapse-wrap">
                                                                            <ul>
                                                                                {item.subCategories.map((subCatRow) => (
                                                                                    <li><NavLink to={"/category/" + subCatRow.code}>{subCatRow.name}</NavLink></li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </div> : <div></div>}
                                                            </div>
                                                        )) : <div></div>
                                                    }
                                                </div>{/* End .accordion */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .widget */}
                                        <div className="widget">
                                            <h3 className="widget-title">Brands</h3>{/* End .widget-title */}
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-1" />
                                                            <label className="custom-control-label" htmlFor="brand-1">Next</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-2" />
                                                            <label className="custom-control-label" htmlFor="brand-2">River Island</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-3" />
                                                            <label className="custom-control-label" htmlFor="brand-3">Geox</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-4" />
                                                            <label className="custom-control-label" htmlFor="brand-4">New Balance</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-5" />
                                                            <label className="custom-control-label" htmlFor="brand-5">UGG</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-6" />
                                                            <label className="custom-control-label" htmlFor="brand-6">F&amp;F</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-7" />
                                                            <label className="custom-control-label" htmlFor="brand-7">Nike</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                </div>{/* End .filter-items */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .widget */}
                                        <div className="widget">
                                            <h3 className="widget-title">Price</h3>{/* End .widget-title */}
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="price-1" name="filter-price" />
                                                            <label className="custom-control-label" htmlFor="price-1">Under $25</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="price-2" name="filter-price" />
                                                            <label className="custom-control-label" htmlFor="price-2">$25 to $50</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="price-3" name="filter-price" />
                                                            <label className="custom-control-label" htmlFor="price-3">$50 to $100</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="price-4" name="filter-price" />
                                                            <label className="custom-control-label" htmlFor="price-4">$100 to $200</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="price-5" name="filter-price" />
                                                            <label className="custom-control-label" htmlFor="price-5">$200 &amp; Above</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                </div>{/* End .filter-items */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .widget */}
                                        <div className="widget">
                                            <h3 className="widget-title">Customer Rating</h3>{/* End .widget-title */}
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cus-rating-1" />
                                                            <label className="custom-control-label" htmlFor="cus-rating-1">
                                                                <span className="ratings-container">
                                                                    <span className="ratings">
                                                                        <span className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                                                                    </span>{/* End .ratings */}
                                                                    <span className="ratings-text">( 24 )</span>
                                                                </span>{/* End .rating-container */}
                                                            </label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cus-rating-2" />
                                                            <label className="custom-control-label" htmlFor="cus-rating-2">
                                                                <span className="ratings-container">
                                                                    <span className="ratings">
                                                                        <span className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                                                    </span>{/* End .ratings */}
                                                                    <span className="ratings-text">( 8 )</span>
                                                                </span>{/* End .rating-container */}
                                                            </label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cus-rating-3" />
                                                            <label className="custom-control-label" htmlFor="cus-rating-3">
                                                                <span className="ratings-container">
                                                                    <span className="ratings">
                                                                        <span className="ratings-val" style={{ width: '60%' }} />{/* End .ratings-val */}
                                                                    </span>{/* End .ratings */}
                                                                    <span className="ratings-text">( 5 )</span>
                                                                </span>{/* End .rating-container */}
                                                            </label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cus-rating-4" />
                                                            <label className="custom-control-label" htmlFor="cus-rating-4">
                                                                <span className="ratings-container">
                                                                    <span className="ratings">
                                                                        <span className="ratings-val" style={{ width: '40%' }} />{/* End .ratings-val */}
                                                                    </span>{/* End .ratings */}
                                                                    <span className="ratings-text">( 1 )</span>
                                                                </span>{/* End .rating-container */}
                                                            </label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cus-rating-5" />
                                                            <label className="custom-control-label" htmlFor="cus-rating-5">
                                                                <span className="ratings-container">
                                                                    <span className="ratings">
                                                                        <span className="ratings-val" style={{ width: '20%' }} />{/* End .ratings-val */}
                                                                    </span>{/* End .ratings */}
                                                                    <span className="ratings-text">( 3 )</span>
                                                                </span>{/* End .rating-container */}
                                                            </label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                </div>{/* End .filter-items */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .widget */}
                                        <div className="widget">
                                            <h3 className="widget-title">Colour</h3>{/* End .widget-title */}
                                            <div className="widget-body">
                                                <div className="filter-colors">
                                                    <a href="#" style={{ background: '#b87145' }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: '#f0c04a' }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: '#333333' }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" className="selected" style={{ background: '#cc3333' }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: '#3399cc' }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: '#669933' }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: '#f2719c' }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: '#ebebeb' }}><span className="sr-only">Color Name</span></a>
                                                </div>{/* End .filter-colors */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .widget */}
                                        <div className="widget widget-banner-sidebar">
                                            <div className="banner-sidebar-title">ad banner 218 x 430px</div>{/* End .ad-title */}
                                            <div className="banner-sidebar banner-overlay">
                                                <a href="#">
                                                    <img src="/assets/images/demos/demo-13/banners/banner-6.jpg" alt="banner" />
                                                </a>
                                            </div>{/* End .banner-ad */}
                                        </div>{/* End .widget */}
                                    </div>{/* End .sidebar sidebar-shop */}
                                </aside>{/* End .col-lg-3 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>{/* End .page-content */}
                    <div className="cta cta-horizontal cta-horizontal-box bg-primary">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="cta-title text-white">Join Our Newsletter</h3>{/* End .cta-title */}
                                    <p className="cta-desc text-white">Subcribe to get information about products and coupons</p>{/* End .cta-desc */}
                                </div>{/* End .col-lg-5 */}
                                <div className="col-lg-7">
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

            </div>
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
        </div>
    );
}
export default Category;