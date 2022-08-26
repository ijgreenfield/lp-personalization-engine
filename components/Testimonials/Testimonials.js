import { Box, Center, Heading, Stack, StylesProvider } from "@chakra-ui/react"
import Testimonial from "./Testimonial"
import clients1 from "./clientReviews"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";


export default function Testimnonials() {
    return (
        <Box bg="#f9f4f0" py="64px">
            <Stack spacing={8}>
                <Center textAlign="center">
                    <Heading fontWeight={500}>Stories from the Heyday Community</Heading>
                </Center>
                <Box px={["20px", null, "0px"]}>
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={10}
                        pagination={true}
                        loop="true"
                        breakpoints={{
                            300: {
                                pagination: true,
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2.5,
                            }
                        }}
                    >
                        <Box>
                            {clients1.map((client) => (
                            <SwiperSlide key={client}>
                                <Testimonial client={client}/>
                            </SwiperSlide>
                            ))}
                        </Box>
                    </Swiper>
                </Box>
                {/*<Box display={["none", "inline-block"]}>
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={10}
                        loop="true"
                    >
                        {clients1.map((client) => (
                        <SwiperSlide key={client}>
                            <Testimonial client={client}/>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                        </Box> */}
            </Stack>
        </Box>
    )
}