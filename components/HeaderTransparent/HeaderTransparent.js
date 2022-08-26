import { Container, Flex, Image, Box } from "@chakra-ui/react";

export default function HeaderTransparent() {
    return (
        <Box pos="absolute" top="0" zIndex="10" w="100%" bg="rbg(0,0,0,0)">
            <Container maxWidth="1280px">
                <Flex alignItems="center" py="16px" textAlign="center">
                    <Image 
                        src="https://cdn.shopify.com/s/files/1/1704/8471/files/logo-white.png?v=1660850039"
                        height="50px"
                        mx="auto"
                    />
                </Flex>
            </Container>
        </Box>
    )
}