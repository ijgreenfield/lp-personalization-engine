import { Box, Container, Flex, Stack, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

const offers = [
    {
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/Group_Look_03_073_1_1.png?v=1661783186',
        headling: 'The Gift of Giving',
        description: 'Refer up to 3 friends for a free facial & receive a $25 gift card for each one! Let your friend know to use code MEMBERFRIENDCOMP when booking.',
        cta: 'Book a Facial'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/Screen_Shot_2022-08-15_at_11.05_1.png?v=1661783464',
        headling: 'Early Access to Microcurrent',
        description: 'Feel that spark? It’s not just the connection of skincare and self-care—it’s our latest enhancement, Microcurrent. We’re giving members the chance to try it for a limited time at $20 (an $80 value)!',
        cta: 'Book a Facial'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/tyraBookerr_af661089-3980-441a-9272-1f158a1e586e.png?v=1661783489',
        headling: '25% Off Skincare Essentials',
        description: 'On top of your usual 15% product discount, enjoy an extra 25% off purchases of $200 or more when you purchase products in shop or online!',
        cta: 'Shop New Arrivals'
    }
]

export default function ThreeColumnCards() {
    return (
        <Box>
            <Container maxW="1280px">
                <Stack textAlign="center">
                    <Box mb="16px">
                        <Heading>Our September Offers</Heading>
                    </Box>
                    <Flex flexDir={["column", null, null, "row"]} justifyContent="space-between">
                        {offers.map(offer => (
                            <Box offer={offer} borderRadius="24px" overflow="hidden" bg="#F7EBE3" mb={["20px"]} w={["100%", null, null, "31%"]}>
                                <Box>
                                    <Image 
                                        src={offer.image}
                                        layout="responsive"
                                        width={300}
                                        height={175}
                                        unoptimized
                                    />
                                </Box>
                                <Stack textAlign="left" spacing="16px" p="20px">
                                    <Heading as="h3" fontSize="24px">{offer.headling}</Heading>
                                    <Text>{offer.description}</Text>
                                    <Link href="/">{offer.cta}</Link>
                                </Stack>
                            </Box>
                        ))}
                    </Flex>
                </Stack>
            </Container>
        </Box>
    )
}