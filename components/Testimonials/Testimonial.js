import { Box, Flex, Text, Stack, HStack } from "@chakra-ui/react"
import Image from "next/image"


export default function Testimonial(props) {
    return (
        <Box bg="#ffffff" w="max-content" maxW="560px" px="24px" py="32px" borderRadius="8px">
            <Stack textAlign="left">
                <HStack>
                    <Box pos="relative" w="65px" h="65px" borderRadius="999px" overflow="hidden">
                        <Image 
                            src={props.client.image}
                            layout="fill"
                            objectFit="contain"
                            unoptimized
                        />
                    </Box>
                    <Flex flexDir="column">
                        <Text fontWeight="black">{props.client.name}</Text>
                        <Text fontSize="14px" color="#9A9B9E">Heyday Customer since {props.client.memberSince}</Text>
                    </Flex>
                </HStack>
                <Box>
                    <Text>{props.client.review}</Text>
                </Box>
            </Stack>
        </Box>
    )
}