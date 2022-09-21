import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../Context/ThemeContext';
import { useDispatch, useSelector} from 'react-redux';
import { logOutAction } from '../../redux/action/auth.action';
import Alert from '../Alert/Alert';

function Header(props) {
    const value = useContext(themeContext);
    console.log(value);

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)

    return (
        <div>
            <header className={`header ${value.theme}`}>
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header__top__left">
                                    <p>Free shipping, 30-day return or refund guarantee.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        <button onClick={() => value.toggle_theme(value.theme)} className="mx-3">Change theme</button>
                                        {
                                            auth.user === null ?
                                                <NavLink to={"/login"}>Login</NavLink>
                                                :
                                                <NavLink to={"/login"} onClick={() => {dispatch(logOutAction())}}>Logout</NavLink>
                                        }
                                        <a href="#">FAQs</a>
                                        <Alert/>
                                    </div>

                                    <div className="header__top__hover">
                                        <span>Usd <i className="arrow_carrot-down" /></span>
                                        <ul>
                                            <li>USD</li>
                                            <li>EUR</li>
                                            <li>USD</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <NavLink to={"/"}><img src="img/logo.png" alt /></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu active">
                                <ul>
                                    <li >
                                        <NavLink to={"/"}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/shop"}>Shop</NavLink>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li>
                                                <NavLink to={"/about"}>About Us</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/shop-details"}>Shop Details</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/shopping-cart"}>Shopping Cart</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/checkout"}>Check Out</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/blog-details"}>Blog Details</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contacts</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <NavLink className="search-switch" to={"/search"}><img src="img/icon/search.png" alt /></NavLink>
                                <a href="#"><img src="img/icon/heart.png" alt /></a>
                                <NavLink to={"/cart"}><img src="img/icon/cart.png" alt /> <span>0</span></NavLink>
                                <div className="price">$0.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars" /></div>
                </div>
            </header>

        </div>
    );
}

export default Header;