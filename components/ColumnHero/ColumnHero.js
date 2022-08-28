import { Heading, Text, Stack, Box, Container, Flex, Button } from "@chakra-ui/react"

export default function ColumnHero() {
    return (
        <Box>
            <Container>
                <Flex bg="#F7EBE3" borderRadius="24px" overflow="hidden">
                    <Box>
                        
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