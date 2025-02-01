"use client"
import { Download, FiberSmartRecord, Pause, PlayArrow } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = (ref: any) => ({
    container: ref,
    waveColor: "#666",
    progressColor: "OrangeRed",
    cursorColor: "OrangeRed",
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    height: 40,
    normalize: true,
    partialRender: true
});

interface AudioPreviewProps {
    width?: number;
    height?: number;
    title?: string;
    subtitle?: string;
    src: string;
    link: string;
}

export default function AudioPreview({ width, height, title, subtitle, src, link }: AudioPreviewProps) {
    const waveformRef = useRef(null);
    const wavesurfer = useRef<WaveSurfer>(null);
    const [playing, setPlay] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [duration, setDuration] = useState<number | undefined>();
    const router = useRouter();

    useEffect(() => {
        setPlay(false);

        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(src);

        wavesurfer.current.on("ready", function () {
            setDuration(wavesurfer.current?.getDuration());
            if (wavesurfer.current) {
                wavesurfer.current.setVolume(volume);
                setVolume(volume);
            }
        });

        return () => wavesurfer.current?.destroy();
    }, [src]);

    const handlePlayPause = () => {
        setPlay(!playing);
        wavesurfer.current?.playPause();
    };


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1,
                backgroundColor: 'rgba(200,200,200,0.3)',
                padding: 2,
                gap: 3,
                width: width,
                height: height,
            }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: 2
            }}>
                <IconButton
                    sx={{
                        border: 1
                    }}
                    onClick={handlePlayPause}
                >
                    {!playing ? <PlayArrow /> : <Pause />}

                </IconButton>
                <Box sx={{
                    gap: 2
                }}>
                    <Link href={link}>
                        <Typography sx={{
                            fontSize: 16
                        }}>
                            {title}
                        </Typography>
                    </Link>
                    <Typography sx={{
                        color: 'gray',
                        fontSize: 14
                    }}>
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '100%',
            }}>
                <Box sx={{
                    flex: 1,
                    width: '100%',
                }} ref={waveformRef} />
                <Typography>{duration ? (duration / 60).toFixed(2) : 0.00}</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: 2
                }}>
                    <Typography sx={{
                        fontSize: 14,
                    }}>BPM 100</Typography>
                    <Typography sx={{
                        fontSize: 14,
                    }}>4 Tracks</Typography>
                </Box>
                <Box>
                    <IconButton sx={{
                        borderRadius: 2,
                    }}><FiberSmartRecord /></IconButton>
                    <IconButton sx={{
                        borderRadius: 2,
                    }}><Download /></IconButton>
                </Box>
            </Box>
        </Box>
    );
}
