import { Box, Chip } from "@mui/material";
import FilterBar from "../../../components/(main)/stock-video/filterbar";

export default function Page() {
    return (
        <Box>
            <Box sx={{
                backgroundImage: 'url(/images/frame0.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
                width: '100%',
            }} />
            <Box sx={{
                px: 4,
                py: 3,
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: 1
                }}>
                    <Chip label="Background" variant="outlined" />
                    <Chip label="Particle" variant="outlined" />
                    <Chip label="Ai" variant="outlined" />
                    <Chip label="Abstract" variant="outlined" />
                    <Chip label="3D Render" variant="outlined" />
                </Box>
                <Box sx={{
                    pt: 7,
                    display: 'flex',
                }}>
                   <FilterBar />     
                </Box>
            </Box>
        </Box>
    );
}