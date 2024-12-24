import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

export default () => {
    return (
        <Box sx={{
            padding: 6,
            backgroundColor: '#1E2037',
            display: 'flex',
            flexDirection: 'row'
        }}>
            <Box sx={{
                flexGrow: 0.8,
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}>
                    <Image
                        src='/images/logo.png'
                        alt="Elements"
                        width={32}
                        height={32}
                    />
                    <Typography variant="h4" color="white" sx={{
                        fontWeight: 'bold'
                    }}>
                        Elements
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                }}>
                    <IconButton color="primary">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <XIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <WhatsAppIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <FacebookIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{
                flexGrow: 2,
                display: 'flex',
                justifyContent: 'space-around',
                gap: 1
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <Typography variant="h5" color="white">
                        Discover
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}>
                        <Typography color="white">About Elemets</Typography>
                        <Typography color="white">Our Pricing & Plans</Typography>
                        <Typography color="white">Stock Video</Typography>
                        <Typography color="white">Video Templates</Typography>
                        <Typography color="white">Royalty-Free Music</Typography>
                        <Typography color="white">Stock Photos</Typography>
                        <Typography color="white">Fonts</Typography>
                        <Typography color="white">Monthly Free Files</Typography>
                        <Typography color="white">Popular Searches</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <Typography variant="h5" color="white">
                        License & User Terms
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}>
                        <Typography color="white">License Terms</Typography>
                        <Typography color="white">Terms & Conditions</Typography>
                        <Typography color="white">Privacy & Policy</Typography>
                        <Typography color="white">Acceptable Use policy</Typography>
                        <Typography color="white">Fair Use Policy</Typography>
                        <Typography color="white">Cookies</Typography>
                        <Typography color="white">Cookie Settings</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <Typography variant="h5" color="white">
                        Resources
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}>
                        <Typography color="white">Discover Tuts+</Typography>
                        <Typography color="white">Video & Music</Typography>
                        <Typography color="white">Design</Typography>
                        <Typography color="white">Marketing</Typography>
                        <Typography color="white">Web Design</Typography>
                        <Typography color="white">Explore Blog</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <Typography variant="h5" color="white">
                        Help
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}>
                        <Typography color="white">Help Center</Typography>
                        <Typography color="white">Become an Affiliate</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <Typography variant="h5" color="white">
                        About Us
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}>
                        <Typography color="white">Who We Are</Typography>
                        <Typography color="white">Our Products</Typography>
                        <Typography color="white">Join Our Team</Typography>
                        <Typography color="white">Our Forum</Typography>
                        <Typography color="white">Company Blog</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}