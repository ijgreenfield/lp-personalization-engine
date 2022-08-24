import { Box, Heading, Container, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

export default function ThreeColumn(props) {
    return (
        <Box bg="#f9f4f0">
            <Container maxWidth="1280px">
                <Stack py="48px" spacing="24px">
                    <Stack spacing='16px' maxW={[null, "70%"]} mx="auto">
                        <Heading textAlign="center" maxW={['100%', '60%']} mx="auto" fontWeight={500}>{props.Heading}</Heading>
                        <Text textAlign="center">{props.Subtext}</Text>
                    </Stack>
                    <SimpleGrid columns={[1,3]} spacing={10} mt='64px'>
                        <Box>
                            <Box pos="relative" w="100%" h={["205px", null, "225px"]} borderRadius="8px" overflow="hidden">
                                <Image 
                                    src={props.Img1}
                                    layout="fill"
                                    objectFit="cover"
                                    unoptimized="true"
                                />
                            </Box>
                            <Heading as='h3' fontSize='24px' fontWeight={500} textAlign="center" mt='16px' px='24px'>Tell us about your skincare goals.</Heading>
                        </Box>
                        <Box>
                            <Box pos="relative" w="100%" h={["205px", null, "225px"]} borderRadius="8px" overflow="hidden">
                                <Image 
                                    src={props.Img2}
                                    layout="fill"
                                    objectFit="cover"
                                    unoptimized="true"
                                />
                            </Box>
                            <Heading as='h3' fontSize='24px' fontWeight={500} textAlign="center" mt='16px' px='24px'>Enjoy a personalized, 50-minute treatment.</Heading>
                        </Box>
                        <Box>
                            <Box pos="relative" w="100%" h={["205px", null, "225px"]} borderRadius="8px" overflow="hidden">
                                <Image 
                                    src={props.Img3}
                                    layout="fill"
                                    objectFit="cover"
                                    unoptimized="true"
                                />
                            </Box>
                            <Heading as='h3' fontSize='24px' fontWeight={500} textAlign="center" mt='16px' px='24px'>Learn how to enhance your daily routine.</Heading>
                        </Box>
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    )
}