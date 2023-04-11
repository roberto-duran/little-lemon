import { fetchAPI } from "../../../lib/bookingApi.js";
import { useReducer } from "react";
import ReservationForm from "./components/ReservationForm.jsx";

export default function Reservation(){
    const updateTimes = (date) => {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            {/*<Heading />*/}
            <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
        </>
    );
};
