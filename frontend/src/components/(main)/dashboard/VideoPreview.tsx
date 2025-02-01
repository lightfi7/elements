"use client"
import { Download } from "@mui/icons-material";
import { Box, Chip, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import { useRouter } from "next/navigation";

interface VideoPreviewProps {
    width?: number;
    height?: number;
    title?: string;
    subtitle?: string;
    src: string;
    link: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ width, height, title, subtitle, src, link }: VideoPreviewProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isInited, setIsInited] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsInited(true);
                        videoElement.pause();
                    })
                    .catch(error => {
                        console.error('Auto-play was prevented:', error);
                    });
            }
        }
    }, []);

    const handleMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        const videoElement = e.currentTarget;
        videoElement.pause();
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (isInited) {
            const videoElement = e.currentTarget;
            videoElement.play();
        }
    };

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
            <video
                style={{
                    position: 'absolute',
                    borderRadius: 4,
                    top: 0,
                    left: 0,
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
                ref={videoRef}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                src={src}
                preload='none'
                loop
                muted
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

export default VideoPreview;
