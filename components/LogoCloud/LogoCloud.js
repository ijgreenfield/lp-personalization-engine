import { Box, Container, Flex, Text, Link } from "@chakra-ui/react"
import Image from "next/image"

export default function LogoCloud(props) {
    return (
        <Box py="48px" textAlign="center">
            <Container>
                <Box>
                    <Text my="8px" textTransform="uppercase" fontWeight="600" fontSize="md">As Seen In</Text>
                    <Flex justify="center" wrap="wrap" maxW="590px" mx="auto">
                        <Flex w="100%" maxW="33%" my="1em" pos="relative">
                            <Link pos="relative" w="100%" h="100%">
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/vogue-logo-bg.webp?v=1661175640"
                                    layout="fixed"
                                    width={120}
                                    height={40}
                                    unoptimized
                                />
                            </Link>
                        </Flex>
                        <Flex w="100%" maxW="33%" my="1em">
                            <Link pos="relative" w="100%" h="100%">
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/fast-company-logo-bg.webp?v=1661175800"
                                    layout="fixed"
                                    width={120}
                                    height={40}
                                    unoptimized
                                />
                            </Link>
                        </Flex>
                        <Flex w="100%" maxW="33%" my="1em">
                            <Link pos="relative" w="100%" h="100%">
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/GLAMOUR-LOGO_320x_553d90bd-c79e-4261-8774-a4a8924dcdee.webp?v=1661176774"
                                    layout="fixed"
                                    width={120}
                                    height={40}
                                    unoptimized
                                />
                            </Link>
                        </Flex>
                        <Flex w="100%" maxW="33%" my="1em">
                            <Link pos="relative" w="100%" h="100%">
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/WIRECUTTER-LOGO_320x_78236170-197a-4091-bbe2-65d247440820.webp?v=1661176917"
                                    layout="fixed"
                                    width={120}
                                    height={40}
                                    unoptimized
                                />
                            </Link>
                        </Flex>
                        <Flex w="100%" maxW="33%" my="1em">
                            <Link pos="relative" w="100%" h="100%">
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/HYPEBAE-LOGO_320x_1ff0a6f6-84c5-47ea-917a-ae0e2067df10.webp?v=1661177106"
                                    layout="fixed"
                                    width={120}
                                    height={40}
                                    unoptimized
                                />
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
            </Container>
        </Box>
    )
}