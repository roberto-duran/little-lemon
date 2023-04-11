import {Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Textarea, VStack} from "@chakra-ui/react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useState} from "react";

export default function ReservationForm({availableTimes, updateTimes}){
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            reservationName: "",
            email: "",
            date: "",
            time: "",
            guests: 1,
            occasion: "",
            comment: "",
        },
        onSubmit: (values) => {
           console.log(values);
        },
        validationSchema: Yup.object().shape({
            reservationName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            date: Yup.string().required("Required"),
            time: Yup.string().required("Required"),
            guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Required"),
            comment: Yup.string().min(25, "Must be at least 25 characters")
        }),
    });

    return (
        <VStack p={32} display='flex' justifyContent="center">
            <Heading as="h1" id="contactme-section">
                Reservation
            </Heading>
            <Box p={6} rounded="md" w="100%">
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl isInvalid={formik.touched.reservationName && formik.errors.reservationName}>
                            <FormLabel htmlFor="firstName">Reservation Name</FormLabel>
                            <Input
                                id="reservationName"
                                name="reservationName"
                                {...formik.getFieldProps('reservationName')}
                            />
                            <FormErrorMessage>{formik.errors.reservationName}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                            <FormLabel htmlFor="guests">Email</FormLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                {...formik.getFieldProps('email')}
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                            <FormLabel htmlFor="date" >Choose date</FormLabel>
                            <Input
                                id="date"
                                name="date"
                                type="date"
                                {...formik.getFieldProps('date')}
                            />
                        </FormControl>

                        <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                            <FormLabel htmlFor="time" >Choose time</FormLabel>
                            <Select id="time" name="time"
                                    {...formik.getFieldProps('time')}
                            >
                                <option value=""></option>
                                {availableTimes.map((time) => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                            <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <Input
                                id="guests"
                                name="guests"
                                type="number"
                                placeholder="1"
                                min="1"
                                max="10"
                                {...formik.getFieldProps('guests')}
                            />
                            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="time">Occasion</FormLabel>
                            <Select id="occasion" name="occasion"
                                    {...formik.getFieldProps('occasion')}
                            >
                                <option value=""></option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Select>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                            <FormLabel htmlFor="comment">Special Request</FormLabel>
                            <Textarea
                                id="comment"
                                name="comment"
                                height={250}
                                {...formik.getFieldProps('comment')}
                            />
                            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                        </FormControl>

                        <Button type="submit"
                                bgColor="secondary.100"
                                isLoading={isLoading}
                                loadingText='Submitting'
                                width="full">
                            Submit
                        </Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    );
};
