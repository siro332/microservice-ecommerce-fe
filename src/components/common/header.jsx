import React from "react";
import { NavLink } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web"
function Header({ categories }) {

    const { keycloak, initialized } = useKeycloak();
    return (
        <header className="header header-10 header-intro-clearance">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <a href="tel:#"><i className="icon-phone" />Hỗ trợ: +84 0334 998 977</a>
                    </div>{/* End .header-left */}
                    <div className="header-right">
                        {!keycloak.authenticated && (
                            <a href="#" onClick={keycloak.login}>Đăng nhập / Đăng ký</a>
                        )}

                        {!!keycloak.authenticated && (
                            <div>
                                <span>
                                    Xin chào <a href="#" onClick={keycloak.accountManagement}> {keycloak.tokenParsed.name}!</a>
                                </span>
                                <a href="#" onClick={keycloak.logout}> Đăng xuất</a>
                            </div>
                        )}

                    </div>{/* End .header-right */}
                </div>{/* End .container */}
            </div>{/* End .header-top */}
            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars" />
                        </button>
                        <NavLink className="logo" to="/">
                            <img src="/assets/images/demos/demo-13/logo.png" alt="Molla Logo" width={105} height={25} />
                        </NavLink>
                    </div>{/* End .header-left */}
                    <div className="header-center">
                        <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                            <a href="#" className="search-toggle" role="button"><i className="icon-search" /></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Tìm kiếm sản phẩm ..." required />
                                    <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                                </div>{/* End .header-search-wrapper */}
                            </form>
                        </div>{/* End .header-search */}
                    </div>
                    <div className="header-right">
                        <div className="header-dropdown-link">
                            <div className="dropdown compare-dropdown">
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="compare-products">
                                        <li className="compare-product">
                                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                                            <h4 className="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
                                        </li>
                                        <li className="compare-product">
                                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                                            <h4 className="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
                                        </li>
                                    </ul>
                                    <div className="compare-actions">
                                        <a href="#" className="action-link">Clear All</a>
                                        <a href="#" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right" /></a>
                                    </div>
                                </div>{/* End .dropdown-menu */}
                            </div>{/* End .compare-dropdown */}
                            <a href="wishlist.html" className="wishlist-link">
                                <i className="icon-heart-o" />
                                <span className="wishlist-count">3</span>
                                <span className="wishlist-txt">Yêu thích</span>
                            </a>
                            <div className="dropdown cart-dropdown">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i className="icon-shopping-cart" />
                                    <span className="cart-count">2</span>
                                    <span className="cart-txt">Giỏ Hàng</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">Beige knitted elastic runner shoes</a>
                                                </h4>
                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $84.00
                                                </span>
                                            </div>{/* End .product-cart-details */}
                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="/assets/images/products/cart/product-1.jpg" alt="product" />
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                                        </div>{/* End .product */}
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">Blue utility pinafore denim dress</a>
                                                </h4>
                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $76.00
                                                </span>
                                            </div>{/* End .product-cart-details */}
                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="/assets/images/products/cart/product-2.jpg" alt="product" />
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                                        </div>{/* End .product */}
                                    </div>{/* End .cart-product */}
                                    <div className="dropdown-cart-total">
                                        <span>Total</span>
                                        <span className="cart-total-price">$160.00</span>
                                    </div>{/* End .dropdown-cart-total */}
                                    <div className="dropdown-cart-action">
                                        <a href="cart.html" className="btn btn-primary">View Cart</a>
                                        <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                                    </div>{/* End .dropdown-cart-total */}
                                </div>{/* End .dropdown-menu */}
                            </div>{/* End .cart-dropdown */}
                        </div>
                    </div>{/* End .header-right */}
                </div>{/* End .container */}
            </div>{/* End .header-middle */}
            <div className="header-bottom sticky-header">
                <div className="container">
                    <div className="header-left">
                        <div className="dropdown category-dropdown is-on" data-visible="true">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
                                Danh sách mặt hàng
                            </a>
                            <div className="dropdown-menu ">
                                <nav className="side-nav">
                                    <ul className="menu-vertical sf-arrows">
                                        {categories.map((item, index) => (
                                            item.subCategories && item.subCategories.length > 0 ?
                                                <li key={item.code} className="megamenu-container">
                                                    <NavLink className="sf-with-ul" to={"/category/" + item.code}>{item.name}</NavLink>
                                                    <div key={item.code} className="megamenu">
                                                        <div className="row no-gutters">
                                                            <div className="col-md-8">
                                                                <div className="menu-col">
                                                                    <div className="row">
                                                                        {item.subCategories.reduce(function (rows, key, index) {
                                                                            const subCatRows = (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
                                                                            return (subCatRows);
                                                                        }, []).map((subCatRow) => (
                                                                            <div key={subCatRow.code} className="col-md-6">
                                                                                {subCatRow.map(col => (
                                                                                    <div key={col.code}>
                                                                                        <NavLink className="menu-title" to={"/category/" + col.code}>{col.name}</NavLink>
                                                                                        {col.subCategories && col.subCategories.length > 0 ?
                                                                                            <ul>
                                                                                                {col.subCategories.map((colSubCat) => (
                                                                                                    <li key={colSubCat.code}><NavLink to={"/category/" + colSubCat.code}>{colSubCat.name}</NavLink>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                            : <div />}
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        ))}

                                                                    </div>{/* End .row */}
                                                                </div>{/* End .menu-col */}
                                                            </div>{/* End .col-md-8 */}
                                                            <div className="col-md-4">
                                                                <div className="banner banner-overlay">
                                                                    <a href="category.html" className="banner banner-menu">
                                                                        <img src="/assets/images/demos/demo-13/menu/banner-1.jpg" alt="Banner" />
                                                                    </a>
                                                                </div>{/* End .banner banner-overlay */}
                                                            </div>{/* End .col-md-4 */}
                                                        </div>{/* End .row */}
                                                    </div>
                                                </li>
                                                : <li key={item.code}><NavLink to={"/category/" + item.code}>{item.name}</NavLink>
                                                </li>
                                        ))}
                                    </ul>{/* End .menu-vertical */}
                                </nav>{/* End .side-nav */}
                            </div>{/* End .dropdown-menu */}
                        </div>{/* End .category-dropdown */}
                    </div>{/* End .col-lg-3 */}
                    <div className="header-right">
                        <i className="la la-lightbulb-o" /><p>Clearance Up to 30% Off</p>
                    </div>
                </div>{/* End .container */}
            </div>{/* End .header-bottom */}
        </header>); {/* End .header */ }
}
export default Header;