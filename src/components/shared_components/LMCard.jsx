import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Image,
    Text,
    Heading,
    Stack, HStack
} from "@chakra-ui/react";
import LMButton from "./LMButton.jsx";

export default function LmCard({data}){
    return (
        <article>
            <Card maxW='sm' bgColor='gray.50'>
                <CardBody padding={0}>
                    <Image
                        src={data.img}
                        alt={data.name}
                        borderTopRadius='lg'
                        width='100%'
                        height='13rem'
                    />
                    <Stack mt='1' spacing='3' padding={4}>
                        <HStack justifyContent='space-between'>
                            <Heading size='md'>{data.name}</Heading>
                            <Text color='secondary.100' fontWeight='bold' boxShadow='sm' fontSize='2xl' padding={1}>
                                {data.price}
                            </Text>
                        </HStack>
                        <Text height='4.5rem'>{data.description}</Text>
                    </Stack>
                </CardBody>
                <CardFooter display='flex' justifyContent='center'>
                    <ButtonGroup spacing='2'>
                        <LMButton text='Order Online'/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </article>
    );
};
