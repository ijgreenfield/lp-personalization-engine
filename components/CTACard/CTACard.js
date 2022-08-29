import { Box, Container, Flex, Stack, Button, Text, Heading } from "@chakra-ui/react"
import Image from "next/image"

export default function CTACard(props) {
    return (
        <Box bg={props.bgColor}>
            <Container maxW="1280px">
                <Flex borderRadius="24px" overflow="hidden" flexDir={["column", null, null, "row-reverse"]} bgColor="#fff" alignItems="center" justifyContent="center">
                    <Box w={["100%", null, null, "50%"]}>
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/Recess_HeyDay-66_1.png?v=1659042552"
                            layout="responsive"
                            width={330}
                            height={200}
                            unoptimized
                        />
                    </Box>
                    <Stack p={["20px", null, null, "64px"]} w={["100%", null, null, "50%"]} spacing="16px">
                        <Heading>{props.heading}</Heading>
                        <Text>{props.description}</Text>
                        <Button variant="primary">{props.cta}</Button>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}