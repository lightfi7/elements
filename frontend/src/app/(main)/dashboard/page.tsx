"use client";
import AudioPreview from "@/components/(main)/dashboard/AudioPreview";
import ImagePreview from "@/components/(main)/dashboard/ImagePreview";
import VideoPreview from "@/components/(main)/dashboard/VideoPreview";
import { ArrowForward } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const categories = [
    {
        name: 'Stock Video',
        image: '',
        count: 5000000,
        link: ''
    },
    {
        name: 'Stock Photos',
        image: '',
        count: 490091,
        link: ''
    },
    {
        name: 'Video Template',
        image: '',
        count: 200756,
        link: ''
    },
    {
        name: 'Royal-Free Music',
        image: '',
        count: 82657,
        link: ''
    },
    {
        name: 'Sound Effects',
        image: '',
        count: 5821123,
        link: ''
    },
    {
        name: 'Graphic Templates',
        image: '',
        count: 56562,
        link: ''
    },
    {
        name: 'Fonts',
        image: '',
        count: 10237,
        link: ''
    },
    {
        name: 'Graphics',
        image: '',
        count: 170234,
        link: ''
    },
    {
        name: '3D',
        image: '',
        count: 20981,
        link: ''
    },
    {
        name: 'Presentation Templates',
        image: '',
        count: 170234,
        link: ''
    },
    {
        name: 'Photos',
        image: '',
        count: 170234,
        link: ''
    },
    {
        name: 'Add-ons',
        image: '',
        count: 170234,
        link: ''
    },
]

export default function Page() {
    const [stockVideos, setStockVideos] = useState({
        total: 10237,
        data: [
            {
                title: '',
                subtitle: '',
                src: '',
                link: '',
            }
        ]
    });

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
                padding: 6
            }}>
                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Browse By Category
                    </Typography>
                    <Typography sx={{
                        fontSize: 'medium',
                        color: 'gray',
                    }}>
                        0ver 10,789,091 Assets
                    </Typography>
                </Box>

                <Box sx={{
                    paddingY: 6,
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Swiper
                        slidesPerView={8}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={true}
                    >
                        {
                            categories.map((item, i) => {
                                return <SwiperSlide key={i}>
                                    <Box>
                                        {/* <Image src={item.image} alt="" width={200} height={200} /> */}
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography>{item.count}</Typography>
                                    </Box>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                }}>
                    {/* Stock Video */}

                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Stock Video</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <VideoPreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/videos/sample.mp4"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Stock Photos */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Stock Photos</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Video Template */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Video Template</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <VideoPreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/videos/sample.mp4"
                                        link="#"
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Royal-Free Music */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Royal-Free Music</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <AudioPreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="You raise me up"
                                        subtitle="Jos Groban"
                                        src="/audios/u raise me up.mp3"
                                        link="#"
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Sound Effects */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Sound Effects</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <AudioPreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="You raise me up"
                                        subtitle="Jos Groban"
                                        src="/audios/u raise me up.mp3"
                                        link="#"
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Graphic Templates */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Stock Photos</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Fonts */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Fonts</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Graphics */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Graphics</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* 3D */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">3D</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Presentation Templates */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Presentation Templates</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Add-ons */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Add-ons</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Web Template */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Web Template</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* CMS Template */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">CMS Template</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>

                    {/* Wordpress */}
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingY: 2,
                        }}>
                            <Box>
                                <Typography variant="h6">Wordpress</Typography>
                                <Typography sx={{
                                    fontSize: 'medium',
                                    color: 'gray',
                                }}>5,000,000 Assets</Typography>
                            </Box>
                            <Box>
                                <Link href='' sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    color: 'gray'
                                }}>
                                    View all
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            {
                                ['', '', '', '', ''].map((value, i) => {
                                    return <ImagePreview
                                        key={i}
                                        width={360}
                                        height={200}
                                        title="Christmas Transitions"
                                        subtitle="bank508"
                                        src="/images/sample.png"
                                        link='#'
                                    />
                                })
                            }

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}