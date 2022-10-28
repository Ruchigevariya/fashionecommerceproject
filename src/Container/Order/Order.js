import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../Context/ThemeContext';
import { cartDelete, cartEmpty } from '../../redux/action/Cart.action';

function Order(props) {
    const value = useContext(themeContext);
    console.log(value);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartEmpty())
    },[])

    return (
        <div>
           <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Order</h4>
                                <div className="breadcrumb__links">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/shop">Shop</NavLink>
                                    <span>Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            <div className="checkout-section mt-100 mb-100">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12 text-center">
                                <h4 className='order mt-5' >Order Placed Successfully</h4>
                                <img src='img/success.gif' />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Order;