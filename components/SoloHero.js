import { Box, Container, Heading, Text, Input, Flex, FormControl, Image, Stack, InputRightElement, InputGroup } from "@chakra-ui/react";

export default function SoloHero(props) {
    return (
        <Box bg='linear-gradient(180deg, #FEF2E1 0%, #FFEEDB 100%);'>
            <Container maxW='1280px' py="96px">
                <Box pos="relative">
                    <Stack maxW={['100%', '50%']} marginBottom="40px" spacing="16px">
                        <Heading fontSize={["32px","56px"]} fontWeight={500}>Welcome to your Heyday, Plymouth Meeting</Heading>
                        <Text>New York Magazine’s #1 Facial is on it’s way to Plymouth Meeting. Sign up for news about our shop opening, including early access to facial appointments and exclusive pre-opening offers!</Text>
                        <InputGroup maxW="400px" alignItems="center">
                            <Input type="email" placeholder="Email*" bg="#fff" border="none" h="3rem" pr='16px'/>
                            <InputRightElement w="auto" top="" mr='16px'>
                                <Text>Sign Up</Text>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <Box>
                        <Text textTransform="uppercase" fontWeight={600}>As Seen In</Text>
                        <Flex gap={8} marginTop="16px">
                            <Image 
                                w={["60px","100px"]}
                                h={["30px","40px"]}
                                src="https://cdn.shopify.com/s/files/1/1704/8471/files/vogue-logo.png?v=1660943915"
                            />
                            <Image 
                                w={["60px","100px"]}
                                h={["30px","40px"]}
                                src="https://cdn.shopify.com/s/files/1/1704/8471/files/goop-logo.png?v=1660943915"
                            />
                            <Image 
                                w={["60px","100px"]}
                                h={["30px","40px"]}
                                src="https://cdn.shopify.com/s/files/1/1704/8471/files/elle-logo.png?v=1660943916"
                            />
                        </Flex>
                    </Box>
                </Box>
            </Container>
            <Box pos="absolute" bottom="0" right="0" w="50%" display={['none','block']}>
                <Image 
                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/lp-image.webp?v=1659394060"
                />
            </Box>
        </Box>
    )
}