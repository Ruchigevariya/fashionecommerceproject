import React from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';

function Checkout(props) {

    let schema = yup.object().shape({
        firstname: yup.string().required("Enter your First Name."),
        lastname: yup.string().required("Enter your Last Name."),
        country: yup.string().required("Enter your Country."),
        address: yup.string().required("Enter your address."),
        city: yup.string().required("Enter your city"),
        state: yup.string().required("Enter your State"),
        postcode: yup.string().required("Enter your Postcode"),
        phone: yup.string().required("Enter the Phone number."),
        email: yup.string().required("Enter your email id.").email("Enter your valid email id."),
        accountpassword: yup.string().required("Enter Account password"),
        ordernotes: yup.string().required("Enter order Notes."),
    });

    const formik = useFormik({
        initialValues: {
          firstname: '',
          lastname: '',
          country:'',
          address:'',
          city:'',
          state:'',
          postcode:'',
          phone:'',
          email: '',
          accountpassword:'',
          ordernotes:'',
        },
        validationSchema: schema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    const {handleChange, errors, handleSubmit, handleBlur, touched} = formik;

    return (
        <div>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Check Out</h4>
                                <div className="breadcrumb__links">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/shop">Shop</NavLink>
                                    <span>Check Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__form">
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} action="#">
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <h6 className="coupon__code"><span className="icon_tag_alt" /> Have a coupon? <a href="#">Click
                                        here</a> to enter your code</h6>
                                    <h6 className="checkout__title">Billing Details</h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>First Name<span>*</span></p>
                                                <input type="text" name="firstname" onChange={handleChange} onBlur={handleBlur}/>
                                                <p>{errors.firstname && touched.firstname ? errors.firstname : ''}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input type="text" name="lastname" onChange={handleChange} onBlur={handleBlur}/>
                                                <p>{errors.lastname && touched.lastname ? errors.lastname : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input type="text" name="country" onChange={handleChange} onBlur={handleBlur}/>
                                        <p>{errors.country && touched.country ? errors.country : ''}</p>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input type="text" name="address" placeholder="Street Address" className="checkout__input__add" onChange={handleChange} onBlur={handleBlur}/>
                                        <input type="text" placeholder="Apartment, suite, unite ect (optinal)" />
                                        <p>{errors.address && touched.address ? errors.address : ''}</p>
                                    </div>
                                    <div className="checkout__input">
                                        <p>City/Town<span>*</span></p>
                                        <input type="text" name="city" onChange={handleChange} onBlur={handleBlur}/>
                                        <p>{errors.city && touched.city ? errors.city : ''}</p>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input type="text" name="state" onChange={handleChange} onBlur={handleBlur}/>
                                        <p>{errors.state && touched.state ? errors.state : ''}</p>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text"name="postcode" onChange={handleChange} onBlur={handleBlur}/>
                                        <p>{errors.postcode && touched.postcode ? errors.postcode : ''}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input type="text" name="phone" maxLength={10} onChange={handleChange} onBlur={handleBlur}/>
                                                <p>{errors.phone && touched.phone ? errors.phone : ''}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text" name="email" onChange={handleChange} onBlur={handleBlur}/>
                                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="acc">
                                            Create an account?
                                            <input type="checkbox" id="acc" />
                                            <span className="checkmark" />
                                        </label>
                                        <p>Create an account by entering the information below. If you are a returning customer
                                            please login at the top of the page</p>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Account Password<span>*</span></p>
                                        <input type="text" name="accountpassword" onChange={handleChange} onBlur={handleBlur}/>
                                        <p>{errors.accountpassword && touched.accountpassword ? errors.accountpassword : ''}</p>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="diff-acc">
                                            Note about your order, e.g, special noe for delivery
                                            <input type="checkbox" id="diff-acc" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Order notes<span>*</span></p>
                                        <input type="text" name="ordernotes" placeholder="Notes about your order, e.g. special notes for delivery." onChange={handleChange} onBlur={handleBlur}/>
                                        <p>{errors.ordernotes && touched.ordernotes ? errors.ordernotes : ''}</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4 className="order__title">Your order</h4>
                                        <div className="checkout__order__products">Product <span>Total</span></div>
                                        <ul className="checkout__total__products">
                                            <li>01. Vanilla salted caramel <span>$ 300.0</span></li>
                                            <li>02. German chocolate <span>$ 170.0</span></li>
                                            <li>03. Sweet autumn <span>$ 170.0</span></li>
                                            <li>04. Cluten free mini dozen <span>$ 110.0</span></li>
                                        </ul>
                                        <ul className="checkout__total__all">
                                            <li>Subtotal <span>$750.99</span></li>
                                            <li>Total <span>$750.99</span></li>
                                        </ul>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="acc-or">
                                                Create an account?
                                                <input type="checkbox" id="acc-or" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.</p>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="payment">
                                                Check Payment
                                                <input type="checkbox" id="payment" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="paypal">
                                                Paypal
                                                <input type="checkbox" id="paypal" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <button type="submit" className="site-btn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Checkout;