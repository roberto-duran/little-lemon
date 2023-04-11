import {Container, Heading, Text, Box, Stack, Image, Hide} from "@chakra-ui/react";
import LMButton from "../../../../shared_components/LMButton.jsx";

export default function Hero(){
    return (
        <Container maxW="container.lg" py={5} display='flex'
                   justifyContent='space-between'
                   flexDir={{
                       sm: 'column', md: 'row'
                   }}>
            <Stack width='xl'>
                <Heading fontSize="2xl" color="secondary.100">
                    Little Lemon
                </Heading>
                <Heading fontSize="md" color="white">
                    Chicago
                </Heading>
                <Box display='flex' flexDir='column' gap='4'>
                    <Text color="white" width={{md: '12.5rem', lg: '18.75rem'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <LMButton text="Reserve Table" action={'fsdf'} />
                </Box>
            </Stack>
            <Stack>
                <Hide below='md'>
                    <Image src="./images/restauranfood.jpg" width='16.62rem' height='20rem' borderRadius={10}/>
                </Hide>
            </Stack>
        </Container>
    );
}
