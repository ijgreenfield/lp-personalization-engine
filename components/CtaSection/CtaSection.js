import { Center, Container, Heading, Box, Button, Stack, Text } from "@chakra-ui/react";


export default function CTASection(props) {
    const  openForm = () => {
        window._klOnsite = window._klOnsite || [];
        window._klOnsite.push(['openForm', 'Wu6tZL']);
    }

    return (
        <Box bg={props.bgColor}>
            <Container>
                <Center py={['56px', null, '104px']}>
                    <Stack textAlign='center' spacing='32px'>
                        <Heading fontWeight={500}>{props.Heading}</Heading>
                        {props.Subtext && <Text>{props.Subtext}</Text>}
                        <Box textAlign='center'>
                            <Button variant='primary' onClick={openForm} fontSize="16px">Book Your Facial</Button>
                        </Box>
                    </Stack>
                </Center>
            </Container>
        </Box>
    )
}