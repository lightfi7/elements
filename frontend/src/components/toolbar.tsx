import { Box, Link } from "@mui/material";

export default () => {
    return (
        <Box sx={{
            padding: 2,
            paddingX: 4,
            backgroundColor: '#E1E3FB',
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 3,
        }}>
            <Link color='inherit' href='/stock-video' underline="hover" sx={{
                
            }}>Stock Video</Link>
            <Link color='inherit' href='/video-template' underline="hover" sx={{
                
            }}>Video Template</Link>
            <Link color='inherit' href='/music' underline="hover" sx={{
                
            }}>Music</Link>
            <Link color='inherit' href='/graphic-templates' underline="hover" sx={{
                
            }}>Graphic Templates</Link>
            <Link color='inherit' href='/graphics' underline="hover" sx={{
                
            }}>Graphics</Link>
            <Link color='inherit' href='/3d' underline="hover" sx={{
                
            }}>3D</Link>
            <Link color='inherit' href='/presentation-templates' underline="hover" sx={{
                
            }}>Presentation Templates</Link>
            <Link color='inherit' href='/photos' underline="hover" sx={{
                
            }}>Photos</Link>
            <Link color='inherit' href='/fonts' underline="hover" sx={{
                
            }}>Fonts</Link>
            <Link color='inherit' href='/add-ons' underline="hover" sx={{
                
            }}>Add-ons</Link>
            <Link color='inherit' href='#' underline="hover" sx={{
                
            }}>More</Link>
        </Box>
    );
}