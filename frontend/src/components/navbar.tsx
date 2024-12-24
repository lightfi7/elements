"use client";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Button, Divider, Select } from '@mui/material';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '48px',
    border: '1px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: 50,
    paddingInline: '3px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 960,
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    flex: 1,
    '& .MuiInputBase-input': {
        // padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(0)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: 'full',
        },
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Unlimited Downloads</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Magic Ai</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>License</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Pricing</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box>
            <AppBar position="static" sx={{
                backgroundColor: 'background.default',
                color: 'text.primary',
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'divider',
                padding: '10px 0',
                height: 80,
            }}>
                <Toolbar sx={{
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <GppGoodOutlinedIcon fontSize='large' />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Elements
                        </Typography>
                    </Box>
                    <Search sx={{
                        borderColor: 'divider'
                    }}>
                        <Box sx={{
                            width: '120px',
                            backgroundColor: '#F6F7FF',
                            border: '1px solid #E4E7FF',
                            borderTopLeftRadius: 48,
                            borderBottomLeftRadius: 48,
                        }}>
                            <Select
                                fullWidth
                                variant="outlined"
                                value={'all'}
                                sx={{
                                    '.MuiOutlinedInput-notchedOutline': {
                                        border: 'none', // Remove border
                                    },
                                    '&:focus .MuiOutlinedInput-notchedOutline': {
                                        border: 'none', // Remove focus border
                                    },
                                    height: '40px',
                                }}
                            >
                                <MenuItem value={'all'}>All Items</MenuItem>
                            </Select>
                        </Box>
                        <StyledInputBase
                            placeholder="Search for items here"
                            inputProps={{ 'aria-label': 'search' }}
                            endAdornment={<IconButton sx={{
                                backgroundColor: '#E1E3FB',
                                color: '#0F20D4'
                            }}><SearchIcon /></IconButton>}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{
                        display: { xs: 'none', lg: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 1
                        }}>
                            <Button size='small' sx={{
                                fontSize: '14px',
                                px: 2,
                                textTransform: 'unset',
                                backgroundColor: '#E1E3FB'
                            }} color='inherit' >Unlimited Downloads</Button>
                            <Button sx={{ textTransform: 'unset' }} color='inherit'>Magic Ai</Button>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 1
                        }}>
                            <Button sx={{ textTransform: 'unset' }} color='inherit'>License</Button>
                            <Button sx={{ textTransform: 'unset' }} color='inherit'>Pricing</Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        <Button
                            size="small"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color='inherit'
                            sx={{
                                borderRadius: 18,
                                textTransform: 'unset',
                                gap: 0.5
                            }}
                        >
                            <Avatar sx={{
                                width: 36,
                                height: 36,
                            }} />
                            <Typography sx={{
                                fontSize: 14,
                            }}>John</Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: { md: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
