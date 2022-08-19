import { Center, Container, Heading, Box, Button, Stack, Text } from "@chakra-ui/react";


export default function CTASection(props) {
    return (
        <Box bg='#EFEFEF'>
            <Container>
                <Center py='120px'>
                    <Stack textAlign='center' spacing='32px'>
                        <Heading fontWeight={500}>Questions? We have answers.</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor montalban bingo bango. </Text>
                        <Box textAlign='center'>
                            <Button variant='primary'>Book Your Facial</Button>
                        </Box>
                    </Stack>
                </Center>
            </Container>
        </Box>
    )
}