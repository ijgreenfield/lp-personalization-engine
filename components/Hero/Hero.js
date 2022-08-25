import React from "react";
import { Box, Center, Container, Text, Heading, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, Input, FormLabel, ModalFooter, ModalBody } from "@chakra-ui/react";
import Image from "next/image";

export default function HeroSection(props) {
    const  openForm = () => {
        window._klOnsite = window._klOnsite || [];
        window._klOnsite.push(['openForm', 'Wu6tZL']);
    }


    return (
        <Box h={["300px","500px"]} w="100vw" pos="relative">
            <Box pos="absolute" top="0" h="100%" w="100%" zIndex="2">
                <Box pos="relative" h="100%" w="100%" zIndex="0">
                    <Image
                        src={props.bgImage}
                        layout="fill"
                        objectFit="cover"
                        quality={70}
                        priority
                    />
                    <Box bg="#000" opacity=".35" pos="absolute" h="100%" w="100%" zIndex="1"></Box>
                </Box>
            </Box>
            <Container zIndex="5" h="100%">
                <Center alignItems="center" h="100%" flexDirection="column" textAlign="center">
                    <Heading zIndex="10" color="#fff">{props.Heading}</Heading>
                    <Text zIndex="10" color="#fff" my={5}>{props.Subtext}</Text>
                    <Button zIndex="10" variant='secondary' onClick={openForm}>{props.Cta}</Button>
                    <Modal />
                </Center>
            </Container>
        </Box>

        
    )
}