import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableStyle: {
        margin: '50px'
    }
}));

const Checkout = () => {

    const history = useHistory()

    const classes = useStyles();

    const [checkoutProduct,setCheckoutProduct]=useState({})
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    const id = loggedInUser.productId

    useEffect(()=>{
        fetch(`https://ghor-bazar-server.onrender.com/checkoutProduct/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setCheckoutProduct(data)
        })
    },[id])

    const handleCheckoutBtn=()=>{
        const orderInfo={
            productName:checkoutProduct.productName,
            price:checkoutProduct.price,
            email:loggedInUser.email,
            date: new Date()
        }
        fetch('https://ghor-bazar-server.onrender.com/orderItem',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(orderInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                history.push('/order')
            }
        })
    }

    return (
        <div className={classes.tableStyle}>
            <h3>Checkout</h3>
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">
                                Quantity
                            </TableCell>
                            <TableCell align="right">
                                Price
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell
                                component="th"
                                scope="row">
                                {checkoutProduct.productName}
                            </TableCell>
                            <TableCell align="right">1</TableCell>
                            <TableCell align="right">${checkoutProduct.price}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <div style={{ textAlign: 'center' }}>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleCheckoutBtn}
                    >
                    Checkout
                </Button>
            </div>
        </div>
    );
};

export default Checkout;