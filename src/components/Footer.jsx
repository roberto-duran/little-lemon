import {
    Button,
    Container,
    Image,
    Box,
    Stack,
    Text,
} from "@chakra-ui/react";

import {navItems} from "../lib/data.js";
import {Link} from "react-router-dom";

export default function Footer(){
    return (
        <footer>
            <Container maxW="container.xl" as="footer" role="contentinfo">
                <Stack
                    spacing="8"
                    direction={{base: "column", md: "row"}}
                    justify="space-between"
                    py={{base: "2", md: "4"}}
                >
                    <Stack spacing="4" minW="36" flex="1">
                        <Box>
                            <Image src="./images/logo.png" height={52}/>
                        </Box>
                    </Stack>
                    <Stack spacing="4" minW="36" flex="1">
                        <Text fontSize="xl" fontWeight="semibold">
                            Doormat Navigation
                        </Text>
                        <Stack spacing="3" shouldWrapChildren>
                            {navItems.map((item) => (
                                <Button variant="link" key={item.name}>
                                    <Link to={item.link}>{item.name}</Link>
                                </Button>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack spacing="4" minW="36" flex="1">
                        <Text fontSize="xl" fontWeight="semibold">
                            Contact
                        </Text>
                        <Stack spacing="3" shouldWrapChildren>
                            <Button variant="link">Address</Button>
                            <Button variant="link">Phone Number</Button>
                            <Button variant="link">Email</Button>
                        </Stack>
                    </Stack>
                    <Stack spacing="4">
                        <Text fontSize="xl" fontWeight="semibold">
                            Stay up to date
                        </Text>
                        <Stack spacing="3" shouldWrapChildren>
                            <Button variant="link">Address</Button>
                            <Button variant="link">Phone Number</Button>
                            <Button variant="link">Email</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            )
        </footer>
    );
}
