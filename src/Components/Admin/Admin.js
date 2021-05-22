import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

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
        color:'white',
        width: drawerWidth,
        backgroundColor:'#203D37'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const Admin = (props) => {
    const classes = useStyles();
    const addProduct=()=>{
        console.log('clicked');
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
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
                <div className={classes.toolbar}><h3 style={{textAlign:'center'}}>Ghor Bazar</h3></div>
                
                <List>
                    <ListItem button>
                        <ListItemIcon>
                        <SettingsApplicationsIcon style={{ color: 'white' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Manage Product"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <AddIcon style={{ color: 'white' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Add Product"/>
                    </ListItem>
                    <ListItem button onClick={addProduct}>
                        <ListItemIcon>
                        <EditIcon style={{ color: 'white' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Edit Product"/>
                    </ListItem>
                </List>
                
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <h1>something will be happen next</h1>
            </main>
        </div>
    );
};

export default Admin;