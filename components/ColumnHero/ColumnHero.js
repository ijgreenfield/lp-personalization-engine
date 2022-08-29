import { Heading, Text, Stack, Box, Container, Flex, Button } from "@chakra-ui/react"
import Image from "next/image"

export default function ColumnHero(props) {
    return (
        <Box>
            <Container maxW="1280px">
                <Flex bg="#F7EBE3" borderRadius="24px" overflow="hidden" flexDir={["column", null, "row"]} justifyContent="center" alignItems="center">
                    <Box w={["100%", null, null, "50%"]} h="100%" pos="relative">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/Anjelika_Frye_Mariah_Tabb_Nadia_Blocker__Look_03_088_1_4789fb05-3237-427b-be32-d6b0342aabe6.png?v=1661783592"
                            layout="responsive"
                            width={500}
                            height={400}
                            priority
                        />
                    </Box>
                    <Stack px={["20px", null, null, "64px"]} py={["20px"]} w={["100%", null, null, "50%"]} spacing="16px">
                        <Heading fontSize={["32px", null, "56px"]}>{props.Heading}</Heading>
                        <Text fontSize={[null, null, "24px"]}>{props.Subheading}</Text>
                        <Text>{props.Description}</Text>
                        <Button variant="primary">{props.CTA}</Button>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}