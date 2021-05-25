import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const ShowProduct = (props) => {
    
    const classes = useStyles();
     
    const history = useHistory()
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const { productName, wight, price, imgUrl,_id } = props.product
    
    const handleBuyNowBtn=()=>{
        const userInfo = {
            ...loggedInUser,
            productId:_id
        }
        setLoggedInUser(userInfo);
        history.replace('/checkout')
    }

    return (
        <Grid
            item
            xs={12}
            sm={4}
            container
            justify="center"
            alignItems="center"
            style={{ margin: '40px 0' }}>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={imgUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2">
                        {productName}-{wight}
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography
                                variant="h5"
                                component="h2"
                                color="primary">
                                ${price}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                
                                variant="contained"
                                color="primary"
                                onClick={handleBuyNowBtn}
                                >
                                Buy now
                                </Button>
                        </Grid>
                    </Grid>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default ShowProduct;