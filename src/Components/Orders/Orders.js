import { IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableStyle: {
        margin: '50px'
    }
}));
const Orders = () => {

    const [orderedProduct, setOrderedProduct] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const classes = useStyles();

    const handleRemoveOrder = (id) => {
        const confirmBox = window.confirm(
            "Do you really want to delete this Order?"
        )
        if (confirmBox === true) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        window.location.reload(false);
                    }
                })
        }

    }

    useEffect(() => {
        fetch('http://localhost:5000/userOrder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderedProduct(data))
    }, [loggedInUser.email])

    const totalCalculation = () => {
        let total = 0;
        orderedProduct.map(product => {
            const numberPrice = parseInt(product.price);
            total = total + numberPrice;
        })
        return total
    }

    return (
        <div className={classes.tableStyle}>
            <h3>Your order</h3>
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">
                                Quantity
                            </TableCell>
                            <TableCell align="right">
                                Price
                            </TableCell>
                            <TableCell align="right">
                                Placed date
                            </TableCell>
                            <TableCell align="right">
                                Remove Order
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {orderedProduct.map(product => (
                            <TableRow key={product._id}>
                                <TableCell
                                    component="th"
                                    scope="row">
                                    {product.productName}
                                </TableCell>
                                <TableCell align="right">1</TableCell>
                                <TableCell align="right">${product.price}</TableCell>
                                <TableCell align="right">{new Date(product.date).toDateString('dd/mm/yyyy')}</TableCell>
                                <TableCell align="right">
                                    <IconButton color='secondary' onClick={() => handleRemoveOrder(product._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={1}>Total</TableCell>
                            <TableCell align="right">${totalCalculation()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;