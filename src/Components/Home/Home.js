import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';

const Home = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allProduct')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    },[])
    return (
        <Grid container>
            {allProducts.map(product=><ShowProduct key={product._id} product={product}></ShowProduct>)}
        </Grid>
    );
};

export default Home;