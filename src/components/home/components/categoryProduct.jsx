import { React, useState, useEffect } from "react"
import OwlCarousel from "react-owl-carousel";
import axios from 'axios';
import { PATH } from "../../../constants/API";
import { NavLink } from "react-router-dom";
function CategoryProduct({ category }) {
    const options = {
        margin: 20,
        responsiveClass: true,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1280: {
                items: 5,
                nav: true
            }
        },
    };
    const [tabActive,setTabActive] = useState(false);
    const [discoveryNewProductLoading, setDiscoveryNewProductLoading] = useState(true);
    const [discoveryNewProduct, setDiscoveryNewProduct] = useState([]);
    const [discoveryTopSellProductLoading, setDiscoveryTopSellProductLoading] = useState(true);
    const [discoveryTopSellProduct, setDiscoveryTopSellProduct] = useState([]);
    const handleTabActive = (active) => {
        setTabActive(active)
    } 
    useEffect(
        () => {
            async function fetchData() {
                setDiscoveryNewProductLoading(true);
                try {
                    const response = await axios.post(PATH.API_ROOT_URL + PATH.API_SEARCH + "/product/search", {
                        productSearch: {
                            fields: ["all"],
                            searchTerm: "",
                            page: 0,
                            size: 6,
                            sortBy: "createTime",
                            order: "DESC"
                        },
                        optionalSearchRequestDto:
                            [
                                {
                                    fields: ["categoriesCode"],
                                    searchTerm: category.code
                                }
                            ],
                        optionalRangeSearchRequestDto:
                            []
                    });

                    setDiscoveryNewProduct(response.data.products);
                } catch (error) {
                    console.error(error.message);
                }
                setDiscoveryNewProductLoading(false);
            }
            fetchData();
        }, [category.code]);
    useEffect(
        () => {
            async function fetchData() {
                setDiscoveryTopSellProductLoading(true);
                try {
                    const response = await axios.post(PATH.API_ROOT_URL + PATH.API_SEARCH + "/product/search", {
                        productSearch: {
                            fields: ["all"],
                            searchTerm: "",
                            page: 0,
                            size: 6,
                            sortBy: "sales",
                            order: "DESC"
                        },
                        optionalSearchRequestDto:
                            [
                                {
                                    fields: ["categoriesCode"],
                                    searchTerm: category.code
                                }
                            ],
                        optionalRangeSearchRequestDto: []
                    });

                    setDiscoveryTopSellProduct(response.data.products);
                } catch (error) {
                    console.error(error.message);
                }
                setDiscoveryTopSellProductLoading(false);
            }
            fetchData();
        }, [category.code]);

    return (
        category && <div className="container">
            <div className="heading heading-flex heading-border mb-3">
                <div className="heading-left">
                    <h2 className="title">{category.name}</h2>{/* End .title */}
                </div>{/* End .heading-left */}
                <div className="heading-right">
                    <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a onClick={() => handleTabActive(false)} className="nav-link active" id={category.code+"-new-link"} data-toggle="tab" href={category.code+"-new-tab"} role="tab" aria-controls={category.code+"-new-tab"} aria-selected="true">Mới</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => handleTabActive(true)} className="nav-link" id={category.code+"-best-link"} data-toggle="tab" href={category.code+"-best-tab"} role="tab" aria-controls={category.code+"-best-tab"} aria-selected="false">Bán chạy</a>
                        </li>
                    </ul>
                </div>{/* End .heading-right */}
            </div>{/* End .heading */}
            <div className="tab-content tab-content-carousel">
                <div className={`tab-pane p-0 fade ${tabActive?"fade":"show active"}`} id={category.code+"-new-tab"} role="tabpanel" aria-labelledby={category.code+"-new-link"}>
                    {discoveryNewProduct && discoveryNewProduct.length > 0 ? <OwlCarousel items={discoveryNewProduct.length} className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" {...options}>
                        {discoveryNewProduct.map((item) => (
                            <div className="product">
                                <figure className="product-media">
                                    <NavLink to={"/product/" + item.code}> <img src={item.img} alt="Product" className="product-image" />
                                    </NavLink>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                    </div>{/* End .product-action-vertical */}
                                    <div className="product-action">
                                    <NavLink className="btn-product btn-cart" title="Add to cart" to={"/product/" + item.code}>
                                    <span>add to cart</span>
                                        </NavLink>
                                    </div>{/* End .product-action */}
                                </figure>{/* End .product-media */}
                                <div className="product-body">
                                    <div className="product-cat">
                                        <NavLink to={"/category/" + category.code}>
                                            {category.name}
                                        </NavLink>
                                    </div>{/* End .product-cat */}
                                    <h3 className="product-title">
                                        <NavLink to={"/product/" + item.code}>
                                            {item.name}
                                        </NavLink></h3>{/* End .product-title */}
                                    <div className="product-price">
                                        {item.price + " VND"}
                                    </div>{/* End .product-price */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                        </div>{/* End .ratings */}
                                        <span className="ratings-text">( {item.sales} đã bán )</span>
                                    </div>{/* End .rating-container */}
                                </div>{/* End .product-body */}
                            </div>
                        ))}

                    </OwlCarousel> : <span className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"></span>}
                </div>
                <div className={`tab-pane p-0 fade ${tabActive?"show active":"fade"}`} id={category.code+"-best-tab"} role="tabpanel" aria-labelledby={category.code+"-best-link"}>
                    {discoveryTopSellProduct && discoveryTopSellProduct.length > 0 ? <OwlCarousel items={discoveryTopSellProduct.length} className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" {...options}>
                        {discoveryTopSellProduct.map((item) => (
                            <div className="product">
                                <figure className="product-media">
                                    <NavLink to={"/product/" + item.code}> <img src={item.img} alt="Product" className="product-image" />
                                    </NavLink>
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
                                        <NavLink to={"/category/" + category.code}>
                                            {category.name}
                                        </NavLink>
                                    </div>{/* End .product-cat */}
                                    <h3 className="product-title">
                                        <NavLink to={"/product/" + item.code}>
                                            {item.name}
                                        </NavLink></h3>{/* End .product-title */}
                                    <div className="product-price">
                                        {item.price + " VND"}
                                    </div>{/* End .product-price */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: '80%' }} />{/* End .ratings-val */}
                                        </div>{/* End .ratings */}
                                        <span className="ratings-text">( {item.sales} đã bán )</span>
                                    </div>{/* End .rating-container */}
                                </div>{/* End .product-body */}
                            </div>
                        ))}

                    </OwlCarousel> : <span className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl"></span>}
                </div>{/* End .owl-carousel */}
            </div>{/* End .tab-content */}
        </div>
    )
}
export default CategoryProduct