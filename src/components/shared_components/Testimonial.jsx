import {Box, HStack, Text} from "@chakra-ui/react";
import Rating from "./Rating.jsx";

export default function Testimonial({testimonial}){
    let counter = 1;
    return (
        <Box display='flex' borderRadius='lg' flexDir='column' width='100%' bgColor='gray.100' padding={5}>
            <HStack justifyContent='space-between'>
                <Text fontWeight='bold'>{testimonial.name}</Text>
                <HStack>
                    {Array.from({length: 5}, () => (
                        <Rating isFilled={counter <=testimonial.rating } key={counter++}  />
                    ))}
                </HStack>
            </HStack>
            <Text>{testimonial.text}</Text>
        </Box>
    );
};
