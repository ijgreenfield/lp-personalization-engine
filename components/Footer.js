import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";


export default function Footer(props) {
    return (
        <Box>
            <Container maxW='1280px'>
                <Flex py='32px' fontSize='14px' fontWeight={600}>
                    <Box>
                        <Text>©2022 Heyday Wellness LLC.</Text>
                    </Box>
                    <Spacer />
                    <Flex gap='4'>
                        <Text>Product & Service Policies</Text>
                        <Text>Privacy Policy</Text>
                        <Text>Accessibility Statement</Text>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}