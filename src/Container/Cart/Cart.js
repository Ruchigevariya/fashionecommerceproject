import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../Context/ThemeContext';
import { cartDecrement, cartDelete, cartIncrement } from '../../redux/action/Cart.action';

function Cart(props) {
    const value = useContext(themeContext);
    console.log(value);

    const product = useSelector(state => state.Product)
    console.log(product.Product);
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    console.log(cart.cart);

    const cartData = []

    product.Product.map((p) => {
        cart.cart.map((c) => {
            if (p.id === c.id) {
                cartData.push({ ...p, quantity: c.quantity })
            }
        })
    })
console.log(cartData);
    const handleRemove = (id) => {
        dispatch(cartDelete(id))
    }

    const handleIncrement = (id) => {
        console.log(id);
        dispatch(cartIncrement(id))
    }

    const handleDecrement = (id) => {
        console.log(id);
        dispatch(cartDecrement(id))
    }

    let subTotal = 0
    function productTotals(price, quantity) {
        subTotal = subTotal + Number(price * quantity)
        return Number(price * quantity).toLocaleString()
    }

    return (
        <div>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/shop">Shop</NavLink>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartData.map((c, i) => (
                                                <>
                                                    <tr className="table-body-row" key={i}>
                                                        <td className="product__cart__item">
                                                            <div className="product__cart__item__pic">
                                                                <img src={c.product_img} alt />
                                                            </div>
                                                            <div className="product__cart__item__text">
                                                                <h6>{c.name}</h6>
                                                                <h5>${c.price}</h5>
                                                            </div>
                                                        </td>
                                                        <td className="quantity__item">
                                                            <div className="quantity">
                                                                <div className="pro-qty-2">
                                                                    <button onClick={() => handleIncrement(c.id)}>+</button>
                                                                    <span>{c.quantity}</span>
                                                                    <button onClick={() => handleDecrement(c.id)}>-</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/* <td className="cart__price">${c.price}</td> */}
                                                        <td className="product_total">${productTotals(c.price , c.quantity)}</td>
                                                        <td className="cart__close"><div onClick={() => handleRemove(c.id)}><i className="fa fa-close" /></div></td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <a href="#">Continue Shopping</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <a href="#"><i className="fa fa-spinner" /> Update cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart__discount">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div className="cart__total">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal<span>${subTotal}</span></li>
                                    <li>Total<span>${subTotal}</span></li>
                                </ul>
                                <NavLink to={"/checkout"} className="primary-btn">Proceed to checkout</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;