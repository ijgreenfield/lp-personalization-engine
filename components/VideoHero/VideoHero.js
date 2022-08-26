import {  Box, Flex, Heading, Input, Stack, Text, Button, Icon } from "@chakra-ui/react"
import Image from "next/image"
import { MdLocationPin } from "react-icons/md";

export default function VideoHero(props) {
    const FORM_ID = props.form_id
    const klaviyo_form = `klaviyo-form-${FORM_ID}`
    return (
        <Box>
            <Box pos="relative" h="100%" pt={["104px", null, null, "0px"]} pb={["48px", null, null, "0"]}>
                <Flex pos={["relative",null, null,"absolute"]} top="0" right="0" left="0" bottom="0" zIndex={5} m={["0","auto"]} px="20px" h="max-content" w={["100%","80%"]} justify="space-between" alignItems="center" flexDirection={["column", null, null, "row"]} id="booking-form" maxH={[null, null, "70%"]} maxW="1280px">
                    <Stack maxW={["100%", null, '50%', "50%"]} textAlign={["center", "left"]} spacing="24px">
                        <Heading color="#fff" as="h1" size="3xl" lineHeight="125%" textAlign={["left"]} fontFamily="Cadiz SemiBold" fontWeight="700" fontStyle="italic">{props.title}</Heading>
                        <Text color="#fff" fontSize={["14px", "16px"]} lineHeight="145%" display={["none", "block"]}>{props.description}</Text>
                    </Stack>
                    <Stack maxW="460px" w={["100%", null, "50%"]} h="auto" minW={[null,"460px"]} bg="#fff" p={["20px","30px"]} borderRadius="8px" alignItems="center" textAlign="center" display='block' spacing="16px" my="16px">
                        <Box>
                            <Heading as="h3" size="lg" fontFamily="Cadiz SemiBold" textTransform={["uppercase", "none"]}>50% Off Your First Facial</Heading>
                        </Box>
                        <Flex alignItems="center" justifyContent="center" mb="20px">
                            <Icon as={MdLocationPin} h={8} w={8} color="#105368"/>
                            <Text fontFamily="Cadiz SemiBold" color="#105368">Plymouth Meeting</Text>
                        </Flex>
                        <div className={klaviyo_form}></div>
                        <script type="text/javascript" src="//www.klaviyo.com/media/js/public/klaviyo_subscribe.js"></script> 
                    </Stack>
                    <Text color="#fff" fontSize="14px" display={["none", "none"]}>Heyday® is more than a facial. It’s a journey of self-discovery – measured in lorem, championed by the community, and fueled by the desire to lorem ipsum dolor blah. BOOK NOW & GET YOUR FIRST FACIAL HALF OFF at participating locations.</Text>
                </Flex>
                <Box bg="rgb(0,0,0,.5)" pos="absolute" top="0" left="0" zIndex={2} w="100%" h="100%"></Box>
                <Box pos="absolute" top="0" left="0" zIndex={1} w="100%" h="100%" display={["block", null, "block", "none"]}>
                    <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/Recess_HeyDay-66_1.png?v=1659042552"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                </Box>
                <Box zIndex={1} h="100%" display={["none", null, null, "block"]}>
                    <Box minH="100%">
                        <video muted autoPlay loop width="100%" height="100%">
                            <source src="https://cdn.shopify.com/videos/c/o/v/328ec4937774489088ea9fc2eef95cfc.mp4"/>
                        </video>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}