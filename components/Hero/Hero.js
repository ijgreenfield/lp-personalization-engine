import React from "react";
import { Box, Center, Container, Text, Heading, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, Input, FormLabel, ModalFooter, ModalBody } from "@chakra-ui/react";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { useFormik } from "formik";
import Axios from 'axios'

export default function HeroSection(props) {
    const formik = useFormik({
        initialValues: {
          email: "",
          phone: "",
        },
        onSubmit: async (values, { resetForm }) => {
            await Axios({
                method: 'POST',
                url: 'https://manage.kmail-lists.com/ajax/subscriptions/subscribe?',
                data: {
                    g: 'UT2JxZ',
                    ...values
                    
                }
              })
              resetForm()
        }
      });
      
    const { isOpen, onOpen, onClose } = useDisclosure()


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
                    <Heading zIndex="10" color="#fff">{props.Heading}</Heading>
                    <Text zIndex="10" color="#fff" my={5}>{props.Subtext}</Text>
                    <Button zIndex="10" variant='secondary' onClick={onOpen}>{props.Cta}</Button>
                    <Modal />
                </Center>
            </Container>
            
            {/* Popup Modal */}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={formik.handleSubmit}>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        placeholder='Your Email' 
                        type="email" 
                        name="email" 
                        id="k_id_email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Phone</FormLabel>
                    <Input 
                        placeholder='Your Phone' 
                        type="tel" 
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} type="submit">
                    Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </Box>

        
    )
}