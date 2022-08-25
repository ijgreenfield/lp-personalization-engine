import React from "react";
import { Box, Center, Container, Text, Heading, Button, Modal, Input, Stack} from "@chakra-ui/react";
import Image from "next/image";

export default function FormHero(props) {
    const  openForm = () => {
        window._klOnsite = window._klOnsite || [];
        window._klOnsite.push(['openForm', 'Wu6tZL']);
    }


    return (
        <Box h={["auto","500px"]} py="32px" w="100vw" pos="relative">
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
                    <Heading zIndex="10" color="#fff">{props.Heading}</Heading>
                    <Text zIndex="10" color="#fff" my={5}>{props.Subtext}</Text>
                    <Stack zIndex={100} maxW="300px" textAlign="center" alignItems="center">
                        <Input placeholder="Your email" bg="#fff"/>
                        <Input placeholder="Your phone" bg="#fff"/>
                        <Button zIndex="10" variant='secondary' onClick={openForm} mx="auto">{props.Cta}</Button>
                    </Stack>
                    <Modal />
                </Center>
            </Container>
        </Box>

        
    )
}