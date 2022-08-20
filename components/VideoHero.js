import { AspectRatio, Box, Flex, Heading, Input, Stack, Text, Button } from "@chakra-ui/react"

export default function VideoHero(props) {
    return (
        <Box>
            <Box pos="relative">
                <Flex pos="absolute" top="0" right="0" left="0" bottom="0" zIndex={5} m="auto" h="max-content" w="80%" justify="space-between" alignItems="center">
                    <Box>
                        <Heading color="#fff" as="h1" size="3xl">Your Exclusive Offer</Heading>
                        <Text color="#fff">CycleBar® is more than a ride. It’s a journey of self-discovery – measured in sweat, championed by the community, and fueled by the desire to get more out of life. BOOK NOW & GET YOUR FIRST RIDE FREE at participating studios.</Text>
                    </Box>
                    <Box maxW="460px" minW="460px" bg="#fff" p="30px" borderRadius="8px" alignItems="center" textAlign="center">
                        <Box>
                            <Heading as="h3" size="lg">50% Off Your First Facial</Heading>
                        </Box>
                        <Stack spacing="12px" alignItems="center">
                            <Input placeholder="First Name*" size="lg"/>
                            <Input placeholder="Last Name*" size="lg"/>
                            <Input placeholder="Email*" size="lg"/>
                            <Input placeholder="Phone" size="lg"/>
                            <Input placeholder="Zip Code" size="lg"/>
                            <Button variant="primary" mx="auto">Book Your Facial</Button>
                        </Stack>
                    </Box>
                </Flex>
                <Box bg="rgb(0,0,0,.5)" pos="absolute" top="0" left="0" zIndex={2} w="100%" h="100%"></Box>
                <Box zIndex={1}>
                    <AspectRatio ratio={16 / 9}>
                        <video muted autoPlay loop width="100%" height="100%">
                            <source src="https://cdn.shopify.com/videos/c/o/v/328ec4937774489088ea9fc2eef95cfc.mp4"/>
                        </video>
                    </AspectRatio>
                </Box>
            </Box>
        </Box>
    )
}