import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import Orders from '../Orders/Orders';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AddService from '../../AddService/AddService';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AdminRoute from '../../LogIn/Login/AdminRoute/AdminRoute';

const drawerWidth = 220;

function Dashboard(props) {
    const { window } = props;
    const { logOut, admin } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const [date, setDate] = React.useState(new Date())

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Link style={{ textDecoration: 'none' }} to="/moreServices"><Button color="inherit">MoreServices</Button></Link> <br />
            <Link style={{ textDecoration: 'none' }} to={`${url}/payment`}><Button color="inherit">Payment</Button></Link> <br />
            <Link style={{ textDecoration: 'none' }} to={`${url}/order`}><Button color="inherit">MyOrder</Button></Link> <br />
         
            { admin && <Box>
                <Link style={{ textDecoration: 'none' }} to="/review"><Button color="inherit">Review</Button></Link> <br />
                  <Link style={{ textDecoration: 'none' }} to="/addservice"><Button color="inherit">Add a Product</Button></Link> <br />
                  <Link style={{ textDecoration: 'none' }} to={`${url}/manageOrder`}><Button color="inherit">Manage All Orders</Button></Link> <br />
                  <Link style={{ textDecoration: 'none' }} to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link> <br /> 
            </Box>
            }
            <Button onClick={logOut} color="inherit">LogOut</Button>

           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                 
                 
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/order`}>
                        <Orders></Orders>
                    </Route>
                    <AdminRoute path={`${path}/addservice`}>
                        <AddService></AddService>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <PaymentMethod></PaymentMethod>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
