import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Image,
    HStack,
    IconButton,
    useBreakpointValue,
} from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function Nav(){
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    })

    const navItems = [
        {name: 'Home' , link: '/'},
        {name: 'About' , link: '/about'},
        {name: 'Menu' , link: '/menu'},
        {name: 'Reservations' , link: '/reservations'},
        {name: 'Order Online' , link: '/order_online'},
        {name: 'Login' , link: '/login'}
    ];

    return (
        <>
            <nav>
                <Box as="section"
                     pb={{
                         base: '12',
                         md: '24',
                     }}
                >
                    <Box as="nav" bg="bg-surface" boxShadow="sm">
                        <Container
                            as={Flex}
                            maxW="container.lg"
                            justifyContent="space-between"
                            py={{
                                base: '4',
                                lg: '5',
                            }}
                        >
                            <Image src='./images/Logo.svg'/>
                            <HStack spacing="10" justify="space-between">
                                {isDesktop ? (
                                    <Flex justify="space-between" flex="1">
                                        <ButtonGroup variant="link" spacing="8">
                                            {navItems.map((item) => (
                                                <Button key={item.name}>
                                                    <Link to={item.link}>{item.name}</Link>
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </Flex>
                                ) : (
                                     <IconButton
                                         variant="ghost"
                                         icon={<FiMenu fontSize="1.25rem"/>}
                                         aria-label="Open Menu"
                                     />
                                 )}
                            </HStack>
                        </Container>
                    </Box>
                </Box>
            </nav>

        </>
    )
}
