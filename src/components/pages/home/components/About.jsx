import {Box, Container, Image, Text} from "@chakra-ui/react";


export default function About(){
    return (
        <Container maxW="container.xl" py={5}
                   bgColor='secondary.100'
                   alignItems='center'
                   display='flex' mt={20}
                   flexDir='row' gap={4}>
            <Box display='flex' flexDir='column' justifyContent='center' width='100%'>
                <Text as="h1" color='primary' fontSize='2xl' fontWeight='extrabold'>Little Lemon</Text>
                <Text as="h2" fontSize='xl' fontWeight='bold'>Chicago</Text>
                <Text as="p" fontSize='md' fontWeight='bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </Box>
            <Box display='flex'
                 justifyContent='felex-start'
                 alignItems='center'
                 width='100%'
                 position='relative'
                 minH='20rem'
            >
                <Image height='15rem' width='20rem' src='./images/owners.jpg' alt='Owners' />
                <Image height='15rem' width='20rem'
                       src='./images/restaurant.jpg'
                       alt='Restauerant'
                       position='absolute'
                       bottom='0.5rem'
                       left='8rem'
                />
            </Box>
        </Container>
    );
};
