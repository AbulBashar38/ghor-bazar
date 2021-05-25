import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableStyle: {
        margin: '50px'
    }
}));
const Checkout = () => {
    const classes = useStyles();
    return (
        <div className={classes.tableStyle}>
            <h3>Checkout</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Product name
                            </TableCell>
                            <TableCell align="right">1</TableCell>
                            <TableCell align="right">price</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <div style={{textAlign:'center'}}>
                <Button variant='contained' color='primary'>Checkout</Button>
            </div>
        </div>
    );
};

export default Checkout;