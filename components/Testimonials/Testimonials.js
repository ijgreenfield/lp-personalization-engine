import { Box, Container } from "@chakra-ui/react"
import Testimonial from "./Testimonial"
import clients from "./clientReviews"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Testimnonials() {
    return (
        <Box bg="#f9f4f0" py="48px">
            <Box>
                <Swiper>
                    {clients.map((client) => (
                    <SwiperSlide>
                        <Testimonial client={client}/>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    )
}