import React from 'react';
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
import { Link as RouterLink } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    // necessary for content to be below app bar
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
    const onSubmit = data => console.log(data);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
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
                <div className={classes.toolbar}><h3 style={{ textAlign: 'center' }}>Ghor Bazar</h3></div>

                <List>
                    <ListItem button component={RouterLink} to='/admin'>
                        <ListItemIcon>
                            <SettingsApplicationsIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Manage Product" />
                    </ListItem>
                    <ListItem button component={RouterLink} to='/addProduct'>
                        <ListItemIcon>
                            <AddIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Add Product" />
                    </ListItem>
                    <ListItem button component={RouterLink} to='/editProduct'>
                        <ListItemIcon>
                            <EditIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Edit Product" />
                    </ListItem>
                </List>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={5}>
                        <Grid item xs={6}>
                            <TextField style={{width:'100%'}}  id="outlined-basic" label="Product name" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField style={{width:'100%'}} id="outlined-basic" label="Wight" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField style={{width:'100%'}}  id="outlined-basic" label="Price" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField style={{width:'100%'}}  id="outlined-basic" label="Product name" variant="outlined" type='file' />
                        </Grid>
                    </Grid>
                    
                    <input type="submit" />
                </form>
            </main>
        </div>
    );
};

export default AddProduct;