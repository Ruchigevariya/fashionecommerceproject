import React from 'react';
import { NavLink } from 'react-router-dom';

function Kids(props) {
    return (
        <div>
            <section className="related spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="related-title">Kids Related Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <img src="img/kids-1.jpg" alt='' />
                                    <span className="label">New</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Toy</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$67.24</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-1">
                                            <input type="radio" id="pc-1" />
                                        </label>
                                        <label className="active black" htmlFor="pc-2">
                                            <input type="radio" id="pc-2" />
                                        </label>
                                        <label className="grey" htmlFor="pc-3">
                                            <input type="radio" id="pc-3" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-2.jpg" alt='' />
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Beanie</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$67.24</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-4">
                                            <input type="radio" id="pc-4" />
                                        </label>
                                        <label className="active black" htmlFor="pc-5">
                                            <input type="radio" id="pc-5" />
                                        </label>
                                        <label className="grey" htmlFor="pc-6">
                                            <input type="radio" id="pc-6" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg">
                                <img src="img/kkids-3.jpg" alt='' />
                                    <span className="label">Sale</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Bag</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$43.48</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-7">
                                            <input type="radio" id="pc-7" />
                                        </label>
                                        <label className="active black" htmlFor="pc-8">
                                            <input type="radio" id="pc-8" />
                                        </label>
                                        <label className="grey" htmlFor="pc-9">
                                            <input type="radio" id="pc-9" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-4.jpg" alt='' />
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Baby Stroller Affiliate</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$60.9</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-10">
                                            <input type="radio" id="pc-10" />
                                        </label>
                                        <label className="active black" htmlFor="pc-11">
                                            <input type="radio" id="pc-11" />
                                        </label>
                                        <label className="grey" htmlFor="pc-12">
                                            <input type="radio" id="pc-12" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-5.jpg" alt='' />
                                    <span className="label">New</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Boy Tshirt</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$67.24</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-1">
                                            <input type="radio" id="pc-1" />
                                        </label>
                                        <label className="active black" htmlFor="pc-2">
                                            <input type="radio" id="pc-2" />
                                        </label>
                                        <label className="grey" htmlFor="pc-3">
                                            <input type="radio" id="pc-3" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-6.jpg" alt='' />
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Dress</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$67.24</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-4">
                                            <input type="radio" id="pc-4" />
                                        </label>
                                        <label className="active black" htmlFor="pc-5">
                                            <input type="radio" id="pc-5" />
                                        </label>
                                        <label className="grey" htmlFor="pc-6">
                                            <input type="radio" id="pc-6" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-7.jpg" alt='' />
                                    <span className="label">Sale</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Towel</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$43.48</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-7">
                                            <input type="radio" id="pc-7" />
                                        </label>
                                        <label className="active black" htmlFor="pc-8">
                                            <input type="radio" id="pc-8" />
                                        </label>
                                        <label className="grey" htmlFor="pc-9">
                                            <input type="radio" id="pc-9" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-8.jpg" alt='' />
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Beanie</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$60.9</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-10">
                                            <input type="radio" id="pc-10" />
                                        </label>
                                        <label className="active black" htmlFor="pc-11">
                                            <input type="radio" id="pc-11" />
                                        </label>
                                        <label className="grey" htmlFor="pc-12">
                                            <input type="radio" id="pc-12" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-9.jpg" alt='' />
                                    <span className="label">New</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Baby Seat</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$67.24</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-1">
                                            <input type="radio" id="pc-1" />
                                        </label>
                                        <label className="active black" htmlFor="pc-2">
                                            <input type="radio" id="pc-2" />
                                        </label>
                                        <label className="grey" htmlFor="pc-3">
                                            <input type="radio" id="pc-3" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-10.jpg" alt='' />
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Children's Shoes Simple</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$67.24</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-4">
                                            <input type="radio" id="pc-4" />
                                        </label>
                                        <label className="active black" htmlFor="pc-5">
                                            <input type="radio" id="pc-5" />
                                        </label>
                                        <label className="grey" htmlFor="pc-6">
                                            <input type="radio" id="pc-6" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-11.jpg" alt='' />
                                    <span className="label">Sale</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Girl Dress Variable</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$43.48</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-7">
                                            <input type="radio" id="pc-7" />
                                        </label>
                                        <label className="active black" htmlFor="pc-8">
                                            <input type="radio" id="pc-8" />
                                        </label>
                                        <label className="grey" htmlFor="pc-9">
                                            <input type="radio" id="pc-9" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                <img src="img/kids-12.jpg" alt='' />
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Boy Shirt</h6>
                                    <NavLink to={"/cart"}>+ Add To Cart</NavLink>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$60.9</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-10">
                                            <input type="radio" id="pc-10" />
                                        </label>
                                        <label className="active black" htmlFor="pc-11">
                                            <input type="radio" id="pc-11" />
                                        </label>
                                        <label className="grey" htmlFor="pc-12">
                                            <input type="radio" id="pc-12" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Kids;