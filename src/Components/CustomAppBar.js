import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Paper, Button, Typography, Table, TableRow, TableHead, TableBody, TableCell, TableContainer } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import CancelIcon from '@mui/icons-material/Cancel';
import Menu from '@mui/material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import { useNavigate } from "react-router-dom";

export default function CustomAppBar({notifications}) {
    const titleStyle={marginLeft:'25px'};
    const toolBarStyle={paddingLeft:'4px', paddingRight: '4px'};
    const btnstyle={backgroundColor:'#f13434', color: 'white'};

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElHelp, setAnchorElHelp] = useState(null);
    const [anchorElNotification, setAnchorElNotification] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const isHelpOpen = Boolean(anchorElHelp);
    const helpId = isHelpOpen ? 'simple-popover' : undefined;
    
    const isNotificationOpen = Boolean(anchorElNotification);
    const notificationId = isNotificationOpen ? 'notify-popover' : undefined;

    const handleClickHelp = (event) => {
        setAnchorElHelp(event.currentTarget);
    };

    const handleCloseHelp = () => {
        setAnchorElHelp(null);
    };

    const handleClickNotification = (event) => {
        setAnchorElNotification(event.currentTarget);
    };

    const handleCloseNotification = () => {
        setAnchorElNotification(null);
    };

    const handleDeleteAllNotifications = () => {
        notifications.length = 0;
    }
    const handleDeleteNotification = (id) => {
        notifications = notifications.filter(function( obj ) {
            return obj.id !== id;
        });
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        navigate("/");
    };

    const menuId = 'success-menu';
    const renderMenu = (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="success"
                    style={toolBarStyle}
                >
                    <AccountCircle />
                </IconButton>
                <Typography
                variant="h6"
                noWrap
                component="div"
                color="success"
                style={titleStyle}
                sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                KOGNIT
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                    size="large"
                    aria-label="ask-help"
                    color="success"
                    onClick={handleClickHelp}
                    aria-describedby={helpId}
                >
                    <HelpIcon />
                </IconButton>
                <Popover
                    id={helpId}
                    open={isHelpOpen}
                    anchorEl={anchorElHelp}
                    onClose={handleCloseHelp}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography align="center" style={{ wordWrap: "break-word" }} sx={{ p: 2 }}>Contato para ajuda: (11)999999999</Typography>
                </Popover>
                <IconButton
                    size="large"
                    aria-label="notifications"
                    color="success"
                    onClick={handleClickNotification}
                    aria-describedby={notificationId}
                >
                    <NotificationsIcon />
                </IconButton>
                <Popover
                    id={notificationId}
                    open={isNotificationOpen}
                    anchorEl={anchorElNotification}
                    onClose={handleCloseNotification}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    PaperProps={{
                        style: { width: '400px',
                                height: '550px' },
                    }}
                >
                    <Paper >
                        <TableContainer >
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                    <TableRow>
                                        <TableCell
                                        key={'edit'}
                                        align={'left'}
                                        style={{ minWidth: '150' }}
                                        >
                                        {'Editar notificações'}
                                        </TableCell>
                                        <TableCell
                                        key={'button-clean'}
                                        align={'right'}
                                        style={{ minWidth: '150' }}
                                        >
                                        <Button size="small" style={btnstyle} variant="filled" onClick={handleDeleteAllNotifications} >
                                            Limpar
                                        </Button>
                                        </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {notifications
                                .map((notification) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={notification.id}> 
                                        <TableCell key={1} align={'left'}>
                                            <Typography sx={{fontWeight: 'bold'}}>{notification.title}</Typography>
                                            <Typography >{notification.body}</Typography>
                                        </TableCell>
                                        <TableCell key={2} align={'right'}>
                                        <Typography >
                                                <IconButton
                                                    size="small"
                                                    aria-label="delete_notification"
                                                    onClick={handleDeleteNotification(notification.id)}
                                                    style={btnstyle}
                                                >
                                                    <CancelIcon/>
                                                </IconButton>
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Popover>
                </Box>
            </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}