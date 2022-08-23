import { AspectRatio, Box, Flex, Heading, Input, Stack, Text, Button } from "@chakra-ui/react"

export default function VideoHero(props) {
    return (
        <Box>
            <Box pos="relative">
                <Flex pos="absolute" top="0" right="0" left="0" bottom="0" zIndex={5} m="auto" h="max-content" w="80%" justify="space-between" alignItems="center">
                    <Stack maxW={["100%","50%"]} textAlign={["center", "left"]} spacing="24px">
                        <Heading color="#fff" as="h1" size="2xl" lineHeight="125%">Your Exclusive Offer</Heading>
                        <Text color="#fff">Heyday® is more than a facial. It’s a journey of self-discovery – measured in lorem, championed by the community, and fueled by the desire to lorem ipsum dolor blah. BOOK NOW & GET YOUR FIRST FACIAL HALF OFF at participating locations.</Text>
                        <Button display={["inline-block", "none"]} mx="auto !important">Book Your Facial</Button>
                    </Stack>
                    <Stack maxW="460px" minW="460px" bg="#fff" p="30px" borderRadius="8px" alignItems="center" textAlign="center" display={['none', 'block']} spacing="16px">
                        <Box>
                            <Heading as="h3" size="lg">50% Off Your First Facial</Heading>
                        </Box>
                        <Stack spacing="16px" alignItems="center">
                            <Input placeholder="First Name*" size="lg"/>
                            <Input placeholder="Last Name*" size="lg"/>
                            <Input placeholder="Email*" size="lg"/>
                            <Input placeholder="Phone" size="lg"/>
                            <Input placeholder="Zip Code" size="lg"/>
                            <Text fontSize="12px" textAlign="left">I agree to receive marketing text messages from Heyday Skincare at the number provided. Consent is not a condition of any purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel. View our Privacy Policy & Terms of Use.</Text>
                            <Button variant="primary" mx="auto">Book Your Facial</Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Box bg="rgb(0,0,0,.5)" pos="absolute" top="0" left="0" zIndex={2} w="100%" h="100%"></Box>
                <Box zIndex={1}>
                    <AspectRatio ratio={16 / 9} minH={["80vh","auto"]}>
                        <video muted autoPlay loop width="100%" height="100%">
                            <source src="https://cdn.shopify.com/videos/c/o/v/328ec4937774489088ea9fc2eef95cfc.mp4"/>
                        </video>
                    </AspectRatio>
                </Box>
            </Box>
        </Box>
    )
}