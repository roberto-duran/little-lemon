import { fetchAPI } from "../../../lib/bookingApi.js";
import { useReducer } from "react";
import BookingForm from "./components/BookingForm.jsx";

export default function BookingPage(){
    const updateTimes = (date) => {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            {/*<Heading />*/}
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </>
    );
};
