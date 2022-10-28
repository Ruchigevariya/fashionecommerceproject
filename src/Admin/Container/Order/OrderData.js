import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../redux/action/Order.action';

function OrderData(props) {
    const dispatch = useDispatch()
    const product = useSelector(state => state.Product)
    const cart = useSelector(state => state.cart)
    const order = useSelector(state => state.order)

    console.log(order.order);

    useEffect(() => {
        dispatch(getOrder())
    }, [])

    const columns = [
        { field: 'id', headerName: 'Userid', width: 130 },
        {
            field: 'product_img',
            headerName: 'Product_img',
            width: 800,
            renderCell: (params) => (
                params.row.product.map((p) => (
                    <>
                        <img src={p.product_img} width={50} height={50} /><br/>
                        <span>{p.name}, </span>
                        <span> Quantity:{p.quantity},</span>
                        <span> Price:{p.price},</span>
                    </>
                ))
            )
        },
        { field: 'phone', headerName: 'Contact', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'address', headerName: 'Address', width: 130 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'country', headerName: 'Country', width: 130 },
        { field: 'totalcart', headerName: 'Total', width: 130 },
    ];

    return (
        <div>
            <div>
                <h2>Order Details</h2>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={order.order}
                        columns={columns}
                        pageSize={6}
                        rowsPerPageOptions={[6]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default OrderData;