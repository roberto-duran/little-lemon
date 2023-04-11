import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ReservationForm from "../components/pages/reservation/components/ReservationForm.jsx";
import { BrowserRouter} from "react-router-dom";


describe("Reservation Form", () => {
    const availableTimes = [
        "17:00",
        "17:30",
        "18:30",
        "19:00",
        "20:30",
        "21:00",
        "22:00",
        "23:30"
    ];
    test('Renders the BookingForm heading', () => {
        render(
            <BrowserRouter>
                <ReservationForm availableTimes={availableTimes} />
            </BrowserRouter>);
        const headingElement = screen.getByText("Reservation");
        expect(headingElement).toBeInTheDocument();
    })
});

