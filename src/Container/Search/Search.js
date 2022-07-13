import React from 'react';
import { NavLink } from 'react-router-dom';


function Search(props) {
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

    const handlesearch = (val) => {
        console.log(val);
    }
    return (
        <div>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Search</h4>
                                <div className="breadcrumb__links">
                                    <NavLink to="/">Home</NavLink>
                                    <span>Search</span>
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
                                <TextFi
                                    margin="dense"
                                    name="search"
                                    label="Medicine search"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={(m) => handlesearch(m.target.value)}
                                />
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    {
                                        data.map((d) => {
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <td>{d.id}</td>
                                                        <td>{d.name}</td>
                                                        <td>{d.category}</td>
                                                        <td>{d.price}</td>
                                                        <td>{d.quantity}</td>
                                                        <td>{d.status}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Search;