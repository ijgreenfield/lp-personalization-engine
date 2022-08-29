import { Box, Container, Flex, Stack, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

const offers = [
    {
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/Recess_HeyDay-66_1.png?v=1659042552',
        headling: 'The Gift of Giving',
        description: 'Refer up to 3 friends for a free facial & receive a $25 gift card for each one! Let your friend know to use code MEMBERFRIENDCOMP when booking.',
        cta: 'Book a Facial'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/Recess_HeyDay-66_1.png?v=1659042552',
        headling: 'Early Access to Microcurrent',
        description: 'Feel that spark? It’s not just the connection of skincare and self-care—it’s our latest enhancement, Microcurrent. We’re giving members the chance to try it for a limited time at $20 (an $80 value)!',
        cta: 'Book a Facial'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/Recess_HeyDay-66_1.png?v=1659042552',
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
                    <Box>
                        <Heading>Our September Offers</Heading>
                    </Box>
                    <Flex flexDir={["column", null, null, "row"]} justifyContent="space-between">
                        {offers.map(offer => (
                            <Box offer={offer} borderRadius="24px" overflow="hidden" bg="#F7EBE3" mb={["20px"]} w={["100%", null, null, "32%"]}>
                                <Box>
                                    <Image 
                                        src={offer.image}
                                        layout="responsive"
                                        width={330}
                                        height={200}
                                        unoptimized
                                    />
                                </Box>
                                <Stack textAlign="left" spacing="16px" p="20px">
                                    <Heading>{offer.headling}</Heading>
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