"use client";

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Slider, styled, Typography } from "@mui/material";

const NinjaBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const NinjaSlider = styled(Slider)(({ theme }) => ({
    color: '#007bff',
    height: 5,
    padding: '15px 0',
    paddingBottom: 50,
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        boxShadow: '0 0 4px 0px rgba(0, 0, 0, 0.1)',
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: NinjaBoxShadow,
            },
        },
        '&:before': {
            boxShadow:
                '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
        },
    },
    '& .MuiSlider-valueLabel': {
        fontSize: 14,
        fontWeight: 'normal',
        top: 48,
        backgroundColor: 'unset',
        color: theme.palette.text.primary,
        '&::before': {
            display: 'none',
        },
        '& *': {
            background: 'transparent',
            color: '#000',
            ...theme.applyStyles('dark', {
                color: '#fff',
            }),
        },
    },
    '& .MuiSlider-track': {
        border: 'none',
        height: 5,
    },
    '& .MuiSlider-rail': {
        opacity: 0.5,
        boxShadow: 'inset 0px 0px 4px -2px #000',
        backgroundColor: '#d0d0d0',
    },
    ...theme.applyStyles('dark', {
        color: '#0a84ff',
    }),
}));

export default function FilterBar() {
    return (
        <Box sx={{
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: 324
            }}>
                <FilterAltOutlinedIcon />
                <Typography variant="h5">Filters</Typography>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'baseline',
                gap: 1
            }}>
                <Button sx={{ borderRadius: 6 }} color='inherit'><CloseIcon /> Clear all</Button>
                <Box sx={{
                    width: '100%'
                }}>
                    <Typography variant='h6'>Categories</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Stock Footage" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Motion Graphics" />
                        </FormGroup>
                        <Typography>0</Typography>
                    </Box>
                    <Divider sx={{py: 2}} />
                </Box>
                <Box sx={{
                    width: '100%'
                }}>
                    <Typography variant='h6'>Stock Footage</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Buildings" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Business, Corporate" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Cartoons" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="City" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Construction" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Education" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Food" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Holidays" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Industrial" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Stock Footage" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Button sx={{ borderRadius: 6 }} color='inherit'><AddOutlinedIcon /> Show More</Button>
                    <Divider sx={{py: 2}} />
                </Box>
                <Box sx={{
                    width: '100%'
                }}>
                    <Typography variant='h6'>Orientation</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Horizontal" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Vertical" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Divider sx={{py: 2}} />
                </Box>
                <Box sx={{
                    width: '100%'
                }}>
                    <Typography variant='h6'>Resolution</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="720p (HD)" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="1080p (Full HD)" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="2K" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="4K" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Divider sx={{py: 2}} />
                </Box>
                <Box sx={{
                    width: '100%'
                }}>
                    <Typography variant='h6'>Frame Rate</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="23.98 fps" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="24fps" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="25 fps" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="29.97 fps" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="30 fps" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="50 fps" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="60 fps" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="More Than 60 fps" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Divider sx={{py: 2}} />
                </Box>
                <Box sx={{
                    width: '100%'
                }}>
                    <Typography variant='h6'>Length</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <NinjaSlider
                            valueLabelDisplay="on"
                            getAriaLabel={() => 'Temperature range'}
                            value={[10, 20]}
                            onChange={(event: Event, newValue: number | number[]) => {

                            }}
                            getAriaValueText={(value) => {
                                return ""
                            }}
                        />
                    </Box>
                    <Divider sx={{py: 2}} />
                </Box>
                <Box sx={{
                    width: '100%'
                }}>
                    <Typography variant='h6'>Properties</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Alpha" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Looped" />
                        </FormGroup>
                        <Typography>6,768,980</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}