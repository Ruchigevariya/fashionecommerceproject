import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCategory } from '../../redux/action/Category.action';

function Category(props) {
    const category = useSelector(state => state.category)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCategory())
    }, [])

    return (
        <div>
            <section className='category py-5'>
                <div className='container'>
                    <div className='titles mb-3'>
                        <h2>Categories</h2>
                    </div>
                    <div className='row'>
                        {
                            category.category.map((c) => {
                                return (
                                    <div className='category-1 col-3'>
                                        <NavLink to={"/men"}><img src={c.category_img} /></NavLink>
                                        <h4>{c.name}</h4>
                                    </div>
                                )
                            })
                        }
                        {/* <div className='category-1 col-3'>
                            <NavLink to={"/men"}><img src="img/instagram/instagram-2.jpg" /></NavLink>
                            <h4>Men</h4>
                        </div>
                        <div className='category-1 col-3'>
                            <NavLink to={"/women"}><img src="img/women.jpg" /></NavLink>
                            <h4>Women</h4>
                        </div>
                        <div className='category-1 col-3'>
                            <NavLink to={"/kids"}><img src="img/kids.jpg" /></NavLink>
                            <h4>Kids</h4>
                        </div>
                        <div className='category-1 col-3'>
                            <NavLink to={"/accessories"}><img src="img/instagram/instagram-1.jpg" /></NavLink>
                            <h4>Accessories</h4>
                        </div> */}
                    </div>
                </div>
            </section> 
        </div>
    );
}

export default Category;