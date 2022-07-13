import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
function Blog(props) {

    const data = [
        {
            id: 195,
            name: "Tops",
            category: "industry",
            price: "500",
            quantity: "1",
            status: "1"
        },
        {
            id: 462,
            name: "Pants",
            category: "firm",
            price: "699",
            quantity: "1",
            status: "1"
        },
        {
            id: 740,
            name: "Shirts",
            category: "industry",
            price: "999",
            quantity: "1",
            status: "1"
        }

    ]

    return (
        <div>
            {
                data.map((d, i) => {
                    return (
                        <Card key={i}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {d.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6">
                                    {d.category}
                                </CardSubtitle>
                                <CardText>
                                    {d.price}
                                </CardText>
                            </CardBody>
                        </Card>
                    )
                })
            }
            <section className="breadcrumb-blog">
                <img src="img/breadcrumb-bg.jpg" alt='' />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='title'>
                                <h2>Our Blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-1.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 16 February 2020</span>
                                    <h5>What Curling Irons Are The Best Ones</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-2.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 21 February 2020</span>
                                    <h5>Eternity Bands Do Last Forever</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-3.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 28 February 2020</span>
                                    <h5>The Health Benefits Of Sunglasses</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-4.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 16 February 2020</span>
                                    <h5>Aiming For Higher The Mastopexy</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-5.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 21 February 2020</span>
                                    <h5>Wedding Rings A Gift For A Lifetime</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-6.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 28 February 2020</span>
                                    <h5>The Different Methods Of Hair Removal</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-7.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 16 February 2020</span>
                                    <h5>Hoop Earrings A Style From History</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-8.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 21 February 2020</span>
                                    <h5>Lasik Eye Surgery Are You Ready</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg">
                                    <img src="img/blog/blog-9.jpg" alt='' />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt /> 28 February 2020</span>
                                    <h5>Lasik Eye Surgery Are You Ready</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Blog;