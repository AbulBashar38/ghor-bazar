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
import ProductTable from '../productTable/ProductTable';



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
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const ManageProduct = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Manage Product
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
                <div
                    className={classes.toolbar}>
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
                                </Typography>}
                        />
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
                <ProductTable></ProductTable>
            </main>
        </div>
    );
};

export default ManageProduct;