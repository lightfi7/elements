"use client"
import { Download } from "@mui/icons-material";
import { Box, Chip, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ImagePreviewProps {
    width?: number;
    height?: number;
    title?: string;
    subtitle?: string;
    src: string;
    link: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ width, height, title, subtitle, src, link }: ImagePreviewProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    return (
        <Box
            onClick={() => {
                router.push(link);
            }}
            onMouseOut={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                setIsHovered(false);
            }}
            onMouseOver={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                setIsHovered(true);
            }}
            sx={{
                position: 'relative',
                width: width,
                height: height
            }}>
            <Image
                style={{
                    position: 'absolute',
                    borderRadius: 4,
                    top: 0,
                    left: 0,
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
                src={src}
                alt="image"
                width={width}
                height={height}
            />
            {isHovered && (
                <>
                    <div style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 1
                    }}>
                        <Chip label={title} size="small" sx={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderRadius: 1,
                            color: 'white',
                        }} />
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: 36,
                        left: 12,
                        zIndex: 1
                    }}>
                        <Chip label={subtitle} size="small" sx={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderRadius: 1,
                            color: 'white',
                        }} />
                    </div>
                    <IconButton sx={{
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        position: 'absolute',
                        bottom: 8,
                        right: 60,
                        borderRadius: 2,
                        zIndex: 1
                    }}>
                        <Download />
                    </IconButton>
                    <IconButton sx={{
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        position: 'absolute',
                        bottom: 8,
                        right: 12,
                        borderRadius: 2,
                        zIndex: 1
                    }}>
                        <FullscreenIcon />
                    </IconButton>
                    <IconButton sx={{
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        position: 'absolute',
                        bottom: 8,
                        right: 108,
                        borderRadius: 2,
                        zIndex: 1
                    }}>
                        <FiberSmartRecordIcon />
                    </IconButton>
                </>
            )}
        </Box >
    );
}

export default ImagePreview;
