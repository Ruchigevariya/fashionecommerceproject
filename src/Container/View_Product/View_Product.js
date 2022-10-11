import { logDOM } from '@testing-library/react';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../Context/ThemeContext';
import { history } from '../../history';
import { addtoCart } from '../../redux/action/Cart.action';
import { getProduct } from '../../redux/action/Product.action';

function View_Product(props) {
    const value = useContext(themeContext);
    console.log(value);

    const product = useSelector(state => state.Product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const handlePush = (name) => {
        history.push('/Product_Details', { name: name })
    }

    const handleCart = (id) => {
        dispatch(addtoCart(id))
        console.log(id);
    }

    return (
        <div>
            <section className={`product spad ${value.theme}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h2>Our Product</h2>
                        </div>
                    </div>
                    <div className="row product__filter">
                        {
                            product.Product.map((p) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">

                                    <div className="product__item">
                                        <div className="product__item__pic set-bg">
                                            <div onClick={() => handlePush(p.name)}><img src={p.product_img} alt /></div>
                                            <span className="label">New</span>
                                            <ul className="product__hover">
                                                <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                                                <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a></li>
                                                <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>{p.name}</h6>
                                            <NavLink to={"/cart"} onClick={() => handleCart(p.id)}><img src="img/icon/cart.png" alt /> <span>0</span>+ Add To Cart</NavLink>
                                            <div className="rating">
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                            </div>
                                            <h5>${p.price}</h5>
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

                            ))
                        }

                    </div>
                </div>
            </section>
        </div>
    );
}

export default View_Product;