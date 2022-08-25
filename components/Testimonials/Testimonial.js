import { Box, Flex, Text, Stack, HStack } from "@chakra-ui/react"
import Image from "next/image"


export default function Testimonial(props) {
    return (
        <Box bg="#ffffff" w="100%" maxW="560px" px="24px" py="32px" borderRadius="8px" minH="240px">
            <Stack textAlign="left">
                <HStack>
                    <Box pos="relative" w="65px" h="65px" borderRadius="999px" overflow="hidden">
                        <Image 
                            src={props.client.image}
                            layout="fill"
                            objectFit="cover"
                            unoptimized
                        />
                    </Box>
                    <Flex flexDir="column">
                        <Text fontFamily="Cadiz SemiBold">{props.client.name}</Text>
                        <Text fontSize="14px" color="#9A9B9E">Heyday Customer since {props.client.memberSince}</Text>
                    </Flex>
                </HStack>
                <Box>
                    <Text fontSize={["14px", "16px"]}>{props.client.review}</Text>
                </Box>
            </Stack>
        </Box>
    )
}