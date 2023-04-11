import {Container, Grid, GridItem, HStack, Text} from "@chakra-ui/react";
import LMButton from "../../../../shared_components/LMButton.jsx";
import LmCard from "../../../../shared_components/LMCard.jsx";
import { specialItems } from "../../../../lib/data.js";


export default function Specials(){
    return (
        <Container maxW="container.xl" py={5} display='flex' mt={20} flexDir='column' gap={8}>
            <HStack justifyContent='space-between' width='100%'>
                <Text as="h1" fontSize='3xl' fontWeight='bold'>Specials</Text>
                <LMButton text='Online Menu'  />
            </HStack>
            <Grid display='grid' alignItems='center' gap={5} gridTemplateColumns={{
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
            }}>
                {specialItems.map((item) => (
                    <GridItem key={item.name} display='flex' justifyContent='center'>
                        <LmCard key={item.name} data={item} />
                    </GridItem>
                ))}
            </Grid>
        </Container>
    );
};
