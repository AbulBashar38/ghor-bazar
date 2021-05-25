import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link as RouterLink } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
    button: {
        margin: theme.spacing(1),
    },
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        color: 'white',
        width: drawerWidth,
        backgroundColor: '#203D37'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));



const AddProduct = () => {

    const classes = useStyles();
    const { control, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productInfo = { ...data, imgUrl: imageURL };
        fetch('http://localhost:5000/addProductInDatabase', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.location.reload(false);
                }
            })
    }


    const UploadInImgbb = (event) => {

        const imageData = new FormData();

        imageData.set('key', '68b6ff580c83ca61463a6d6da0adcd4d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Add new products
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,

                }}
                anchor="left"

            >
                <div className={classes.toolbar}>
                    <ListItem
                        button
                        component={RouterLink}
                        to='/home'
                        style={{ textAlign: 'center' }}>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography
                                    type="body2"
                                    style={{ color: 'white' }}>
                                    <strong>Ghor Bazar</strong>
                                </Typography>} />
                    </ListItem>
                </div>

                <List>
                    <ListItem
                        button
                        component={RouterLink}
                        to='/admin'>
                        <ListItemIcon>
                            <SettingsApplicationsIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Manage Product" />
                    </ListItem>
                    <ListItem
                        button
                        component={RouterLink}
                        to='/addProduct'>
                        <ListItemIcon>
                            <AddIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Add Product" />
                    </ListItem>
                    <ListItem
                        button
                        component={RouterLink}
                        to='/editProduct'>
                        <ListItemIcon>
                            <EditIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Edit Product" />
                    </ListItem>
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                        container
                        spacing={5}>
                        <Grid
                            item
                            xs={6}>
                            <Controller
                                name="productName"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        fullWidth
                                        label="Product name"
                                        variant="outlined"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        type="text"
                                    />
                                )}
                                rules={{ required: 'Product name required' }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}>
                            <Controller
                                name="wight"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        fullWidth
                                        label="Wight"
                                        variant="outlined"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        type="text"
                                    />
                                )}
                                rules={{ required: 'Wight required' }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}>
                            <Controller
                                name="price"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                        fullWidth
                                        label="Price"
                                        variant="outlined"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                        type="number"
                                    />
                                )}
                                rules={{ required: 'Price required' }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={UploadInImgbb}
                            />
                            <label htmlFor="contained-button-file">
                                <Button
                                    component="span"
                                    variant="contained"
                                    color="default"
                                    className={classes.button}
                                    startIcon={<CloudUploadIcon />}

                                >
                                    product image
                                </Button>
                            </label>
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        type="submit"
                    >
                        Add product
                    </Button>

                </form>
            </main>
        </div>
    );
};

export default AddProduct;