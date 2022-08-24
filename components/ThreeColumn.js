import { Box, Heading, Container, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

export default function ThreeColumn(props) {
    return (
        <Box>
            <Container maxWidth="1280px">
                <Stack py="48px" spacing="">
                    <Stack spacing='16px'>
                        <Heading textAlign="center" maxW={['100%', '60%']} mx="auto" fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
                        <Text textAlign="center" fontSize='18px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor.</Text>
                    </Stack>
                    <SimpleGrid columns={[1,3]} spacing={10} mt='64px'>
                        <Box pos="relative" w="100%" h="200px">
                            <Image 
                                src="https://cdn.shopify.com/s/files/1/1704/8471/files/Naturopathica_2.png?v=1650278436"
                                layout="fixed"
                                width="100%"
                                height={200}
                            />
                            <Heading as='h3' fontSize='24px' fontWeight={500} textAlign="center" mt='16px' px='24px'>Lorem ipsum dolor mont blanc</Heading>
                        </Box>
                        <Box>
                            <Image 
                                src="https://cdn.shopify.com/s/files/1/1704/8471/files/Naturopathica_2.png?v=1650278436"
                                layout="responsive"
                                height={275}
                                width={300}
                            />
                            <Heading as='h3' fontSize='24px' fontWeight={500} textAlign="center" mt='16px' px='24px'>Lorem ipsum dolor mont blanc</Heading>
                        </Box>
                        <Box>
                            <Image 
                                src="https://cdn.shopify.com/s/files/1/1704/8471/files/Naturopathica_2.png?v=1650278436"
                                layout="responsive"
                                height={275}
                                width={300}
                            />
                            <Heading as='h3' fontSize='24px' fontWeight={500} textAlign="center" mt='16px' px='24px'>Lorem ipsum dolor mont blanc</Heading>
                        </Box>
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    )
}