import {Container, Box, Text, Grid, GridItem} from "@chakra-ui/react";
import { testimonials } from "../../../../lib/data.js";
import Testimonial from "../../../shared_components/Testimonial.jsx";


export default function Testimonials(){
    return (
        <Container maxW="container.xl" py={5} display='flex' mt={20} flexDir='column' gap={4}>
            <Box display='center' justifyContent='center' width='100%'>
                <Text as="h1" fontSize='3xl' fontWeight='bold'>Testimonials</Text>
            </Box>
            <Grid display='grid' alignItems='center' gap={5} gridTemplateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
            }}>
                {testimonials.map((testimonial, index) => (
                    <GridItem key={testimonial.id} display='flex' justifyContent='center'>
                        <Testimonial key={testimonial.id} testimonial={testimonial} />
                    </GridItem>
                ))}
            </Grid>
        </Container>
    );
};
