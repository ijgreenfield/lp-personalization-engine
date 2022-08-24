import { Box, Center, Container, Text, Heading, Button } from "@chakra-ui/react";
import Image from "next/image";

export default function HeroSection(props) {
    return (
        <Box h={["300px","500px"]} w="100vw" pos="relative">
            <Box pos="absolute" top="0" h="100%" w="100%" zIndex="2">
                <Box pos="relative" h="100%" w="100%" zIndex="0">
                    <Image
                        src={props.bgImage}
                        layout="fill"
                        objectFit="cover"
                        unoptimized="true"
                        priority
                    />
                    <Box bg="#000" opacity=".35" pos="absolute" h="100%" w="100%" zIndex="1"></Box>
                </Box>
            </Box>
            <Container zIndex="5" h="100%">
                <Center alignItems="center" h="100%" flexDirection="column" textAlign="center">
                    <Heading zIndex="10" color="#fff">Hey this is Ian!</Heading>
                    <Text zIndex="10" color="#fff" my={5}>{props.Subtext}</Text>
                    <Button zIndex="10" variant='secondary'>This is a Button</Button>
                </Center>
            </Container>
        </Box>
    )
}