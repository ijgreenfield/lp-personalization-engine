import { Container, Flex, Image, Spacer, Box, Button } from "@chakra-ui/react";

export default function Header(props) {
    return (
        <Box pos="fixed" zIndex="1000" w="100%" bg="#fff" boxShadow="lg">
            <Container maxWidth="1280px">
                <Flex alignItems="center" py="16px">
                    <Image 
                        src={props.logo}
                        height="40px"
                    />
                    <Spacer />
                    <Button variant={["primary", null, "primary"]} fontSize="14px">{props.Cta}</Button>
                </Flex>
            </Container>
        </Box>
    )
}