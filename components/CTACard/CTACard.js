import { Box, Container, Flex, Stack, Button, Text, Heading } from "@chakra-ui/react"
import Image from "next/image"

export default function CTACard(props) {
    return (
        <Box bg={props.bgColor}>
            <Container>
                <Flex borderRadius="24px" overflow="hidden" flexDir="column">
                    <Box>
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/Recess_HeyDay-66_1.png?v=1659042552"
                            layout="responsive"
                            width={330}
                            height={200}
                            unoptimized
                        />
                    </Box>
                    <Stack p="20px">
                        <Heading>Member Appreciation Month Is Here.</Heading>
                        <Text>The best time to be a member? Right now.</Text>
                        <Text>We’re celebrating members with early access to enhancements, extra-special product discounts, gifts for you and your friends & so much more! Scroll to see what’s coming your way in September. </Text>
                        <Button variant="primary">Book a Facial</Button>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}