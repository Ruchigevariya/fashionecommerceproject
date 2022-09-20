import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function Search(props) {
    const [filterData, setFilterData] = useState([]);

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

        let fData = data.filter((p) => (
            p.id.toString().includes(val) ||
            p.name.toLowerCase().includes(val.toLowerCase()) ||
            p.category.toLowerCase().includes(val.toLowerCase()) ||
            p.price.toString().includes(val) ||
            p.quantity.toString().includes(val) ||
            p.status.toString().includes(val)
        ))

        setFilterData(fData)

        console.log(fData);
    }

    let finalData = filterData.length > 0 ? filterData : data 

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
                                <TextField
                                    margin="dense"
                                    name="search"
                                    label="Product search"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => handlesearch(e.target.value)}
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
                                        finalData.map((p, i) => {
                                            return (
                                                <tbody key={i}>
                                                    <tr>
                                                        <td>{p.id}</td>
                                                        <td>{p.name}</td>
                                                        <td>{p.category}</td>
                                                        <td>{p.price}</td>
                                                        <td>{p.quantity}</td>
                                                        <td>{p.status}</td>
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