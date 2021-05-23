import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PaymentIcon from '@material-ui/icons/Payment';
import { Button} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },


    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));
const Header = () => {
    const classes = useStyles();
    
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

   
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

     const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <HomeIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>

        </Menu>
    );
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Ghor Bazar
            </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <HomeIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            component={RouterLink}
                            to="/home"
                            style={{ marginRight: '8px' }} color="inherit"
                        >
                            Home
                        </Button>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            component={RouterLink}
                            to="/order"
                            style={{ marginRight: '8px' }} color="inherit"
                        >
                            Orders
                        </Button>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <AccountBoxIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            component={RouterLink}
                            to="/admin"
                            style={{ marginRight: '8px' }} color="inherit"
                        >
                            Admin
                        </Button>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <PaymentIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            component={RouterLink}
                            to="/deals"
                            style={{ marginRight: '8px' }} color="inherit"
                        >
                            Deals
                        </Button>
                        <Button style={{ marginRight: '8px' }} color="secondary" variant="contained">Login</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
};

export default Header;