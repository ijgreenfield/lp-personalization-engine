import { Heading, Text, Stack, Box, Container, Flex, Button } from "@chakra-ui/react"
import Image from "next/image"

export default function ColumnHero() {
    return (
        <Box>
            <Container maxW="1280px">
                <Flex bg="#F7EBE3" borderRadius="24px" overflow="hidden" flexDir={["column", null, "row"]} justifyContent="center" alignItems="center">
                    <Box w={["100%", null, null, "50%"]} h="100%" pos="relative">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/Recess_HeyDay-66_1.png?v=1659042552"
                            layout="responsive"
                            width={500}
                            height={400}
                            unoptimized
                        />
                    </Box>
                    <Stack p={["20px", null, null, "64px"]} w={["100%", null, null, "50%"]}>
                        <Heading mb={[null, null, null, "16px"]}>Member Appreciation Month Is Here.</Heading>
                        <Text>The best time to be a member? Right now.</Text>
                        <Text mb={[null, null, null, "16px"]}>We’re celebrating members with early access to enhancements, extra-special product discounts, gifts for you and your friends & so much more! Scroll to see what’s coming your way in September. </Text>
                        <Button variant="primary">Book a Facial</Button>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}