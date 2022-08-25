import { Box, Container, Text } from "@chakra-ui/react";

export default function AnnouncementBar(props) {
    return (
        <Box bg={props.bgColor}>
            <Container textAlign="center" py="16px">
                <Box>
                    <Text fontFamily="Cadiz SemiBold" fontSize={["12px", "16px"]}>{props.announcement}</Text>
                </Box>
            </Container>
        </Box>
    )
}