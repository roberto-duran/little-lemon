import {
    Box,
    Button, HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure, VStack
} from "@chakra-ui/react";
import { BsCalendarCheck, BsClock } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import {AiOutlineUser, AiOutlineUsergroupAdd,} from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { VscCommentUnresolved } from "react-icons/vsc";

export default function ReservationConfirmation({isOpen, data, closeModal}){
    const { onClose } = useDisclosure()
    const handleClose = () => {
        closeModal();
    }
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.500'
                backdropFilter='blur(2px)'
            />
            <ModalContent>
                <ModalHeader>Confirm your reservation</ModalHeader>
                <ModalCloseButton onClick={closeModal}/>
                <ModalBody>
                    <VStack spacing={4} alignItems='flex-start'>
                        <Box display='flex' gap={2}>
                            <AiOutlineUser fontSize={24} /> <Text>Reservation for: {data.reservationName}</Text>
                        </Box>
                        <Box display='flex' gap={2}>
                            <BiEnvelope fontSize={24} /> <Text>Reservation email: {data.email}</Text>
                        </Box>
                        <HStack>
                            <BsCalendarCheck fontSize={20} /> <Text> Date: {data.date}</Text>
                            <BsClock fontSize={20} /> <Text>At: {data.time}</Text>
                        </HStack>
                        <Box display='flex' gap={2}>
                            <AiOutlineUsergroupAdd fontSize={24} /> <Text>Number of guest(s): {data.guests}</Text>
                        </Box>
                        {data.occasion &&
                            <Box display='flex' gap={2}>
                                <GiPartyPopper fontSize={24} /> <Text>Occasion: {data.occasion}</Text>
                            </Box>
                        }
                        {data.comment &&
                         <Box display='flex' gap={2}>
                             <VscCommentUnresolved fontSize={24} /> <Text>Comment: {data.comment}</Text>
                         </Box>
                        }


                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button bgColor='secondary.100' onClick={closeModal}>Confirm!</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
