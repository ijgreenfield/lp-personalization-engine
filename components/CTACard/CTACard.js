import { Box, Container, Flex, Stack, Button, Text, Heading, Link } from "@chakra-ui/react"
import Image from "next/image"

export default function CTACard(props) {
    return (
        <Box bg={props.bgColor}>
            <Container maxW="1280px">
                <Flex borderRadius="24px" overflow="hidden" flexDir={["column", null, "row-reverse"]} bgColor="#fff" alignItems="center" justifyContent="center">
                    <Box w={["100%", null, "50%"]}>
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/Screen_Shot_2022-08-24_at_9.45_1.png?v=1661783661"
                            layout="responsive"
                            width={650}
                            height={400}
                        />
                    </Box>
                    <Stack p={["20px", null, null, "64px"]} w={["100%", null, "50%"]} spacing="16px">
                        <Heading>{props.heading}</Heading>
                        <Text>{props.description}</Text>
                        <Link href={props.href}>
                            <Button variant="primary">{props.cta}</Button>
                        </Link>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}