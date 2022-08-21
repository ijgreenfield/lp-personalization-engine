import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react"
import Image from "next/image"

export default function LogoCloud(props) {
    return (
        <Box py="48px">
            <Container>
                <Box>
                    <Heading></Heading>
                    <Flex>
                        <Box w="100%" maxW="33%">
                            <Link >
                                <Image 
                                    src='https://images.unsplash.com/photo-1657299143474-c456e8388ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80'
                                    alt="image"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </Box>
    )
}