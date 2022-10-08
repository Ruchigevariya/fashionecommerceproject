import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../../Context/ThemeContext';
import { history } from '../../../history';
import { getProduct } from '../../../redux/action/Product.action';

function ProductWise(props) {
    const value = useContext(themeContext);
    console.log(value);

    const product = useSelector(state => state.Product)
    const category = useSelector(state => state.category)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const handlePush = (name) => {
        history.push('/Product_Details', { name: name })
    }

    // const handleCart = (id) => {
    //     dispatch(addtoCart(id))
    // }

    let fData = product.Product.filter((p) => p.category === props.location.state.name)
    console.log(fData);

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
                            fData.map((p) => (
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
                                            <NavLink to={"/cart"}>+ Add To Cart</NavLink>
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

export default ProductWise;