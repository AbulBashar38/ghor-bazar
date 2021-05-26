import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

        '& > * + *': {
            marginLeft: theme.spacing(2),

        },
    },
}));

const Home = () => {
    const classes = useStyles();
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://guarded-lowlands-32604.herokuapp.com/allProduct')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <Grid
         container
         justify="center"
         alignItems="center"
        >
            {allProducts.length === 0
                &&
                <div className={classes.root}>
                    <CircularProgress />
                </div>}
            {allProducts.map(product => <ShowProduct key={product._id} product={product}></ShowProduct>)}
        </Grid>
    );
};

export default Home;