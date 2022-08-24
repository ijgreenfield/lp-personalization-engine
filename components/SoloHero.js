import { Box, Container, Heading, Text, Input, Button, Stack, InputRightElement, InputGroup } from "@chakra-ui/react";
import Image from "next/image";

export default function SoloHero(props) {
    const showForm = props.form;
    const showLogos = props.logos

    if (showForm) {
        return (
            <Box bg='linear-gradient(180deg, #FEF2E1 0%, #FFEEDB 100%);' pos="relative">
                <Container maxW='1280px' py="96px">
                    <Box pos="relative">
                        <Stack maxW={['100%', '50%']} marginBottom="40px" spacing="16px">
                            <Heading fontSize={["32px","40px"]} fontWeight={500}>{props.Heading}</Heading>
                            <Text>{props.Description}</Text>
                            <InputGroup maxW="400px" alignItems="center">
                                <Input type="email" placeholder="Email*" bg="#fff" border="none" h="3rem" pr='16px'/>
                                <InputRightElement w="auto" top="" mr='16px'>
                                    <Text>Sign Up</Text>
                                </InputRightElement>
                            </InputGroup>
                        </Stack>
                    </Box>
                </Container>
                <Box pos="absolute" bottom="0" right="0" w="50%" h="100%" display={['none','block']}>
                    <Box pos="relative" w="100%" h="600px">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/lp-image.webp?v=1659394060"
                            layout="fill"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box bg='linear-gradient(180deg, #FEF2E1 0%, #FFEEDB 100%);'>
                <Container maxW='1280px' py="96px">
                    <Box pos="relative">
                        <Stack maxW={['100%', '50%']} marginBottom="40px" spacing="16px">
                            <Heading fontSize={["32px","40px"]} fontWeight={500}>{props.Heading}</Heading>
                            <Text>{props.Description}</Text>
                            <Button variant="primary">{props.CTA}</Button>
                        </Stack>
                    </Box>
                </Container>
                <Box pos="absolute" bottom="0" right="0" w="50%" display={['none','block']}>
                    <Image 
                        src="https://cdn.shopify.com/s/files/1/1704/8471/files/lp-image.webp?v=1659394060"
                        layout="fill"
                    />
                </Box>
            </Box>
        )
    }
    
}