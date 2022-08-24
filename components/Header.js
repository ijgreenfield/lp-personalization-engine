import { Container, Flex, Image, Spacer, Box, Button } from "@chakra-ui/react";

export default function Header(props) {
    return (
        <Box pos="fixed" zIndex="10" w="100%" bg="#fff" boxShadow="lg">
            <Container maxWidth="1280px">
                <Flex alignItems="center" py="16px">
                    <Image 
                        src="https://cdn.shopify.com/s/files/1/1704/8471/files/logo-checkout_69d9b6fc-624f-4ac5-89b2-ecb186991eaa.png?v=1630526092"
                        height="40px"
                    />
                    <Spacer />
                    <Button variant={["link", null, "primary"]}>Book Your Facial</Button>
                </Flex>
            </Container>
        </Box>
    )
}