import { Box, Container, Flex, Stack, Heading, Text, Link } from "@chakra-ui/react"
import Image from "next/image"



export default function ThreeColumnCards(props) {
    const offers = [
        {
            image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/Group_Look_03_073_1_1.png?v=1661783186',
            headling: 'The Gift of Giving',
            description: props.offer1,
            cta: 'Book a Facial',
            href: 'https://www.heydayskincare.com/#book-now'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/Screen_Shot_2022-08-15_at_11.05_1.png?v=1661783464',
            headling: 'Early Access to Microcurrent',
            description: props.offer2,
            cta: 'Book a Facial',
            href: 'https://www.heydayskincare.com/#book-now'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/tyraBookerr_af661089-3980-441a-9272-1f158a1e586e.png?v=1661783489',
            headling: '25% Off Skincare Essentials',
            description: props.offer3,
            cta: 'Shop New Arrivals',
            href: 'https://www.heydayskincare.com/collections/new'
        }
    ]

    return (
        <Box>
            <Container maxW="1280px">
                <Stack textAlign="center">
                    <Box mb="16px">
                        <Heading>Our September Offers</Heading>
                    </Box>
                    <Flex flexDir={["column", null, "row"]} justifyContent="space-between">
                        {offers.map(offer => (
                            <Box offer={offer} borderRadius="24px" overflow="hidden" bg="#F7EBE3" mb={["20px"]} w={["100%", null, "31%"]}>
                                <Box>
                                    <Image 
                                        src={offer.image}
                                        layout="responsive"
                                        width={300}
                                        height={225}
                                        unoptimized
                                    />
                                </Box>
                                <Stack textAlign="left" spacing="16px" p="20px">
                                    <Heading as="h3" fontSize="24px">{offer.headling}</Heading>
                                    <Text>{offer.description}</Text>
                                    <Link href={offer.href} textDecoration="underline" color="#105368" fontWeight={600}>{offer.cta}</Link>
                                </Stack>
                            </Box>
                        ))}
                    </Flex>
                </Stack>
            </Container>
        </Box>
    )
}