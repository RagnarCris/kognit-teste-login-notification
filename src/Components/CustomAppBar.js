import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import { useNavigate } from "react-router-dom";

export default function CustomAppBar() {

    const titleStyle={marginLeft:'25px'};
    const toolBarStyle={paddingLeft:'4px', paddingRight: '4px'};

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElHelp, setAnchorElHelp] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const isHelpOpen = Boolean(anchorElHelp);
    const helpId = isHelpOpen ? 'simple-popover' : undefined;

    const handleClickHelp = (event) => {
        setAnchorElHelp(event.currentTarget);
    };

    const handleCloseHelp = () => {
        setAnchorElHelp(null);
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
                >
                    <NotificationsIcon />
                </IconButton>
                </Box>
            </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}