import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../Context/ThemeContext';
import { addtoCart } from '../../redux/action/Cart.action';
import { getProduct } from '../../redux/action/Product.action';

function Product_Details(props) {
    const value = useContext(themeContext);
    console.log(value);

    const product = useSelector(state => state.Product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const handleCart = (id) => {
        dispatch(addtoCart(id))
    }

    let fData = product.Product.filter((f) => f.name === props.location.state.name)
    console.log(fData);

    return (
        <div>
            <section className='shop-details py-5'>
                <div className={`product__details__pic ${value.theme}`}>
                    <div className='container'>
                        <div className='titles mb-3'>
                            <h2>Product Details</h2>
                        </div>
                        <div className='row'>
                            {
                                fData.map((p) => {
                                    return (
                                        <>
                                            <div className='col-md-4 mt-5 d-flex align-items-center justify-content-center'>
                                                <div className="product__item mt-5">
                                                    <div className="product__details__pic__set-bg">
                                                        <img src={p.product_img} alt />
                                                        <div className='product__item__text'>
                                                            <h6>{p.name}</h6>
                                                            <NavLink to={"/cart"}  onClick={() => handleCart(p.id)}><img src="img/icon/cart.png" alt /> <span>0</span>+ Add To Cart</NavLink>
                                                            <div className="rating">
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                            <h5>${p.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8" >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="product__details__tab">
                                                            <ul className="nav nav-tabs" role="tablist">
                                                                <li className="nav-item">
                                                                    <a className="nav-link active" data-toggle="tab" href="#tabs-5" role="tab">Description</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Customer
                                                                        Previews(5)</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional
                                                                        information</a>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content">
                                                                <div className="tab-pane active" id="tabs-5" role="tabpanel">
                                                                    <div className="product__details__tab__content">
                                                                        <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                                                            pharetras loremos.</p>
                                                                        <div className="product__details__tab__content__item">
                                                                            <h5>Products Infomation</h5>
                                                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                                                capabilities as a modern PC. These handy little devices allow
                                                                                individuals to retrieve and store e-mail messages, create a contact
                                                                                file, coordinate appointments, surf the internet, exchange text messages
                                                                                and more. Every product that is labeled as a Pocket PC must be
                                                                                accompanied with specific software to operate the unit and must feature
                                                                                a touchscreen and touchpad.</p>
                                                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                                                was substantial during it’s early release. For approximately $700.00,
                                                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                                                These days, customers are finding that prices have become much more
                                                                                reasonable now that the newness is wearing off. For approximately
                                                                                $350.00, a new Pocket PC can now be purchased.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane" id="tabs-6" role="tabpanel">
                                                                    <div className="product__details__tab__content">
                                                                        <div className="product__details__tab__content__item">
                                                                            <h5>Products Infomation</h5>
                                                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                                                capabilities as a modern PC. These handy little devices allow
                                                                                individuals to retrieve and store e-mail messages, create a contact
                                                                                file, coordinate appointments, surf the internet, exchange text messages
                                                                                and more. Every product that is labeled as a Pocket PC must be
                                                                                accompanied with specific software to operate the unit and must feature
                                                                                a touchscreen and touchpad.</p>
                                                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                                                was substantial during it’s early release. For approximately $700.00,
                                                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                                                These days, customers are finding that prices have become much more
                                                                                reasonable now that the newness is wearing off. For approximately
                                                                                $350.00, a new Pocket PC can now be purchased.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane" id="tabs-7" role="tabpanel">
                                                                    <div className="product__details__tab__content">
                                                                        <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                                                            pharetras loremos.</p>
                                                                        <div className="product__details__tab__content__item">
                                                                            <h5>Products Infomation</h5>
                                                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                                                capabilities as a modern PC. These handy little devices allow
                                                                                individuals to retrieve and store e-mail messages, create a contact
                                                                                file, coordinate appointments, surf the internet, exchange text messages
                                                                                and more. Every product that is labeled as a Pocket PC must be
                                                                                accompanied with specific software to operate the unit and must feature
                                                                                a touchscreen and touchpad.</p>
                                                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                                                was substantial during it’s early release. For approximately $700.00,
                                                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                                                These days, customers are finding that prices have become much more
                                                                                reasonable now that the newness is wearing off. For approximately
                                                                                $350.00, a new Pocket PC can now be purchased.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className='mt-3'><strong>Categories: </strong>{p.category}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product_Details;